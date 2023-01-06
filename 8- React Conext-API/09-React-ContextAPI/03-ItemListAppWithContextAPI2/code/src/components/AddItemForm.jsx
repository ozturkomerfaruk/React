import React, { useState, useContext } from 'react'
import "../css/App.css"
import {ItemsContext} from '../contexts/ItemsContext'

function AddItemForm(props) {
  const [title, setTitle] = useState('');
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
  const {addItem} = useContext(ItemsContext);

  const onChange = (e)=>{
    setTitle(e.target.value);
  } //end-onChange

  const onSubmit = (e) => {
    e.preventDefault();
    
    const tt = title.trim();
    
    if (tt === ""){
      setDisplayErrorMsg(true);
      setTimeout(()=>{setDisplayErrorMsg(false)}, 1000);
    } else {
      addItem(tt);
    } //end-else

    setTitle('');
  } //end-onSubmit

  // Render the item
  let errorMsgStyle = {display: "none"};
  if (displayErrorMsg) errorMsgStyle = {display: ""};

  return (
    <form id="AddItemForm" onSubmit={onSubmit}>
        <div className="error" style={errorMsgStyle}>Please enter a title before pressing Submit</div>
        <div>
          <label><strong>Item Title: </strong></label>
          <input type="text" value={title} onChange={onChange}/>
        </div>
        <input className="btn" type="submit" value="Add Item"/>      
      </form>
  );
} // end-AddItemForm

export default AddItemForm;