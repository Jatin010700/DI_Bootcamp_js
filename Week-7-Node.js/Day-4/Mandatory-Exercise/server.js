// server.js
const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

// Initialize Knex with PostgreSQL database configuration
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '07012000',
    database: 'LOGIN/REGISTER'
  }
});

// Middleware to parse JSON body
app.use(express.json());
app.use(express.static('public'));

// Register route
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const registeredUser = await db('register').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password: hashedPassword,
      created_date: new Date().toISOString(),
      last_login: null
    });

    res.json({ message: 'Registration successful.' });
  } catch (error) {
    if (error.code === '23505') {
      res.status(400).json({ error: 'Email already exists.' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during registration.' });
    }
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db('register').where({ username }).first();

    if (!user) {
      res.status(401).json({ error: 'User not found.' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Incorrect password.' });
      return;
    }

    await db('login').insert({
      username,
      password: user.password
    });

    res.json({ message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
