document.getElementById("fixButton").addEventListener("click", function() {
    var cart = [1, 2, 3, 4, 5,6,7,8,9,10]; 
    var fixedCart = cart.map(function(quantity) {
      return quantity * 2;
    });
  
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
  
    fixedCart.forEach(function(quantity, index) {
      var listItem = document.createElement("li");
      listItem.textContent = "Item " + (index + 1) + ": " + quantity;
      itemList.appendChild(listItem);
    });
  });
  