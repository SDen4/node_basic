import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileService {
  saveFile(file) {
    try {
      const fileName = `${String(Math.random()).slice(2)}.jpg`;
      const filePath = path.resolve(__dirname, 'static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
