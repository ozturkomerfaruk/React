import React from 'react';
import PropTypes from 'prop-types';
import "../css/App.css"

function Item(props){
    // Perform destructuring and pull-out id and title from the item
    const {id, title} = props.item;
    
    return (
        <div className="Item">
            <div className="itemText">{title}</div>
            <button className="delbtn" onClick={()=>props.deleteItem(id)}>X</button>
        </div>
    );        
} //end-Item

// Property types: It is good practice to specify the type of the property required by this component
Item.propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Item;
