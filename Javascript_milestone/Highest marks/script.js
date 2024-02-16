document.getElementById("marksForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var marksInput1 = document.getElementById("marksInput1");
    var marksInput2 = document.getElementById("marksInput2");
    var marksInput3 = document.getElementById("marksInput3");
    var marksInput4 = document.getElementById("marksInput4");
    var marksInput5 = document.getElementById("marksInput5");
  
    var marks = [
      parseInt(marksInput1.value),
      parseInt(marksInput2.value),
      parseInt(marksInput3.value),
      parseInt(marksInput4.value),
      parseInt(marksInput5.value)
    ];
  
    var highestMarks = marks.reduce(function(a, b) {
      return a > b ? a : b;
    });
  
    document.getElementById("result").textContent = "Highest marks: " + highestMarks;
  
    marksInput1.value = "";
    marksInput2.value = "";
    marksInput3.value = "";
    marksInput4.value = "";
    marksInput5.value = "";
  });