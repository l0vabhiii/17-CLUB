// login logic
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const user = JSON.parse(localStorage.getItem(phone));
  if (user && user.password === password) {
    alert('Login successful!');
    window.location.href = 'games.html';
  } else {
    alert('Invalid credentials!');
  }
});

// register logic
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const phone = document.getElementById('regPhone').value;
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirmPassword').value;
  if (password !== confirm) {
    alert('Passwords do not match!');
    return;
  }
  if (localStorage.getItem(phone)) {
    alert('User already exists!');
    return;
  }
  localStorage.setItem(phone, JSON.stringify({ password }));
  alert('Registered successfully!');
  window.location.href = 'login.html';
});
