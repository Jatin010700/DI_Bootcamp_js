function validateForm() {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

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