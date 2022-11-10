/* window object represents the browser's window. All global JS objects, functions, 
   and variables automatically become members of the window object. 
   Even the document object (of the HTML DOM) is a property of the window object
*/
console.dir(window);

/* window.screen object contains information about the user's screen */
console.log(`Screen width: ${screen.width}`);    // Shorter way of writing console.log(window.screen.width);
console.log(`Screen height: ${screen.height}`);  // Shorter way of writing console.log(window.screen.width);

/* The window.location object can be used 
 * to get the current page address (URL) and to redirect the browser to a new page.
 */
console.log(`URL of the current page: ${location.href}`);
console.log(`location.pathname: ${location.pathname}`);
console.log(`location.hostname: ${location.hostname}`);
console.log(`location.protocol: ${location.protocol}`);

/* The window.navigator object contains information about the visitor's browser. */
console.log(`navigator.appName: ${navigator.appName}`);
console.log(`location.cookieEnabled: ${navigator.cookieEnabled}`);

/* An alert box is often used if you want to make sure information comes through to the user. 
 * When an alert box pops up, the user will have to click "OK" to proceed. 
 */
window.alert('This is a message displayed in a alert box');

/* A confirm box is often used if you want the user to verify or accept something. 
 * When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed. 
 * If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
 */
if (window.confirm('Do you want to proceed?')) 
    console.log('The user pressed OK');
else
    console.log('The user pressed Cancel');

/* A prompt box is often used if you want the user to input a value before entering a page. 
 * When a prompt box pops up, the user will have to click either "OK" or "Cancel" 
 * to proceed after entering an input value. If the user clicks "OK" the box returns the input value. 
 * If the user clicks "Cancel" the box returns null
 */
const name = prompt("Please enter your name", "Harry Potter");

if (name == null || name == "") {
  console.log("The user cancelled the prompt.");
} else {
  console.log("Hello " + name + "! How are you today?");
} //end-else
