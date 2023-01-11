import { writable } from 'svelte/store';

let filterStr = writable('')

  // Called from FilterItem component when the user enter a filter string
  const filterItems = (value)=> {
    filterStr.set(value.trim().toLowerCase())
//    console.log('filterItems: ', filterStr)
  } //end-filterItems

  export {filterStr, filterItems}
