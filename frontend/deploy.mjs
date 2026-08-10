#!/usr/bin/env node
// Deterministic static deployment helper. Build locally first, then upload the
// generated dist files to the existing PawPath project and explicitly promote
// the public custom-domain alias.
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.VERCEL_TOKEN;
const TEAM_ID = process.env.VERCEL_TEAM_ID || 'team_0AUDeyf0zDhsSDekaSYR0yNs';
const PROJECT = process.env.VERCEL_PROJECT_NAME || 'pawpath';
const DIST = join(process.cwd(), 'dist');
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
// Include every serverless function alongside the static SPA. This keeps
// auth endpoints (and future API routes) deployed with the client bundle.
const apiDir = join(process.cwd(), 'api');
// API handlers live under frontend/api in the complete PawPath source. Include
// them at Vercel's root api/ path so serverless routes are actually emitted.
if (readdirSync(apiDir, { withFileTypes: true }).length) files.push(...getFiles(apiDir, 'api'));
const frontendApiDir = join(process.cwd(), 'frontend', 'api');
files.push(...getFiles(frontendApiDir, 'api'));
files.push({ file: 'vercel.json', data: readFileSync(join(process.cwd(), 'vercel.json')).toString('base64'), encoding: 'base64' });
files.push({ file: 'frontend/package.json', data: readFileSync(join(process.cwd(), 'frontend/package.json')).toString('base64'), encoding: 'base64' });
files.push({ file: 'frontend/package-lock.json', data: readFileSync(join(process.cwd(), 'frontend/package-lock.json')).toString('base64'), encoding: 'base64' });
const deployment = await api(`/v13/deployments?skipAutoDetectionConfirmation=1`, {
  method: 'POST',
  body: JSON.stringify({ name: PROJECT, target: 'production', files, projectSettings: { framework: null, buildCommand: 'true', outputDirectory: '.', installCommand: 'true', rootDirectory: null } }),
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
