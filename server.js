const express = require('express');
const app = express();

const test = async () => {
  const response = await fetch('http://localhost:3069', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-agent': 'Node.js/18.0.0',
      locale: 'en-US',
    },
    body: JSON.stringify({ query: 'test' }),
  });

  const data = await response.json();
  console.log('Response:', data);
};

app.use(express.json());

app.all('*', (req, res) => {
  console.log('Headers received:', req.headers);
  res.json({ message: 'Headers logged' });
});

app.listen(3069, () => {
  console.log('Listening on port 3069');

  // Now the server is ready, make the request
  test();
});
