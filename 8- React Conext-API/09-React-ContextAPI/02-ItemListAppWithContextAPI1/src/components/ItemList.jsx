import React, {useContext} from 'react';
import Item from './Item';
import {ItemsContext} from '../contexts/ItemsContext'

function ItemList(props){
    const {items2Display, deleteItem} = useContext(ItemsContext);

    return (
        items2Display.map((item) => {
            return <Item key={item.id} item={item} deleteItem={deleteItem} />
        })
    );        
} //end-ItemList

export default ItemList;
