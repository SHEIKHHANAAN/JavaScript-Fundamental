document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var modifiedName = name.charAt(0).toUpperCase() + name.slice(1);
  
    document.getElementById("result").textContent = "Capitalized Name: " + modifiedName;
    nameInput.value = "";
  });
  