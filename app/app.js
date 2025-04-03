const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Geek Girls!');
});

//TODO: fix method to post
app.put('/data', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    //TODO: add expected return payload  
    return res.status(400).json();
  }

  //TODO: add expected return payload
  res.json();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
