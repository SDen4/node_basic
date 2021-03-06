import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.rvkbuaq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(fileUpload({}));
app.use(express.json());
app.use(express.static('./demo/express/static')); // http://localhost:5000/48237793308294674.jpg
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(
        `express example start on port ${PORT}. Open http://localhost:5000/`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();

// npm start
