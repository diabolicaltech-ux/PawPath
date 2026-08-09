import express from 'express';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'pawpath-dev-secret-key-change-in-production';
const SALT_ROUNDS = 10;

// Middleware
app.use(cors());
app.use(express.json());

// Init SQLite DB
const dbPath = path.join(__dirname, 'pawpath.db');
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS pets (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

// Auth middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// === AUTH ROUTES ===

// POST /api/auth/register
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }
  try {
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    const hash = bcrypt.hashSync(password, SALT_ROUNDS);
    const result = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run(email, hash);
    const token = jwt.sign({ id: result.lastInsertRowid, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: result.lastInsertRowid, email } });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch {
    res.status(500).json({ error: 'Login failed' });
  }
});

// GET /api/auth/me
app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ user: { id: req.user.id, email: req.user.email } });
});

// === PET ROUTES ===

// GET /api/pets
app.get('/api/pets', authMiddleware, (req, res) => {
  const pets = db.prepare('SELECT * FROM pets WHERE user_id = ? ORDER BY created_at').all(req.user.id);
  const parsed = pets.map(p => ({ ...JSON.parse(p.data), id: p.id }));
  res.json({ pets: parsed });
});

// POST /api/pets
app.post('/api/pets', authMiddleware, (req, res) => {
  const petData = req.body;
  if (!petData || !petData.name) {
    return res.status(400).json({ error: 'Pet data with name required' });
  }
  const petId = petData.id || crypto.randomUUID();
  const data = { ...petData, id: petId };
  db.prepare('INSERT INTO pets (id, user_id, data) VALUES (?, ?, ?)').run(petId, req.user.id, JSON.stringify(data));
  res.json({ pet: data });
});

// PUT /api/pets/:id
app.put('/api/pets/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const existing = db.prepare('SELECT * FROM pets WHERE id = ? AND user_id = ?').get(id, req.user.id);
  if (!existing) {
    return res.status(404).json({ error: 'Pet not found' });
  }
  const data = { ...req.body, id };
  db.prepare('UPDATE pets SET data = ?, updated_at = datetime(\'now\') WHERE id = ? AND user_id = ?').run(JSON.stringify(data), id, req.user.id);
  res.json({ pet: data });
});

// DELETE /api/pets/:id
app.delete('/api/pets/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const result = db.prepare('DELETE FROM pets WHERE id = ? AND user_id = ?').run(id, req.user.id);
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Pet not found' });
  }
  res.json({ success: true });
});

// === STATIC FILE SERVING ===
const staticDir = path.join(__dirname, '..', 'site');
app.use(express.static(staticDir));

// SPA fallback — serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`PawPath server running on http://0.0.0.0:${PORT}`);
});