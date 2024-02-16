document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var daysInput = document.getElementById("daysInput");
    var daysRented = parseInt(daysInput.value);
  
    var carTypeSelect = document.getElementById("carTypeSelect");
    var carType = carTypeSelect.value;
  
    var rentalCost;
  
    switch (carType) {
      case "economy":
        rentalCost = 4000;
        break;
      case "midsize":
        rentalCost = 10000;
        break;
      case "luxury":
        rentalCost = 20000;
        break;
      default:
        rentalCost = 0;
        break;
    }
  
    var totalCost = rentalCost * daysRented;
  
    document.getElementById("result").textContent = "Total Rental Cost: Rs. " + totalCost.toFixed(2) + "/-";
    daysInput.value = ""; // Clear the input field
  });
  