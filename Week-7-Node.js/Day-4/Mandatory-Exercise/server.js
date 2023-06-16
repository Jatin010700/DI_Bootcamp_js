const exp = require('express');
const knex = require('knex')({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '07012000',
    database: 'LOGIN/REGISTER'
  }
});
const app = exp()
// Middleware to parse incoming request bodies
app.use(exp.urlencoded({ extended: true }));

app.use(exp.static('public'));

// Serve the HTML page with the forms
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

// Register route
app.post('/register', (req, res) => {
  // Retrieve form data from the request body
  const { firstName, lastName, email, username, password } = req.body;

  // Check if the email already exists in the database
  knex('register')
    .select('email')
    .where('email', email)
    .then(rows => {
      if (rows.length > 0) {
        const response = {
          success: false,
          message: 'Email already exists'
        };
        res.json(response);
      } else {
        // Encrypt the password (using bcrypt or other suitable method)
        const encryptedPassword = encryptPassword(password);

        // Insert the registration data into the database
        knex('register')
          .insert({
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: encryptedPassword,
            created_date: new Date(),
            last_login: null
          })
          .then(() => {
            const response = {
              success: true
            };
            res.json(response);
          })
          .catch(error => {
            console.error('Registration error:', error);
            const response = {
              success: false,
              message: 'Registration failed'
            };
            res.json(response);
          });
      }
    })
    .catch(error => {
      console.error('Database error:', error);
      const response = {
        success: false,
        message: 'An error occurred during registration'
      };
      res.json(response);
    });
});

// Login route
app.post('/login', (req, res) => {
  // Retrieve form data from the request body
  const { logUsername, logPassword } = req.body;

  // Retrieve the user data from the database
  knex('register')
    .select('password')
    .where('username', logUsername)
    .then(rows => {
      if (rows.length > 0) {
        const storedPassword = rows[0].password;
        // Compare the stored password with the login password (using bcrypt or other suitable method)
        if (comparePasswords(logPassword, storedPassword)) {
          // Update the last login date in the database
          knex('register')
            .where('username', logUsername)
            .update('last_login', new Date())
            .then(() => {
              const response = {
                success: true
              };
              res.json(response);
            })
            .catch(error => {
              console.error('Update error:', error);
              const response = {
                success: false,
                message: 'Login failed'
              };
              res.json(response);
            });
        } else {
          const response = {
            success: false,
            message: 'Invalid username or password'
          };
          res.json(response);
        }
      } else {
        const response = {
          success: false,
          message: 'Invalid username or password'
        };
        res.json(response);
      }
    })
    .catch(error => {
      console.error('Database error:', error);
      const response = {
        success: false,
        message: 'An error occurred during login'
      };
      res.json(response);
    });
});

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Helper functions for password encryption and comparison (use bcrypt or suitable method)
function encryptPassword(password) {
  // Implement your encryption logic here
  return password;
}

function comparePasswords(password1, password2) {
  // Implement your comparison logic here
  return password1 === password2;
}



// app.use(bp.urlencoded({ extended: false }));
// app.use(bp.json());

// app.use('/',exp.static(__dirname+'/public'));

// app.get('/index.html', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/register', (req, res) => {
//   const { firstName, lastName, email, username, password } = req.body;

//   if (!firstName || !lastName || !email || !username || !password) {
//     return res.status(400).json({ error: 'Please fill in all fields.' });
//   }

//   // Store the user data in the database using Knex
//   knex('register')
//     .insert({ firstName, lastName, email, username, password })
//     .then(() => {
//       res.status(200).json({ message: 'Registration successful.' });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'An error occurred during registration.' });
//     });
// });

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: 'Please enter your username and password.' });
//   }

//   // Check if the provided username and password match a user in the database
//   knex('register')
//     .where({ username, password })
//     .then((users) => {
//       if (users.length === 0) {
//         return res.status(401).json({ error: 'Invalid username or password.' });
//       }

//       res.status(200).json({ message: 'Login successful.' });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'An error occurred during login.' });
//     });
// });

// const port = 3000;
// app.listen(3000, () => {
//   console.log(`Server running on ${port}!!!`)
// })