const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Serve static files from the 'public' directory
app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended:true }))
// Route for /aboutMe/:hobby
app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;

  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid hobby');
  } else {
    res.send(`My hobby is ${hobby}`);
  }
});

// Route for /pic
app.get('/pic', (req, res) => {
  res.send('public', 'pic.html');
});

// Route for /form
app.get('/index', (req, res) => {
  res.send('public', 'index.html');
});

// Route for form submission
app.post('/formData', (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${fullName} sent you a message: "${message}". Sent reply on ( ${email} ) `);
});

// Start the server
app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
