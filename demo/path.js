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

// get name example
const name = path.parse(__filename).name;
console.log('Name: ', name);

// node demo/path
