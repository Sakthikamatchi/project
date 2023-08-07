document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please fill in all the fields.");
    } 
    else if (password.length < 9) {
      alert("Password must be at least 9 characters long");
      return false;
  }
    else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    }
    else {
      alert("Registration successful!");
    }
  });


    