document.getElementById("numbersForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var numbersInput = document.getElementById("numbersInput");
    var numbersString = numbersInput.value;
    var numbers = numbersString.split(",").map(function(num) {
      return parseInt(num.trim());
    });
  
    var divisibleNumbers = [];
  
    for (var i = 0; i < numbers.length; i++) {
      var currentNumber = numbers[i];
  
      if (currentNumber % 3 === 0 && currentNumber % 2 !== 0) {
        divisibleNumbers.push(currentNumber);
      }
    }
  
    document.getElementById("result").textContent = "Divisible numbers: " + divisibleNumbers.join(", ");
    numbersInput.value = ""; 
  });
  