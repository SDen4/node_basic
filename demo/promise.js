import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const writeFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) return reject(err.message);

      resolve();
    });
  });
};

const appendFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) return reject(err.message);

      resolve();
    });
  });
};

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'count: ')
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n1'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n2'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n3'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n4'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n5'));

// node demo/promise
