function one() {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 100) + 1;
    };
  
    document.getElementById("generateButton").addEventListener("click", function() {
      const randomNumber = generateRandomNumber();
      document.getElementById("result").textContent = "Random Number: " + randomNumber;
    });
  }
 one();
  