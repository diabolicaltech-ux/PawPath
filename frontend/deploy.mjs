#!/usr/bin/env node
// Deterministic static deployment helper. Build locally first, then upload the
// generated dist files to the existing PawPath project and explicitly promote
// the public custom-domain alias.
import { existsSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.VERCEL_TOKEN;
const TEAM_ID = process.env.VERCEL_TEAM_ID || 'team_0AUDeyf0zDhsSDekaSYR0yNs';
const PROJECT = process.env.VERCEL_PROJECT_NAME || 'pawpath';
const FRONTEND = join(process.cwd(), 'frontend');
const DIST = join(FRONTEND, 'dist');
if (!TOKEN) throw new Error('VERCEL_TOKEN is required');

function getFiles(dir, base = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return getFiles(full, rel);
    return [{ file: rel, data: readFileSync(full).toString('base64'), encoding: 'base64' }];
  });
}

async function api(path, options = {}) {
  const response = await fetch(`https://api.vercel.com${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || JSON.stringify(data));
  return data;
}

const files = getFiles(DIST);
// Keep the flattened upload's routing in sync with the repository config.
// The deployer must upload a root-level vercel.json because the Vercel project
// uses rootDirectory=null; otherwise only the guide rewrite would survive.
const repoVercel = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8'));
const rewrites = Array.isArray(repoVercel.rewrites) ? repoVercel.rewrites : [];
// The canonical generated site and every serverless handler live under
// frontend/. Place handlers at Vercel's root api/ path in the upload.
const apiDir = join(FRONTEND, 'api');
// Serverless handlers are optional; the directory may not exist (e.g. the
// rescue listing route was retired). Only upload handlers that are present.
if (existsSync(apiDir)) files.push(...getFiles(apiDir, 'api'));
files.push({ file: 'vercel.json', data: Buffer.from(JSON.stringify({
  // The repo-root vercel.json still carries cat-era redirects and an
  // install command that cds into frontend. With rootDirectory null and a
  // flattened upload, that command cannot resolve (ENOENT). Ship the minimal
  // config that matches the project's deterministic-upload project settings.
  framework: null,
  buildCommand: 'true',
  outputDirectory: '.',
  installCommand: 'npm ci --ignore-scripts',
  rewrites,
})).toString('base64'), encoding: 'base64' });
// Vercel resolves serverless dependencies from the upload root, so preserve
// the frontend runtime manifest at that root rather than under frontend/.
files.push({ file: 'package.json', data: readFileSync(join(FRONTEND, 'package.json')).toString('base64'), encoding: 'base64' });
files.push({ file: 'package-lock.json', data: readFileSync(join(FRONTEND, 'package-lock.json')).toString('base64'), encoding: 'base64' });
const deployment = await api(`/v13/deployments?skipAutoDetectionConfirmation=1`, {
  method: 'POST',
  body: JSON.stringify({ name: PROJECT, target: 'production', files, projectSettings: { framework: null, buildCommand: 'true', outputDirectory: '.', installCommand: 'npm ci --ignore-scripts', rootDirectory: null } }),
});
console.log(`Deployment: ${deployment.id} ${deployment.url}`);
await api(`/v9/projects/${PROJECT}?teamId=${TEAM_ID}`, { method: 'PATCH', body: JSON.stringify({ ssoProtection: null }) });
console.log('SSO protection disabled');
// Wait for the deployment to be READY before aliasing (alias requires READY).
for (let i = 0; i < 30; i++) {
  const d = await api(`/v13/deployments/${deployment.id}?teamId=${TEAM_ID}`);
  if (d.readyState === 'READY') break;
  if (d.readyState === 'ERROR' || d.readyState === 'CANCELED') throw new Error(`Deployment failed: ${d.readyState} ${d.error?.message || ''}`);
  await new Promise((r) => setTimeout(r, 2000));
}
const alias = await api(`/v13/deployments/${deployment.id}/aliases?teamId=${TEAM_ID}`, { method: 'POST', body: JSON.stringify({ alias: 'pawpath.quest' }) });
console.log(`Alias: ${alias.alias} (old deployment: ${alias.oldDeploymentId || 'none'})`);
