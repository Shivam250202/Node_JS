// Import the built-in 'http' module
const http = require('http');

// Create a server that responds to every request
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set response header
  res.end('Hello, World!'); // Send response
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});