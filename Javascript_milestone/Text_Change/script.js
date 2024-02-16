const heading = document.getElementById("heading");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  if (heading.textContent === "The most affordable learning platform") {
    heading.textContent = "PW Skills";
  } else {
    heading.textContent = "The most affordable learning platform";
  }
});