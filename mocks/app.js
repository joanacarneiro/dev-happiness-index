const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is mock data!' });
});

app.listen(port, () => {
  console.log(`Mock service running on port ${port}`);
});