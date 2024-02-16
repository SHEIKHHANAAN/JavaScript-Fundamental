document.getElementById("billForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var costInput = document.getElementById("costInput");
    var cost = parseFloat(costInput.value);
  
    var peopleInput = document.getElementById("peopleInput");
    var people = parseInt(peopleInput.value);
  
    var totalBill = cost * people;
    var billPerPerson = cost;
  
    var result = {
      totalBill: totalBill.toFixed(2),
      billPerPerson: billPerPerson.toFixed(2)
    };
  
    document.getElementById("result").textContent = "Total Bill: Rs. " + result.totalBill + "/- | Bill Per Person: Rs. " + result.billPerPerson + "/-";
    costInput.value = ""; 
        peopleInput.value = "";
  });
  