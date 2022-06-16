import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'home.html' : `${req.url}.html`,
  );

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        // if (err) res.end('<h1>Server error</h1>');

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server's been started on the ${PORT} port.`);
});

// npm run dev
