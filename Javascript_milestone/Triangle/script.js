document.getElementById("patternForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var rowsInput = document.getElementById("rowsInput");
    var rows = parseInt(rowsInput.value);
    var pattern = "";

    for (let row = rows; row >= 1; row--) {
        for (let space = 1; space <= rows - row; space++) {
            pattern += "&nbsp;&nbsp;";
        }

        for (let col = 1; col <= row; col++) {
            pattern += "*&nbsp;";
        }

        pattern += "<br>";
    }

    document.getElementById("pattern").innerHTML = pattern;
    rowsInput.value = pattern; 
});
