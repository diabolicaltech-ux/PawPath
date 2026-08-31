#!/usr/bin/env node
// Large-asset deployment helper. The canonical deploy.mjs inlines every file as
// base64 in one JSON body, which Vercel caps at ~10 MB — the Week-1 social
// images pushed the dist past that. This script instead uploads files via the
// per-file digest flow (POST /v2/files), then creates the deployment referencing
// SHA1 digests, so there is no single oversized request body.
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import crypto from 'crypto';

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
    return { file: rel, data: readFileSync(full) };
  });
}

async function api(path, options = {}) {
  const response = await fetch(`https://api.vercel.com${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${TOKEN}`, ...(options.headers || {}) },
  });
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!response.ok) {
    const err = new Error(data?.error?.message || text);
    err.status = response.status;
    err.data = data;
    throw err;
  }
  return data;
}

// Gather the same upload set as deploy.mjs: dist at root, api/ handlers,
// and the runtime manifest + minimal vercel.json at the root.
const files = [];
files.push(...getFiles(DIST));
const apiDir = join(FRONTEND, 'api');
if (existsSync(apiDir)) files.push(...getFiles(apiDir, 'api'));
const repoVercel = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8'));
const rewrites = Array.isArray(repoVercel.rewrites) ? repoVercel.rewrites : [];
files.push({ file: 'vercel.json', data: Buffer.from(JSON.stringify({ framework: null, buildCommand: 'true', outputDirectory: '.', installCommand: 'npm ci --ignore-scripts', rewrites })) });
files.push({ file: 'package.json', data: readFileSync(join(FRONTEND, 'package.json')) });
files.push({ file: 'package-lock.json', data: readFileSync(join(FRONTEND, 'package-lock.json')) });

const manifest = files.map((f) => ({
  file: f.file,
  sha: crypto.createHash('sha1').update(f.data).digest('hex'),
  size: f.data.length,
  data: f.data,
}));

const deploymentBody = () => ({
  name: PROJECT,
  target: 'production',
  files: manifest.map(({ file, sha, size }) => ({ file, sha, size })),
  projectSettings: { framework: null, buildCommand: 'true', outputDirectory: '.', installCommand: 'npm ci --ignore-scripts', rootDirectory: null },
});

const bySha = new Map(manifest.map((m) => [m.sha, m]));

let deployment;
try {
  deployment = await api(`/v13/deployments?teamId=${TEAM_ID}&skipAutoDetectionConfirmation=1`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(deploymentBody()),
  });
} catch (err) {
  if (err?.data?.error?.code !== 'missing_files') throw err;
  const missingShas = new Set((err.data.error.missing || []).map(String));
  // Upload every file referenced by a missing digest (plus anything not yet
  // present). Idempotent by digest.
  const toUpload = manifest.filter((m) => missingShas.size === 0 || missingShas.has(m.sha));
  console.log(`Uploading ${toUpload.length} files via /v2/files…`);
  for (const m of toUpload) {
    const r = await fetch('https://api.vercel.com/v2/files', {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'x-now-digest': m.sha, 'x-now-size': String(m.size), 'Content-Type': 'application/octet-stream' },
      body: m.data,
    });
    if (!r.ok) throw new Error(`upload failed ${m.file}: ${await r.text()}`);
  }
  deployment = await api(`/v13/deployments?teamId=${TEAM_ID}&skipAutoDetectionConfirmation=1`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(deploymentBody()),
  });
}

console.log(`Deployment: ${deployment.id} ${deployment.url}`);
await api(`/v9/projects/${PROJECT}?teamId=${TEAM_ID}`, { method: 'PATCH', body: JSON.stringify({ ssoProtection: null }) });
console.log('SSO protection disabled');
for (let i = 0; i < 60; i++) {
  const d = await api(`/v13/deployments/${deployment.id}?teamId=${TEAM_ID}`);
  if (d.readyState === 'READY') break;
  if (d.readyState === 'ERROR' || d.readyState === 'CANCELED') throw new Error(`Deployment failed: ${d.readyState} ${d.error?.message || ''}`);
  await new Promise((r) => setTimeout(r, 3000));
}
const alias = await api(`/v13/deployments/${deployment.id}/aliases?teamId=${TEAM_ID}`, { method: 'POST', body: JSON.stringify({ alias: 'pawpath.quest' }) });
console.log(`Alias: ${alias.alias} (old deployment: ${alias.oldDeploymentId || 'none'})`);
