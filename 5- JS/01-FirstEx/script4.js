function ChangeLightState(newState) {
    /* Select the HTML element to modify */
    const element = document.getElementById('myImage');

    /* Change the 'src' attribute of the image element */
    if (newState == 1) element.src = 'pic_bulbon.gif';
    else element.src = 'pic_bulboff.gif';
} //end-ChangeLightState


/* This is a JS function that gets called when the buttons are pressed*/
let fontSize = 16; /* default font size: 16 px */
function ChangeFontSize(delta) {
    /* Select the HTML element to modify */
    let parag = document.getElementById('para1');
    console.log(parag);
    console.log(parag.style.fontSize);

    fontSize += delta;
    if (fontSize < 10) fontSize = 10;
    else if (fontSize > 50) fontSize = 50;

    parag.style.fontSize = fontSize + "px";
} //end-ChangeFontSize

/* Changes the color of the paragraph */
function ChangeColor(color) {
    document.getElementById('para1').style.color = color;
} //end-ChangeColor

/* Adds or removes border to the paragraph */
function ChangeBorder(border) {
    if (border === 1) document.getElementById('para1').style.border = "2px solid black";
    else document.getElementById('para1').style.border = "none";
}

/* Shows the current time by changing the innerHTML of para2 */
function ShowTime() {
    document.getElementById('para2').innerHTML = "<h2>" + Date() + "</h2>";
} //end-ShowTime

/* Adds a new list item to the list */
function AddNewListItem() {
    let itemInputElement = document.getElementById('listItemInput');
    let value = itemInputElement.value.trim(); // Trim white space
    itemInputElement.value = ""; // To clear the input field

    if (value == "") {
        alert("You must enter an item first");
        return;
    }

    const newItem = document.createElement("li");
    newItem.innerHTML = value;
    document.getElementById('list1').appendChild(newItem);
} //end-AddNewListItem