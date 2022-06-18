/** Stream types:
 * 1. Readable - чтение
 * 2. Writable - запись
 * 3. Duplex - чтение и запись
 * 4. Transform - такой же, как и Duplex, но может изменять данные по мере чтения
 *
 * Notes:
 * 1 chank = 64kB
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// example of reading file all at once without using streams
fs.readFile(path.resolve(__dirname, 'mock', 'stream.txt'), (err, data) => {
  if (err) throw err;

  console.log(data);
});

// 1. Readable
// reading file using streams
const stream = fs.createReadStream(
  path.resolve(__dirname, 'mock', 'stream.txt'),
  'utf-8',
);

stream.on('data', (chunk) => console.log(chunk));

// the order doesnt matter
stream.on('end', () => console.log('end of reading'));
stream.on('open', () => console.log('start of reading'));
stream.on('error', (error) => console.log(error)); // !!!

// node demo/streams
