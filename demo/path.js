import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// path methods
console.log('Имя директории: ', path.dirname(__filename));
console.log('Имя файла: ', path.basename(__filename));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));

// get name example
const name = path.parse(__filename).name;
console.log('Name: ', name);

// node demo/path
