import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// path methods
console.log('Имя директории: ', path.dirname(__filename));
console.log('Имя файла: ', path.basename(__filename));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));

// path join additional examples
console.log(path.join(__filename, 'first', 'second', 'third'));
console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.join(__dirname, '..'));
console.log(path.join(__dirname, '..', '..'));

// path resolve - return absolute path
console.log('resolve example: ', path.resolve('fir', 'sec', 'thrd'));
console.log('resolve error example: ', path.resolve('fir', '/sec', 'thrd')); // using "/" returns error

// get name example
const name = path.parse(__filename).name;
console.log('Name: ', name);

// url
const someUrl = 'https://localhost:8000/users?id=4334';
const url = new URL(someUrl);
console.log('url: ', url);

// node demo/path
