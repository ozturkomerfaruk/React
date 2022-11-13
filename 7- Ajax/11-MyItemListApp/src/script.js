/* Global variables */
const itemList = document.querySelector(".items");

/* Install submit button handler */
document.querySelector("#my-form").addEventListener('submit', OnSubmit);

/* The state: Current list of items */
let items = []

/* Add a new item to items, send it to the server and then re-render */
async function addItem(title){
  try {
    const uri = 'http://localhost:3000/todos';
    const headers = { 'Content-Type': 'application/json' }    
    const res = await fetch(uri, {
                            method: 'POST',
                            headers: headers,        
                            body: JSON.stringify({title: title})
                        })
    const item = await res.json()
    console.log('addItem: ', item)
    items.push(item)
    renderItems()

  } catch (err){
    console.log('addItem error: ', err)
  }
} // end-addItem

function deleteItem(id){
  fetch('http://localhost:3000/todos/' + id, {
    method: 'DELETE',
  }).then(res=>{
    if (res.status == 200){
      console.log('deleteItem successful: ', res)
      items = items.filter(item=>item.id != id)
      renderItems()      
    } else {
      console.log('deleteItem not successful. status: ', res.status)
    } // end-else
  }).catch(err=>{
    console.log('deleteItem error: ', err)
  })  
} // end-deleteItem

function filterItems(filterStr){
  if (filterStr == '') return items;
  const filtered = items.filter(item=>item.title.toLowerCase().indexOf(filterStr) >= 0)
  return filtered
} // end-filterItems

function renderItems(){
  const filterStr = document.querySelector("#itemFilterInput").value.trim().toLowerCase()
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
    } //end-else  
} // end-OnSubmit

/**********************************************************************
 * Handle keyboard events on the itemFilterInput and filter the list items
 **********************************************************************/
const itemFilterInput = document.querySelector('#itemFilterInput')
itemFilterInput.addEventListener('input', ItemFilterInputKeyPressEventHandler)

function ItemFilterInputKeyPressEventHandler(e){
   renderItems()
} // end-ItemFilterInputKeyPressEventHandler

const fetchItems = async () => {
  const res = await fetch('http://localhost:3000/todos');
  items = await res.json();
  console.log(items)
  renderItems()
} // end-fetchItems

// Fetch and render items
console.log('Calling fetchItems')
fetchItems()

