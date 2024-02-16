document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("image");
    let positionX = 0;
    let positionY = 0;
  
    document.addEventListener("keydown", function(event) {
      const key = event.key.toLowerCase();
      const stepSize = 10; // Adjust the step size as desired
  
      if (key === "arrowup") {
        positionY -= stepSize;
      } else if (key === "arrowdown") {
        positionY += stepSize;
      } else if (key === "arrowleft") {
        positionX -= stepSize;
      } else if (key === "arrowright") {
        positionX += stepSize;
      }
  
      image.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  });
  