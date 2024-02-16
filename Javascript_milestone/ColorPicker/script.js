const colors=["green","yellow","blue","pink","red"]
const button= document.getElementById("button")
button.addEventListener("click",(e)=>{
    e.preventDefault();
color();
})
const color=()=>{
    document.body.style.backgroundColor=colors[Math.floor(Math.random()*5)]
}