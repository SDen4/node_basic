import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {
      if (err) throw err;

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      // завершить ответ сервера
      res.end(data);
    });
  } else if (req.url === '/contacts') {
    fs.readFile(
      path.join(__dirname, 'public', 'contacts.html'),
      (err, data) => {
        if (err) throw err;

        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        // завершить ответ сервера
        res.end(data);
      },
    );
  } else {
    res.end('<h1>The page not found...</h1>');
  }

  // res.writeHead(200, {
  //   'Content-Type': 'text/html',
  // });
  // // завершить ответ сервера
  // res.end('<h1>Response server!</h1>');
});

server.listen(3003, () => {
  console.log('server has been started...');
});

// npm run dev
