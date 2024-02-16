const inputColor=document.querySelector("#inputcolorname");
const firstInputColor=document.querySelector("#color1");
const secondInputColor=document.querySelector("#color2");
const colorBox=document.querySelector("#resultantcolorbox");
const colorName=document.querySelector("#resultantcolorname");

inputColor.addEventListener("submit", function(event){
    event.preventDefault();
    const firstColor=firstInputColor.value.toLowerCase();
    const secondColor=secondInputColor.value.toLowerCase();

    let mixedColor;
    switch(firstColor) {
        case "red":
            switch(secondColor) {
                case "blue":
                    mixedColor= "purple";
                    break;
                case "yellow":
                    mixedColor = "orange";
                    break;
                default:
                    mixedColor="invalid color combination";
            }
            break;
        case "blue":
            switch(secondColor) {
                case "red":
                    mixedColor= "purple";
                    break;
                case "yellow":
                    mixedColor = "green";
                    break;
                default:
                    mixedColor="invalid color combination";
            }
            break;
         case "yellow":
            switch(secondColor) {
                case "blue":
                    mixedColor= "green";
                    break;
                case "red":
                    mixedColor = "orange";
                    break;
                default:
                    mixedColor="invalid color combination"
            }
            break;
        default:
            mixedColor="invalid color combination";
    }
if(mixedColor=="invalid color combination")
{
    colorBox.style.backgroundColor = "white";
} else {
    colorBox.style.backgroundColor=mixedColor;
}
colorName.textContent = mixedColor;

})