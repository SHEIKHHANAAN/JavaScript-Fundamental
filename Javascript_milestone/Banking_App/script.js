const bank = {
    customerAccounts: [],
  
    addCustomerAccount: function(name, initialBalance) {
      const customerAccount = {
        name: name,
        balance: initialBalance
      };
      this.customerAccounts.push(customerAccount);
    },
  
    updateBalance: function(name, amount, transactionType) {
      const customerAccount = this.customerAccounts.find(account => account.name === name);
      if (customerAccount) {
        if (transactionType === "deposit") {
          customerAccount.balance += amount;
        } else if (transactionType === "withdrawal") {
          if (amount <= customerAccount.balance) {
            customerAccount.balance -= amount;
          } else {
            return "Insufficient balance";
          }
        }
        return "Transaction successful";
      } else {
        return "Customer account not found";
      }
    }
  };
  
  document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;
  
    const amountInput = document.getElementById("amountInput");
    const amount = parseFloat(amountInput.value);
  
    const transactionType = document.getElementById("transactionType").value;
  
    const result = bank.updateBalance(name, amount, transactionType);
  
    document.getElementById("result").textContent = result;
  
    nameInput.value = "";
    amountInput.value = "";
  });
  
  bank.addCustomerAccount("Basit Ashraf", 1000);
  bank.addCustomerAccount("Tajamul Bashir", 2000);
  