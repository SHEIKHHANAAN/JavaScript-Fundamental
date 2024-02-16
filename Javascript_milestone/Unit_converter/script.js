document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var celsiusInput = document.getElementById("celsiusInput");
    var celsius = parseFloat(celsiusInput.value);
  
    var fahrenheit = (celsius * 9 / 5) + 32;
  
    document.getElementById("result").textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    celsiusInput.value = ""; 
  });
  