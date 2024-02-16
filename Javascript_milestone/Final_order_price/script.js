document.getElementById("cartForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var unitPrice1 = document.getElementById("unitPrice1").value;
    var quantity1 = document.getElementById("quantity1").value;
    var unitPrice2 = document.getElementById("unitPrice2").value;
    var quantity2 = document.getElementById("quantity2").value;
  
    var totalCost = (parseFloat(unitPrice1) * parseInt(quantity1)) + (parseFloat(unitPrice2) * parseInt(quantity2));
  
    document.getElementById("result").textContent = "Total Cost:" + totalCost.toFixed(2);
  });
  