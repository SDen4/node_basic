import express from 'express';
import mongoose from 'mongoose';

import Post from './Post.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.rvkbuaq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(err);
  }
});

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
