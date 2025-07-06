require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// In-memory storage for URLs (in production, use a database)
const urlDatabase = {};
let urlCounter = 1;

// Helper function to validate URL
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

// API endpoint to create short URL
app.post('/api/shorturl', function(req, res) {
  const { url } = req.body;
  
  // Validate URL format
  if (!isValidUrl(url)) {
    return res.json({ error: 'invalid url' });
  }
  
  // Check if URL already exists
  const existingId = Object.keys(urlDatabase).find(id => urlDatabase[id] === url);
  if (existingId) {
    return res.json({ 
      original_url: url, 
      short_url: parseInt(existingId) 
    });
  }
  
  // Store new URL
  const shortUrl = urlCounter++;
  urlDatabase[shortUrl] = url;
  
  res.json({ 
    original_url: url, 
    short_url: shortUrl 
  });
});

// API endpoint to redirect to original URL
app.get('/api/shorturl/:id', function(req, res) {
  const { id } = req.params;
  const originalUrl = urlDatabase[id];
  
  if (!originalUrl) {
    return res.json({ error: 'No short URL found for the given input' });
  }
  
  res.redirect(originalUrl);
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
