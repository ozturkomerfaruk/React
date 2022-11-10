/* Global variables */
const itemList = document.querySelector(".items");

/* Install submit button handler */
document.querySelector("#my-form").addEventListener('submit', OnSubmit);

/**********************************************************************
 * This functions gets called when the submit button is pressed 
 **********************************************************************/
function OnSubmit(e){
    e.preventDefault();
  
    const itemInput = document.querySelector("#itemInput");
    let itemVal = itemInput.value.trim();
    itemInput.value = ""; // Clear the field
  
    if(itemVal === '') {
      // alert('Please enter all fields');
      
      const msg = document.querySelector(".msg");
      msg.classList.add('error');
      msg.innerHTML = 'Please enter an item';
      msg.style.display = "block";
  
      // Remove error after 1.5 seconds
      setTimeout(() => {msg.style.display="none";}, 1500);
  
    } else {
      // Create new list item with user
      const li = document.createElement('li');

      // Add class 'item' to li
      li.classList.add('listItem');  

      // Add text node with input values
      const itemText = document.createElement("div");
      itemText.classList.add("listItemText");
      itemText.appendChild(document.createTextNode(`${itemVal}`));
      li.appendChild(itemText);
    
      const delBtn =  document.createElement('button');      
      delBtn.classList.add("delbtn");      
      delBtn.appendChild(document.createTextNode("X"));
      li.appendChild(delBtn);

      // Append to ul
      itemList.appendChild(li);
  
      // Clear fields
      itemInput.value = '';
    } //end-else  
} // end-OnSubmit

/**********************************************************************
 * Delete an item when its delete button is pressed
 **********************************************************************/
itemList.addEventListener('click', ItemListClickHandler);   // Install click handler

function ItemListClickHandler(e){
   e.preventDefault();

   // e.target is where the use has pressed the mouse. This must have a classname of "delbtn"
   if (e.target.classList.contains("delbtn")){
       // Get the parent: Must be the list item in which the button is located
       const li = e.target.parentElement;

       // Remove the list item from the itemList
//       console.log(`Removing ${li}`);
//       console.log(li);

       li.remove();  // Remove myself from the DOM
//       itemList.removeChild(li);  // We can also use removeChild from the itemList
   } // end-if
} //end-ItemListClickHandler

/**********************************************************************
 * Handle keyboard events on the itemFilterInput and filter the list items
 **********************************************************************/
const itemFilterInput = document.querySelector('#itemFilterInput');
itemFilterInput.addEventListener('input', ItemFilterInputKeyPressEventHandler);

function ItemFilterInputKeyPressEventHandler(e){
   const txt = e.target.value.toLowerCase();   // Convert to lowercase
//   console.log(`txt: ${txt}`);

   /* Loop through all list elements and filter out non-matching items */
   for (let i=0; i<itemList.children.length; i++){
        if (itemList.children[i].firstElementChild.textContent.toLowerCase().indexOf(txt) < 0){
            itemList.children[i].style.display = "none";  // make it invisible
        } else {
            itemList.children[i].style.display = "flex";  // make it visible
        } //end-else
   } //end-for
} // end-ItemFilterInputKeyPressEventHandler
