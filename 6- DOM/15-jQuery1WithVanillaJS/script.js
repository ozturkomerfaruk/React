/************************************************************************************************
 * Instead of using jQuery, it is possible to achieve the same things using plain JS as follows
 ************************************************************************************************/
document.querySelector("#test").style.color="red"; // Change the color of element with id "test" to red

const els = document.querySelectorAll("p");
document.querySelectorAll("p").forEach((el)=>{
    el.style.fontSize="20px";   // Change the font-size of all "p" elements to 20px
    el.style.color="blue";      // Change the color of all "p" elements to blue
});

// Select all elements with class="test" and add a border
document.querySelectorAll(".test").forEach((el)=>{
    el.style.border="2px solid black";
});


// Select all even li's and change their background color
document.querySelectorAll("ul li:nth-child(even)").forEach((el)=>{
    el.style.backgroundColor="#ddd";
});

// Select all odd li's and change their background color
document.querySelectorAll("ul li:nth-child(odd)").forEach((el)=>{
    el.style.backgroundColor="#aaa";
});

// Event handling using plain JS

// Toggle text with id="btnText" when #btn1 is pressed
let btn1TextVisible = true;
document.querySelector("#btn1").addEventListener('click', (e)=>{    
    btn1TextVisible = !btn1TextVisible;
    if (btn1TextVisible) document.querySelector("#btnText").style.display = "block";
    else document.querySelector("#btnText").style.display = "none";
});

document.querySelector("#box1").addEventListener("click", (e)=>{
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
});

document.querySelector("#box1").addEventListener("mouseenter", (e)=>{
    e.target.style.backgroundColor = "lightgreen";
    e.target.style.color = "black";
});

document.querySelector("#box1").addEventListener("mouseleave", (e)=>{
    e.target.style.backgroundColor = "aqua";
    e.target.style.color = "black";
});

