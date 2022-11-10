/* Global variables */
const itemList = document.querySelector(".items");

/* Install submit button handler */
document.querySelector("#my-form").addEventListener('submit', OnSubmit);

/* The state: Current list of items */
// Read the current set of items from the localStorage
let items = []
const storedItems = JSON.parse(localStorage.getItem("items"));
if (storedItems != null) items = storedItems
console.log(items)
let lastItemId = 0;
items.forEach(item=>{
  lastItemId = Math.max(lastItemId, item.id)
})

/// Save the current list of items to localStorage
function SaveItems2LocalStorage(){
  localStorage.setItem("items", JSON.stringify(items));
} //end-SaveItems2LocalStorage

function addItem(title){
  items.push({id: ++lastItemId, title: title});
  SaveItems2LocalStorage()
} // end-addItem

function deleteItem(id){
  items = items.filter(item=>item.id != id)
  SaveItems2LocalStorage()
} // end-deleteItem

function filterItems(filterStr){
  if (filterStr == '') return items;
  const filtered = items.filter(item=>item.title.toLowerCase().indexOf(filterStr) >= 0)
  return filtered
} // end-filterItems

/* Render the current list of items on the HTML page */
function renderItems(){
  const filterStr = document.querySelector("#itemFilterInput").value.trim().toLowerCase();
  const filteredItems = filterItems(filterStr);

  let template = '';
  filteredItems.forEach(item => {
    template += `        
    <li class="listItem">
      <div class="listItemText">${item.title}</div>
      <button class="delbtn" onclick={deleteButtonHandler(${item.id})}>X</button>
    </li>        
    `
  })

  document.querySelector('#root').innerHTML = template;
} // end-renderItems

function deleteButtonHandler(id){
  deleteItem(id);
  renderItems();
} // end-deleteButtonHandler

/**********************************************************************
 * This functions gets called when the submit button is pressed 
 **********************************************************************/
function OnSubmit(e){
    e.preventDefault();
  
    const itemInput = document.querySelector("#itemInput");
    const title = itemInput.value.trim();  	
    itemInput.value = '';
  
    console.log('OnSubmit: ', title)

    if(title == '') {
      // alert('Please enter all fields');
      
      const msg = document.querySelector(".msg");
      msg.classList.add('error');
      msg.innerHTML = 'Please enter an item';
      msg.style.display = "block";
  
      // Remove error after 1.5 seconds
      setTimeout(() => {msg.style.display="none";}, 1500);
  
    } else {
      // Add the new item to items and re-render
      addItem(title);
      SaveItems2LocalStorage();
      renderItems();
    } //end-else  
} // end-OnSubmit

/**********************************************************************
 * Handle keyboard events on the itemFilterInput and filter the list items
 **********************************************************************/
const itemFilterInput = document.querySelector('#itemFilterInput')
itemFilterInput.addEventListener('input', ItemFilterInputKeyPressEventHandler)

function ItemFilterInputKeyPressEventHandler(e){
   // Render the filtered items
   renderItems()
} // end-ItemFilterInputKeyPressEventHandler

// Initial rendering of the items
renderItems()