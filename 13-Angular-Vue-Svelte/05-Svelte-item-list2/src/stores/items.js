import { writable } from 'svelte/store';

let items = writable([
    {id: 1, title: 'Item 1'}, 
    {id: 2, title: 'Item 2'}, 
    {id: 3, title: 'Item 3'}, 
    {id: 4, title: 'Item 4'}, 
    {id: 5, title: 'Item 5'}
  ])

  let uid =  6;
  let filterStr = '';

  // Called from FilterItem component when the user enter a filter string
  const filterItems = (value)=> {
    filterStr = value
  } //end-filterItems

  // Called from AddItemForm component when the AddItem button is pressed
  const addItem = (title) => {
    items.update(items=>[...items, {id: uid, title: title}])
    uid = uid+1
  } //end-addItem

  // Called from Item component when an item is to be deleted
  const deleteItem = (id) => {
    items.update(items=>items.filter((item)=>{return item.id === id? false: true;})) 
 } //end-deleteItem

  // The following code reactively runs to compute items2Display
  export {items, addItem, deleteItem, filterItems}
