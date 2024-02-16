const listItems = [ "HTML", "CSS", "JavaScript", "React", "Node.js"];
const list = document.getElementById("listItems");
const addButton = document.getElementById("addItemButton");
let currentIndex = 0;

addButton.addEventListener("click", function() {
  if (currentIndex < listItems.length) {
    const newItem = document.createElement("li");
    newItem.textContent = listItems[currentIndex];
    list.appendChild(newItem);
    currentIndex++;
  } else {
    addButton.disabled = true;
    addButton.textContent = "All Items Added";
  }
});