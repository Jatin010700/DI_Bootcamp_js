document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('#register-form');
  const loginForm = document.querySelector('#login-form');
  const loginResult = document.querySelector('#loginResult');
  const registerResult = document.querySelector('#registerResult');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.querySelector('#name').value;
      const lastName = document.querySelector('#last-name').value;
      const email = document.querySelector('#email').value;
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;

      if (!name || !lastName || !email || !username || !password) {
        alert('Please fill in all the fields.');
        return;
      }

      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, lastName, email, username, password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'register') {
            registerResult.textContent = 'Hello Your account is now created!';
            registerForm.reset();
          } else if (data.message === 'error1') {
            registerResult.textContent = 'Username already exists.';
          }
        })
        .catch(error => console.log(error));
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;

      if (!username || !password) {
        alert('Please fill in all the fields.');
        return;
      }

      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'login') {
            loginResult.textContent = `Hi ${username} Welcome back`;
            loginForm.reset();
          } else if (data.message === 'error2') {
            loginResult.textContent = 'Invalid username or password.';
          }
        })
        .catch(error => console.log(error));
    });
  }
});
