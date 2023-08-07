document.addEventListener("DOMContentLoaded", function() {
  var registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", registerUser);

  function registerUser() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;


      var passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\]^_`{|}~]).{8,}$/;
      if (!password.match(passwordCriteria)) {
          alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return;
      }

    
      alert("Registration successful!\nUsername: " + username + "\nEmail: " + email);
  }
});

