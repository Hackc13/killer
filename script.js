const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get email and password values
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Check if email and password are valid
  if (email === 'example@example.com' && password === 'password') {
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    // Show error message
    alert('Invalid email or password');
  }
});
