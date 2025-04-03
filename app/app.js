const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Geek Girls!');
});

app.post('/data', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  res.json({ message: `Received data for ${name}, age ${age}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
