import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  // завершить ответ сервера
  response.end('<h1>Response server!</h1>');
});

server.listen(3003, () => {
  console.log('server has been started...');
});

// npm run dev
