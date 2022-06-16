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

// node demo/fs
