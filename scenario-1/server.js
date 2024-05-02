const http = require('http');

const startServer = () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
