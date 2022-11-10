/* Adds a new list item to the list */
function AddNewListItem(){
    let itemInputElement = document.getElementById('listItemInput');
    let itemValue = itemInputElement.value.trim(); // Trim white space
    itemInputElement.value = "";

    if (itemValue == ""){alert("You must enter an item first"); return;}

    const newItem = document.createElement("li");    
    newItem.appendChild(document.createTextNode(`${itemValue}`));
    document.getElementById('list1').appendChild(newItem);
} //end-AddNewListItem
