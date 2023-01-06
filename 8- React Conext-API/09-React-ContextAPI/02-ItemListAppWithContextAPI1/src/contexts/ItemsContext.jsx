import {useState, createContext} from 'react';

export const ItemsContext = createContext();

function ItemsContextProvider(props) {
    const [items, setItems] = useState([
        {id: 1, title: 'Item 1'}, 
        {id: 2, title: 'Item 2'}, 
        {id: 3, title: 'Item 3'}, 
        {id: 4, title: 'Item 4'}, 
        {id: 5, title: 'Item 5'}
      ]);

      const [uid, setUid] = useState(6);
      const [filterStr, setFilterStr] = useState('');

      // Called from FilterItem component when the user enter a filter string
      const filterItems = (e)=> {
        setFilterStr(e.target.value.trim());
      } //end-filterItems
      
      // Adds a new item to the item list
      const addItem = (title) => {
        const newItems = [...items, {id: uid, title: title}];
        setItems(newItems);
        setUid(uid+1);
      } //end-addItem
    
      // Called from Item component when an item is to be deleted
      const deleteItem = (id) => {
        const newItems = items.filter((item)=>{return item.id === id? false: true;});      
        setItems(newItems);
     } //end-deleteItem

      // Renders the App component
      let items2Display = items;
      if (filterStr !== "")
          items2Display = items.filter((item)=>{
              if (item.title.toLowerCase().indexOf(filterStr.toLowerCase()) >= 0) return true;
              else return false;
          });

     return (
        <ItemsContext.Provider value={{items2Display, addItem, deleteItem, filterItems}}>
            {props.children}
        </ItemsContext.Provider>
     );
} // end-ItemsContextProvider

export default ItemsContextProvider;
