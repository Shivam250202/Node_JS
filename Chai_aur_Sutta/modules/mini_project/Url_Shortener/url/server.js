import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;
const DATA_FILE = './urls.json';

// Serve static files (HTML, CSS, JS) from current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Helper to read URLs from file
function readUrls() {
  if (!fs.existsSync(DATA_FILE)) return {};
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data || '{}');
}

// Helper to write URLs to file
function writeUrls(urls) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(urls, null, 2));
}

// Endpoint to shorten URL
app.post('/api/shorten', (req, res) => {
  const { url, shortCode } = req.body;
  if (!url || !shortCode) {
    return res.status(400).json({ error: 'URL and short code are required.' });
  }
  const urls = readUrls();
  urls[shortCode] = url;
  writeUrls(urls);
  res.json({ shortCode, url });
});

// Redirect endpoint
app.get('/:shortCode', (req, res) => {
  const urls = readUrls();
  const url = urls[req.params.shortCode];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).send('Short URL not found');
  }
});

// Get all shortened URLs
app.get('/api/urls', (req, res) => {
  const urls = readUrls();
  res.json(urls);
});

// Optional: Root route for welcome message
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});