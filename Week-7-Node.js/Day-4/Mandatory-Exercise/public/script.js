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

//----------------script.js----------------//
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  registerForm.addEventListener('submit', registerUser);
  loginForm.addEventListener('submit', loginUser);
});

async function registerUser(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // if (!firstName || !lastName || !email || !username || !password) {
  //   alert('Please fill in all fields.');
  //   return;
  // }

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, username, password })
  });

  const data = await response.json();
  if (response.ok) {
    document.getElementById('registerResult').innerText = `${data.message}`;
    setTimeout(() => {
      location.reload(); // Reload the page after a timeout
    }, 3000);
  } else {
    document.getElementById('registerResult').innerText = `${data.error}`;
  }
}


//------------LOGIN------------//
async function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById('logUsername').value;
  const password = document.getElementById('logPassword').value;

  // if (!username || !password) {
  //   alert('Please fill in all fields.');
  //   return;
  // }
  
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (response.ok) {
    document.getElementById('loginResult').innerText = `${data.message}`;
  } else {
    document.getElementById('loginResult').innerText = `${data.error}`;
  }
}
