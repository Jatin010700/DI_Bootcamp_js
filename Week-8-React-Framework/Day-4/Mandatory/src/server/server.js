const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const input = req.body.input;
  console.log(`Received POST request with input: ${input}`);
  res.send(`I received your POST request. This is what you sent me: ${input}`);
});

// Server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
