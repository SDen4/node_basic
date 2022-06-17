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

// создание нескольких вложенных директорий
fs.mkdirSync(path.resolve(__dirname, 'in1', 'in2', 'in3'), { recursive: true });

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

// чтение из файла - v1
fs.readFile(filePath, (err, content) => {
  if (err) throw err;

  const textFromFile = Buffer.from(content).toString();
  console.log('text from file: ', textFromFile);
});

// чтение из файла - v2
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err;

  console.log('text from file: ', content);
});

// node demo/fs

// NOTES
// writeFile может перетирать существующие файлы
// appendFile добавляет контент в файл
// mkdir выпадет в ошибку, если такая папка уже существует
