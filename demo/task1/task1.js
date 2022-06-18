/** TASK 1
 * 1. Create env var of string type
 * 2. Take the content, count symbols
 * 3. Delete the first file
 * 4. Write result to a new file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let text = '';
let result = null;

new Promise((res, rej) => {
  fs.readFile(path.join(__dirname, '1.js'), 'utf-8', (err, data) => {
    if (err) return rej(err.message);

    text = data;
    res();
  });
})
  .then(() => {
    text
      .trim()
      .split('')
      .filter((el) => el !== ' ' && el !== "'" && el !== '=' && el !== ';');

    result = text
      .trim()
      .split('')
      .filter(
        (el) => el !== ' ' && el !== "'" && el !== '=' && el !== ';',
      ).length;
  })
  .then(() => {
    fs.writeFile(
      path.join(__dirname, 'result.js'),
      `"The symbol's length is ${result}."`,
      (err) => {
        if (err) throw err;
      },
    );
  })
  .then(() => {
    fs.rm(path.join(__dirname, '1.js'), (err) => {
      if (err) throw err;
    });
  });

// node demo/task1/task1
