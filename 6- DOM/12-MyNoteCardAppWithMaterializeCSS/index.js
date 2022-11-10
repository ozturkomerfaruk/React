const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setDate(){
    const today = new Date().toString().split(' ')
    document.querySelector("#todaysDate").innerHTML = `Today is ${today[1]} ${today[2]}, ${today[3]}`;
} // end-setDate

window.addEventListener('DOMContentLoaded', () => {
    setDate()
    setInterval(setDate, 5000)
    renderNotes();
});

function navigate(route){
    const p = location.pathname;
    if (p == route) return;
    if (route == '/') renderNotes();
    else if (route == '/create') renderCreate();
} // end-navigate
