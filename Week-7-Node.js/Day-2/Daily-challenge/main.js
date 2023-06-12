function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (fullName === '') {
    alert('Please enter your name');
    return false
  }
  
  if (email === '') {
    alert('Please enter your email');
    return false;
  }

  if (message === '') {
    alert('Please enter your message');
    return false;
  }

  return true;
}