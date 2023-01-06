import {useState, createContext, useEffect} from 'react';

export const ItemsContext = createContext();

function ItemsContextProvider(props) {
      const [items, setItems] = useState([]);

      useEffect(()=>{
        fetch('http://localhost:3000/todos')
        .then(res=>res.json())
        .then(items=>setItems(items))
      }, [])

      const [filterStr, setFilterStr] = useState('');

      // Called from FilterItem component when the user enter a filter string
      const filterItems = (e)=> {
        setFilterStr(e.target.value.trim());
      } //end-filterItems
      
      // Adds a new item to the item list
      const addItem = (title) => {
        const uri = 'http://localhost:3000/todos';
        const headers = { 'Content-Type': 'application/json' }    
        fetch(uri, {
                      method: 'POST',
                      headers: headers,        
                      body: JSON.stringify({title})
                  })
            .then(res=>res.json())
            .then(todo=>{
              console.log(todo)
              const newItems = [...items, todo];
              setItems(newItems);
            })
      } //end-addItem
    
      // Called from Item component when an item is to be deleted
      const deleteItem = (id) => {
        fetch('http://localhost:3000/todos/' + id, {
          method: 'DELETE',
        }).then(res=>{
          if (res.status == 200){
            console.log('deleteItem successful: ', res)
            const newItems = items.filter((item)=>{return item.id === id? false: true;});      
            setItems(newItems);
    
          } else {
            console.log('deleteItem not successful. status: ', res.status)
          } // end-else
        }).catch(err=>{
          console.log('deleteItem error: ', err)
        })        
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
