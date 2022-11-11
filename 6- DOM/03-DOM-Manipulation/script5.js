/*******************************************************
 * btn1 event handling below
 *******************************************************/
const btn1 = document.querySelector(".btn1");
btn1.onclick = Button1ClickHandler;              // register onclick event handler
function Button1ClickHandler() {
    btn1.innerHTML = "Mouse Clicked";
    btn1.style.color = "white";
    btn1.style.backgroundColor = "black";
} //end-Button1ClickHandler

let btn1MouseLeftTimer = null;

btn1.onmouseenter = function () {
    if (btn1MouseLeftTimer) {
        clearTimeout(btn1MouseLeftTimer);
        btn1MouseLeftTimer = null;
    } //end-if

    btn1.innerHTML = "Mouse Entered";
    btn1.style.color = "black";
    btn1.style.backgroundColor = "lightgreen";
} //end-Button1MouseEnterHandler

// This is the preferred way of adding event handlers
btn1.addEventListener("mouseleave", (e) => {// register handler for mouse left event
    e.preventDefault();    // Prevent the default event handling

    btn1MouseLeftTimer = setTimeout(() => {
        console.log("Here");
        btn1.style.color = "black";
        btn1.style.backgroundColor = "lightblue";
        btn1.innerHTML = "Button1";
        btn1MouseLeftTimer = null;
    }, 1000);

    btn1.style.color = "black";
    btn1.style.backgroundColor = "#ccc";
    btn1.innerHTML = "Mouse Left";
} //end-Button1MouseLeaveHandler
);

/*******************************************************
 * btn2 event handling below
 *******************************************************/
let noTimesBtn2Pressed = 0;
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", (e) => {
    noTimesBtn2Pressed++;

    if (noTimesBtn2Pressed == 1)
        btn2.innerHTML = "Press once more to remove the button";
    else
        btn2.style.display = "none";   // Make the button invisible
    // btn2.remove();  // Remove the button from the DOM
});
