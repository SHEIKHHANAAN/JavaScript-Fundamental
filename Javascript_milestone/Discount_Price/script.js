const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  document.getElementById("discountForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const originalPriceInput = document.getElementById("originalPriceInput");
    const originalPrice = parseFloat(originalPriceInput.value);
  
    const discountedPriceInput = document.getElementById("discountedPriceInput");
    const discountedPrice = parseFloat(discountedPriceInput.value);
  
    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
    document.getElementById("result").textContent = "Discount Percentage: " + discountPercentage + "%";
    originalPriceInput.value = ""; 
    discountedPriceInput.value = "";
  });
  