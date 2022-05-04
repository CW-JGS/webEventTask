function qs(element, parent=document) {
    return parent.querySelector(element)
}

const rootDiv = qs(".rootDiv");
const dButton = qs(".helloWorld");
const changeBG = qs(".changeBG");
const enableBGChanges = qs(".enableBGChange");
var colorToggle = false;
var h1 = document.createElement("h1")
h1.innerHTML = "Hello World!";

window.onload = function() {
    // task 1 thingo
    h1.innerHTML = "Ipsum Dominum";
    
    changeBG.disabled = true

}
dButton.addEventListener("click", ()=> {
    rootDiv.append(h1)

    
})
h1.addEventListener("mouseover", ()=> {
    h1.innerHTML = "Goodbye Mars"
})

changeBG.addEventListener("click", ()=> {
    if(colorToggle == true) {
        document.body.style.backgroundColor = "green"         
        colorToggle = !colorToggle
    } else {
        document.body.style.backgroundColor = "red"         
        colorToggle = !colorToggle
    }
    
})
enableBGChanges.addEventListener("click", ()=> {
    if(changeBG.disabled) {
        enableBGChanges.innerHTML = "Enable Background Changes"
    } else {
        enableBGChanges.innerHTML = "Disable Background Changes"

    }
    changeBG.disabled = !changeBG.disabled
})
