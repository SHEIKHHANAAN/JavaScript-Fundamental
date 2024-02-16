document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const validationMessage = document.getElementById("validationMessage");
    const email = emailInput.value;
    const password = passwordInput.value;
  
    if (email.includes("@") && password.length >= 8) {
      validationMessage.textContent = "Valid email and password!";
      validationMessage.classList.add("validation-success");
      validationMessage.classList.remove("validation-error");
    } else {
      validationMessage.textContent = "Invalid email or password!";
      validationMessage.classList.add("validation-error");
      validationMessage.classList.remove("validation-success");
    }
  });
  