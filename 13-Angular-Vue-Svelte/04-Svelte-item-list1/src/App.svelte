<script>
  import FilterItemForm from './comps/FilterItemForm.svelte'
  import AddItemForm from './comps/AddItemForm.svelte'
  import ItemList from './comps/ItemList.svelte'

  let items = [
          {id: 1, title: 'Item 1'}, 
          {id: 2, title: 'Item 2'}, 
          {id: 3, title: 'Item 3'}, 
          {id: 4, title: 'Item 4'}, 
          {id: 5, title: 'Item 5'}
        ];

  let uid =  6;
  let filterStr = '';

  // Called from FilterItem component when the user enter a filter string
  const filterItems = (value)=> {
    filterStr = value
  } //end-filterItems

  // Called from AddItemForm component when the AddItem button is pressed
  const addItem = (title) => {
    items = [...items, {id: uid, title: title}]
    uid = uid+1
  } //end-addItem

  // Called from Item component when an item is to be deleted
  const deleteItem = (id) => {
    items = items.filter((item)=>{return item.id === id? false: true;}); 
//    console.log('deleteItem(', id, ")", items)
 } //end-deleteItem

  // The following code reactively runs to compute items2Display
  let items2Display;
 $: {
  items2Display = items;
  const filterStr2 = filterStr.trim().toLowerCase();
  if (filterStr2 !== ""){
    items2Display = items.filter((item)=>{
        if (item.title.toLowerCase().indexOf(filterStr2) >= 0) return true;
        else return false;
    });
  } // end-if
}
</script>

<div class="container">
  <h1 class="header">ItemList App</h1>
  <FilterItemForm filterItems={filterItems} />
  <AddItemForm addItem={addItem} />
  <ItemList items={items2Display} deleteItem={deleteItem}/>
</div>
