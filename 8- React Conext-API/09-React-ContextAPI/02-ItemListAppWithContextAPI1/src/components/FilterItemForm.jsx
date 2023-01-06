import React, {useContext} from 'react';
import '../css/App.css'
import {ItemsContext} from '../contexts/ItemsContext'

function FilterItemForm() {
    const {filterItems} = useContext(ItemsContext);

    return (
        <div id="FilterItemForm">
            <label htmlFor="filter"><strong>Item filter:</strong></label>
            <input type="text" name="value" onChange={filterItems}></input>
        </div>
    );        
} //end-FilterItemForm

export default FilterItemForm;
