// const ids = [
//   "logUsername",
//   "logPassword",
      
//   "firstName",
//   "lastName",
//   "username",
//   "email",
//   "password"
// ]
//   const divs = ids.map((id) => document.getElementById(id))//------getting all id------//
//   divs.forEach((div) => div?.addEventListener("input", handleChange))
//   const submitButton = document.getElementById("submitBTN");

//   function handleChange(e) {
//     submitButton.disabled = inputEmpty()
//   }
//   function inputEmpty() {
//     return divs.some((div) => div.value === "")
// }


//------------DISABLED BTN--------------//
const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('registerBTN');

registerForm.addEventListener('input', function () {
  const inputs = registerForm.querySelectorAll('input[required]');
  let isFormValid = true;
  
  inputs.forEach(function (input) {
    if (!input.value) {
      isFormValid = false;
    }
  });
  
  registerBtn.disabled = !isFormValid;
});

// Login form
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('loginBTN');

loginForm.addEventListener('input', function () {
  const inputs = loginForm.querySelectorAll('input[required]');
  let isFormValid = true;
  
  inputs.forEach(function (input) {
    if (!input.value) {
      isFormValid = false;
    }
  });
  
  loginBtn.disabled = !isFormValid;
});

//-----------------------------------------------------//

document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('register-form');
  const registerSubmit = document.getElementById('register-submit');
  const loginForm = document.getElementById('login-form');
  const loginSubmit = document.getElementById('login-submit');

  // Add event listeners for form submissions (handle fetch to server)
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Retrieve form data and send it to the server
    const formData = new FormData(registerForm);
    fetch('/register', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful!');
        // Clear the form
        registerForm.reset();
      } else {
        alert('Registration failed: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    });
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Retrieve form data and send it to the server
    const formData = new FormData(loginForm);
    fetch('/login', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful!');
        // Clear the form
        loginForm.reset();
      } else {
        alert('Login failed: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    });
  });
});
