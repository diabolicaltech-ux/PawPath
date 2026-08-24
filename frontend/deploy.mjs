#!/usr/bin/env node
// Deterministic static deployment helper. Build locally first, then upload the
// generated dist files to the existing PawPath project and explicitly promote
// the public custom-domain alias.
import { createHash } from 'crypto';
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
// Vercel caps a deployment request body at ~10MB. The inline path below sends
// every file base64-encoded in one JSON body, and base64 adds ~33% on top of
// raw bytes (plus a small per-file envelope). Above an ~8MB base64 payload we
// switch to Vercel's standard per-file upload: POST each file to /v2/files keyed
// by its SHA1 digest, then create the deployment referencing those digests. This
// keeps large static assets (e.g. the Week-1 social PNGs) from tripping the
// limit while leaving small deploys on the original single-request path.
const INLINE_BODY_BUDGET = 8_000_000;
const projectSettings = { framework: null, buildCommand: 'true', outputDirectory: '.', installCommand: 'npm ci --ignore-scripts', rootDirectory: null };

function sha1(buf) {
  return createHash('sha1').update(buf).digest('hex');
}

// Like api(), but returns { status, data } instead of throwing on non-2xx,
// so the per-file flow can read a `missing_files` response without bailing.
async function apiResponse(path, options = {}) {
  const response = await fetch(`https://api.vercel.com${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  const data = await response.json().catch(() => ({}));
  return { status: response.status, data };
}

async function createDeployment(fileList) {
  const body = JSON.stringify({ name: PROJECT, target: 'production', files: fileList, projectSettings });
  const r = await apiResponse(`/v13/deployments?skipAutoDetectionConfirmation=1`, { method: 'POST', body });
  if (r.status === 200) return { deployment: r.data, missing: [] };
  const missing = Array.isArray(r.data?.missing) ? r.data.missing : [];
  if (r.status === 400 && missing.length) return { deployment: null, missing };
  throw new Error(`Deployment request failed (${r.status}): ${JSON.stringify(r.data).slice(0, 500)}`);
}

const bodyEstimate = files.reduce((acc, f) => acc + f.data.length + 64, 0);
const usePerFile = bodyEstimate > INLINE_BODY_BUDGET;

let deployment;
if (usePerFile) {
  console.log(`Payload ~${(bodyEstimate / 1e6).toFixed(1)}MB exceeds inline budget; using per-file upload`);
  const shaFiles = files.map(({ file, data }) => ({ file, sha: sha1(Buffer.from(data, 'base64')) }));
  const first = await createDeployment(shaFiles);
  if (first.deployment) {
    deployment = first.deployment;
  } else {
    const missing = first.missing;
    console.log(`${missing.length} files need upload`);
    for (const file of files) {
      const sha = sha1(Buffer.from(file.data, 'base64'));
      if (!missing.includes(sha)) continue;
      const buf = Buffer.from(file.data, 'base64');
      const up = await fetch(`https://api.vercel.com/v2/files?teamId=${TEAM_ID}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/octet-stream',
          'Content-Length': String(buf.length),
          'x-now-digest': sha,
          'x-now-size': String(buf.length),
        },
        body: buf,
      });
      if (!up.ok) {
        const t = await up.text().catch(() => '');
        throw new Error(`File upload failed for ${file.file} (${up.status}): ${t.slice(0, 200)}`);
      }
    }
    console.log('Files uploaded; creating deployment');
    const second = await createDeployment(shaFiles);
    if (!second.deployment) throw new Error('Deployment still failed after uploads: ' + JSON.stringify(second.data));
    deployment = second.deployment;
  }
} else {
  deployment = await api(`/v13/deployments?skipAutoDetectionConfirmation=1`, {
    method: 'POST',
    body: JSON.stringify({ name: PROJECT, target: 'production', files, projectSettings }),
  });
}
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
