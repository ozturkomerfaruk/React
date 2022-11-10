/* Global variables */
const itemList = document.querySelector(".items");

/* Install submit button handler */
document.querySelector("#my-form").addEventListener('submit', OnSubmit);

/* The state: Current list of items */
let items = [
  {id: 1, title: "Item 1"},
  {id: 2, title: "Item 2"},
  {id: 3, title: "Item 3"},
  {id: 4, title: "Item 4"},
  {id: 5, title: "Item 5"},
]
let lastItemId = 6;

function addItem(title){items.push({id: ++lastItemId, title: title});}
function deleteItem(id){items = items.filter(item=>item.id != id)}
function filterItems(filterStr){
  if (filterStr == '') return items;
  const filtered = items.filter(item=>item.title.toLowerCase().indexOf(filterStr) >= 0)
  return filtered
} // end-filterItems

/*********************************************************
 * Render the initial set of items
 */
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

///----------------------------------------------
/// Delete an item given its id
///
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

///----------------------------------------------------
/// Initial rendering of the items after the DOM Content is loaded
document.addEventListener('DOMContentLoaded', ()=>{
  // Initial rendering of the items
  renderItems()
}) // end-document.addEventListener