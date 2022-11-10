/* The window object allows execution of code at specified time intervals. 
 * These time intervals are called timing events
 */
// Set a periodic timer
let periodicTimer = setInterval(updateClock, 1000);

// Update the clock every 1 sec.
function updateClock(){
    document.getElementById('clock').innerHTML = "<h2>" + new Date().toString() + "</h2>";
} // end-updateClock

// Gets called 2 seconds after the user presses the "Press to generate an alert in 2 secs" button.
function myFunction() {
    alert('Hello');
} //end-myFunction




