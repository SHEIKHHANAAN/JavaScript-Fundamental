document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value.toLowerCase();
    var vowelCount = 0;
  
    for (var i = 0; i < name.length; i++) {
      var char = name.charAt(i);
      if (isVowel(char)) {
        vowelCount++;
      }
    }
  
    document.getElementById("result").textContent = "Number of vowels: " + vowelCount;
    nameInput.value = "";
  });
  
  function isVowel(char) {
    return /[aeiou]/.test(char);
  }
  