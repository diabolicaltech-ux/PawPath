#!/usr/bin/env node
// Deploy full source to Vercel so it can build properly
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const TOKEN = process.env.VERCEL_TOKEN;
const ROOT = join(process.cwd());

// Files/dirs to exclude from deployment
const EXCLUDE = new Set(['node_modules', '.git', 'dist', 'dist.tar.gz', '.github', 'android', 'deploy.mjs', 'package-lock.json']);

function getFiles(dir, base = '') {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDE.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results.push(...getFiles(fullPath, relPath));
    } else {
      const content = readFileSync(fullPath);
      results.push({
        file: relPath,
        data: content.toString('base64'),
        encoding: 'base64'
      });
    }
  }
  return results;
}

const files = getFiles(ROOT);
console.log(`Found ${files.length} files`);

async function deploy() {
  const body = {
    name: 'pawpath',
    target: 'production',
    files,
    alias: ['pawpath.quest', 'pawpath-diabolitech.vercel.app'],
    projectSettings: {
      framework: 'vite',
      buildCommand: 'npx vite build',
      outputDirectory: 'dist',
      installCommand: 'npm install'
    }
  };

  const res = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  if (res.ok) {
    console.log('✅ Deployed!');
    console.log('URL:', data.url);
    console.log('Alias:', data.alias?.[0] || 'N/A');
    console.log('ID:', data.id);
  } else {
    console.error('❌ Deployment failed:', data.error?.message || JSON.stringify(data));
    process.exit(1);
  }
}

deploy().catch(console.error);