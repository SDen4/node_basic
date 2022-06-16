// file system
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// создание новой директории "test"
fs.mkdir(path.join(__dirname, 'test'), (error) => {
  if (error) throw error;

  console.log('Fold has been created');
});

// создание нового файла
const filePath = path.join(__dirname, 'test', 'test.txt');

fs.writeFile(filePath, 'Text to new file!!!', (err) => {
  if (err) throw err;

  console.log('File has been created');
});

// перезаписть существующего файла
fs.writeFile(filePath, 'Text to new file again!!!', (err) => {
  if (err) throw err;

  console.log('File has been re-created');
});

// добавление в существующий файл
fs.appendFile(filePath, '\nAddition text to new row.', (err) => {
  if (err) throw err;

  console.log('File has been changed');
});

// node demo/fs

// NOTES
// writeFile может перетирать существующие файлы
// appendFile добавляет контент в файл
// mkdir выпадет в ошибку, если такая папка уже существует
