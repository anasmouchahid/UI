document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password === confirmPassword) {
      alert('Password successfully reset!');
    } else {
      alert('Passwords do not match. Please try again.');
    }
  });
  