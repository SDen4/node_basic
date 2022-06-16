import chalk from 'chalk';

import path from 'path';
import { fileURLToPath } from 'url';

import text from './data.js';

console.log(chalk.blue('hello nodejs'));
console.log(chalk.red(text));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);
