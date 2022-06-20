import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.rvkbuaq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('server is working!');
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
