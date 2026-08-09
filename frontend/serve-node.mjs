import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 3000;
const HOST = '0.0.0.0';
const DIST_DIR = path.resolve(import.meta.dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.map': 'application/json',
};

// Keep the server alive even if a single request throws — never let one bad
// request take the whole site down.
process.on('uncaughtException', (err) => {
  console.error('[serve-node] uncaughtException:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('[serve-node] unhandledRejection:', err);
});

/**
 * Resolve a request path safely under DIST_DIR.
 * Returns the absolute file path if it stays inside DIST_DIR, or null otherwise
 * (path-traversal / absolute-escape attempts).
 */
function safeResolve(reqPath) {
  // Strip leading slashes so path.join treats it as relative to DIST_DIR.
  const clean = reqPath.replace(/^\/+/, '');
  const resolved = path.resolve(DIST_DIR, clean);
  const rel = path.relative(DIST_DIR, resolved);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    return null; // escapes DIST_DIR
  }
  return resolved;
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${HOST}:${PORT}`);
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      // Malformed percent-encoding — fall through to SPA fallback.
      pathname = '/';
    }

    const filePath = safeResolve(pathname);

    // Serve a real file if it exists (and is not a directory).
    if (filePath && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': 'public, max-age=300',
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // SPA fallback — serve index.html for all unknown routes.
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      });
      fs.createReadStream(indexPath).pipe(res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  } catch (err) {
    console.error('[serve-node] request error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal server error');
    }
  }
});

server.on('error', (err) => {
  console.error('[serve-node] server error:', err);
});

server.listen(PORT, HOST, () => {
  console.log(`PawPath serving on http://${HOST}:${PORT} (dist: ${DIST_DIR})`);
});
