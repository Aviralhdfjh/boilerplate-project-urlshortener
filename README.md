# URL Shortener Microservice

A full-stack JavaScript URL shortener application built with Node.js, Express, and vanilla JavaScript. This project creates short URLs that redirect to original URLs, similar to services like bit.ly or tinyurl.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **URL Validation**: Ensures only valid HTTP/HTTPS URLs are accepted
- **Redirect Service**: Short URLs automatically redirect to original URLs
- **Modern UI**: Clean, responsive design with real-time feedback
- **Error Handling**: Comprehensive error messages for invalid inputs
- **Duplicate Prevention**: Reuses existing short URLs for the same original URL

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern CSS with gradients and animations
- **Storage**: In-memory storage (easily upgradeable to database)

## 📋 API Endpoints

### POST `/api/shorturl`
Creates a short URL from a long URL.

**Request Body:**
```json
{
  "url": "https://www.example.com"
}
```

**Response:**
```json
{
  "original_url": "https://www.example.com",
  "short_url": 1
}
```

**Error Response:**
```json
{
  "error": "invalid url"
}
```

### GET `/api/shorturl/:id`
Redirects to the original URL associated with the short URL ID.

**Example:**
- `GET /api/shorturl/1` → Redirects to `https://www.example.com`

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v12 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd boilerplate-project-urlshortener
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp sample.env .env
```

4. Start the server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 🎯 Usage

### Web Interface
1. Open `http://localhost:3000` in your browser
2. Enter a valid URL (must start with http:// or https://)
3. Click "POST URL" to generate a short URL
4. Use the generated short URL to redirect to the original site

### API Usage
```bash
# Create a short URL
curl -X POST http://localhost:3000/api/shorturl \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.freecodecamp.org"}'

# Use the short URL (will redirect)
curl -L http://localhost:3000/api/shorturl/1
```

## 🔧 Configuration

Environment variables can be set in the `.env` file:

```
PORT=3000
```

## 📝 Project Structure

```
boilerplate-project-urlshortener/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore file
├── README.md            # Project documentation
├── views/
│   └── index.html       # Frontend HTML
└── public/
    └── style.css        # Styling
```

## 🌟 Features Explained

### URL Validation
- Uses Node.js `URL` constructor for robust validation
- Only accepts HTTP and HTTPS protocols
- Prevents malicious or invalid URLs

### Duplicate Prevention
- Checks existing URLs before creating new short URLs
- Returns existing short URL if the original URL already exists
- Prevents database bloat

### Error Handling
- Validates URL format before processing
- Returns appropriate error messages
- Handles edge cases gracefully

### Modern UI
- Responsive design that works on all devices
- Real-time form submission with AJAX
- Beautiful gradient backgrounds and animations
- Professional styling with hover effects

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
For production deployment, consider:
- Using a proper database (MongoDB, PostgreSQL, etc.)
- Adding rate limiting
- Implementing authentication
- Adding analytics tracking
- Using environment-specific configurations

## 🔄 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and personal URL management
- [ ] Custom short URL aliases
- [ ] Click analytics and statistics
- [ ] Rate limiting and spam protection
- [ ] QR code generation for short URLs
- [ ] Bulk URL shortening
- [ ] API key authentication
- [ ] URL expiration dates

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with this project, please open an issue on GitHub.

---

**Built with ❤️ for the FreeCodeCamp community**
