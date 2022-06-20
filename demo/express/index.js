import express from 'express';

const PORT = 5000;

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('server is working!');
});

app.listen(PORT, () => {
  console.log(
    `express example start on port ${PORT}. Open http://localhost:5000/`,
  );
});

// npm start
