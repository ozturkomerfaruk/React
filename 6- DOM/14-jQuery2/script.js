/* Install submit button handler */
$("#my-form").submit(OnSubmit);

/**********************************************************************
 * This functions gets called when the submit button is pressed 
 **********************************************************************/
function OnSubmit(e){
    e.preventDefault();
  
    if($("#itemInput").val() === '') {
      // alert('Please enter all fields');
      
      $(".msg").addClass('error');
      $(".msg").html('Please enter an item');
      $(".msg").show();
  
      // Remove error after 1.5 seconds
      setTimeout(() => {$(".msg").hide();}, 1500);
  
    } else {
      // Create new list item with user
      const li = document.createElement('li');

      // Add class 'item' to li
      li.classList.add('listItem');  

      // Add text node with input values
      const itemText = document.createElement("div");
      itemText.classList.add("listItemText");
      itemText.appendChild(document.createTextNode(`${itemInput.value}`));
      li.appendChild(itemText);
    
      const delBtn =  document.createElement('button');      
      delBtn.classList.add("delbtn");      
      delBtn.appendChild(document.createTextNode("X"));
      li.appendChild(delBtn);

      // Append to ul
      $(".items").append(li);
  
      // Clear fields
      itemInput.value = '';
    } //end-else  
} // end-OnSubmit

/**********************************************************************
 * Delete an item when its delete button is pressed
 **********************************************************************/
$(".items").on('click', ItemListClickHandler);   // Install click handler

function ItemListClickHandler(e){
   e.preventDefault();

   // e.target is where the use has pressed the mouse. This must have a classname of "delbtn"
   if (e.target.classList.contains("delbtn")){
     e.target.parentElement.remove();    // Remove the li that contains this delete button
   } // end-if
} //end-ItemListClickHandler

/**********************************************************************
 * Handle keyboard events on the itemFilterInput and filter the list items
 **********************************************************************/
$("#itemFilterInput").on('input', ItemFilterInputKeyPressEventHandler);

function ItemFilterInputKeyPressEventHandler(e){
   const txt = $(this).val().toLowerCase();   // Convert to lowercase

   /* Loop through all list elements and filter out non-matching items */
   $(".items").children().each(function(){
     if ($(this).first().text().toLowerCase().indexOf(txt) < 0) $(this).hide();
     else $(this).show();
   });
} // end-ItemFilterInputKeyPressEventHandler
