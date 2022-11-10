/* This is a JS function that gets called when the buttons are pressed*/
let fontSize = 16; /* default font size: 16 px */
function ChangeFontSize(delta){
    /* Select the HTML element to modify */        
    let parag = document.getElementById('para1');
    console.log(parag);        
    console.log(parag.style.fontSize);

    fontSize += delta;
    if      (fontSize < 10) fontSize = 10;
    else if (fontSize > 50) fontSize = 50;

    parag.style.fontSize = fontSize + "px";
} //end-ChangeFontSize

/* Changes the color of the paragraph */
function ChangeColor(color){
    document.getElementById('para1').style.color = color;
} //end-ChangeColor

/* Adds or removes border to the paragraph */
function ChangeBorder(border){
   if (border === 1) document.getElementById('para1').style.border = "2px solid black";
   else              document.getElementById('para1').style.border = "none";
}
