const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/register.html', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  // Check if the username or password already exists
  if (checkIfUserExists(username, password)) {
    return res.json({ message: 'error1' });
  }

  const userData = {
    name,
    lastName,
    email,
    username,
    password
  };

  // Write user data to JSON file
  saveUserData(userData);

  res.json({ message: 'register' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user is registered
  if (!checkIfUserExists(username, password)) {
    return res.json({ message: 'error2' });
  }

  res.json({ message: 'login' });
});

function checkIfUserExists(username, password) {
  // Read existing user data from JSON file
  const usersData = JSON.parse(fs.readFileSync('users.json'));

  // Check if the username and password combination exists in the user data
  return usersData.some(user => user.username === username && user.password === password);
}

function saveUserData(userData) {
  // Read existing user data from JSON file
  const usersData = JSON.parse(fs.readFileSync('users.json'));

  // Check if the username or password already exists
  if (checkIfUserExists(userData.username, userData.password)) {
    return;
  }

  // Add the new user data to the existing data
  usersData.push(userData);

  // Write the updated user data to JSON file
  fs.writeFileSync('users.json', JSON.stringify(usersData));
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
