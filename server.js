const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.all('*', (req, res) => {
  console.log('Headers received:', req.headers);
  res.json({ message: 'Headers logged' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
