const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Determine environment
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';
// Port priority: PORT env var > 3000 default
const port = parseInt(process.env.PORT || '3000', 10);

console.log('🚀 Starting Focus English server...');
console.log('Environment:', dev ? 'development' : 'production');
console.log('Hostname:', hostname);
console.log('Port:', port);

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse URL
      const parsedUrl = parse(req.url, true);
      
      // Handle the request
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error('❌ Server error:', err);
      process.exit(1);
    })
    .listen(port, hostname, () => {
      console.log(`✅ Server ready on http://${hostname}:${port}`);
      console.log(`📱 Local:            http://localhost:${port}`);
      console.log(`🌍 Network:         http://${hostname}:${port}`);
    });
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('⚠️  SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('⚠️  SIGINT signal received: closing HTTP server');
  process.exit(0);
});
