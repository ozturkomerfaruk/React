# DOM

```console.dir(window);```

```console.log(`Screen width: ${screen.width}`);    // Shorter way of writing console.log(window.screen.width);```

```console.log(`location.protocol: ${location.protocol}`);```

```
window.alert('This is a message displayed in a alert box');
if (window.confirm('Do you want to proceed?')) 
    console.log('The user pressed OK');
else
    console.log('The user pressed Cancel');
```

| JS | DOC |
|---|---|
|document.createElement(element)|Create an HTML element|
|document.removeChild(element)|Remove an HTML element|
|document.appendChild(element)|Add an HTML element|
|document.replaceChild(new, old)|Replace an HTML element|
|document.write(text)|Write into the HTML output stream|

### HTML

```
<img id="myImage" src="pic_bulboff.gif" style="width:100px;padding-left: 70px;">

<br>
<button onclick="ChangeLightState(1);">Turn the light on</button>
<span style="padding-left: 10px;"></span>
<button onclick="ChangeLightState(0);">Turn the light off</button>
```

### JS

```
function ChangeLightState(newState){
    /* Select the HTML element to modify */
    const element = document.getElementById('myImage');

    /* Change the 'src' attribute of the image element */        
    if (newState == 1) element.src='pic_bulbon.gif';
    else               element.src='pic_bulboff.gif';
} //end-ChangeLightState
```
### innerHtml
```
<p id="para"></p>

/* Shows the current time by changing the innerHTML of para2 */
function ShowTime(){
    document.getElementById('para').innerHTML = "<h2>" + Date() + "</h2>";
} //end-ShowTime

```

### List

```
<label>Item: </label>
<input type="text" id="listItemInput" placeholder="Enter the item">
<input type="button" value="Add Item" onclick="AddNewListItem()">

<br>
<h3>List Items:</h3>
<ul id="list1">
    <li>Item 1</li>
</ul>

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
```

<img width="716" alt="image" src="https://user-images.githubusercontent.com/56068905/201279235-9ec07cda-3c18-4c0f-88f0-d554bc179351.png">

<img width="674" alt="image" src="https://user-images.githubusercontent.com/56068905/201279310-2572580d-b094-4d56-8a62-fa1ad0747f73.png">


### Selectors

| JS | DOM |
|---|---|
|document.getElementById(“main-para”);|Get handle to paragraph with id|
|document.querySelector(“#main-para”)|This returns the same handle, and is preferred.|
|getElementsByClassName("…");|Class|
|getElementsByTagName(“ …”);|Using the tag name|
|getElementsByName(“…”)|Using the name attribute|
|document.querySelectorAll(“.btn”);|button|


| JS | DOM |
|---|---|
|document.links|	A collection of link elements in the document|
|document.anchors|	A collection of anchor elements in the document|
|document.forms|	A collection of form elements in the document|
|document.images|	A collection of image elements in the document|
|document.all|	A collection of all elements in the document|


```
    <section class="container">
      <form id="my-form">
        <h1>Add Item</h1>
        <div class="msg"></div>
        <div>
          <label for="item">Item:</label>
          <input type="text" id="itemInput">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>

      <ul class="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
      </ul>
    </section>
```

```
document.getElementById('my-form');    // Selects the form element
document.querySelector('.container');    // Selects the container element
document.querySelector(‘input[type=”text”]’); // Select the input element with type=”text”

// Multiple Element Selectors
document.getElementsByTagName('li');           // Selects all <li> elements. Returns a HTMLCollection
document.getElementsByClassName('item');  // Selects all elements with class = “item”. Returns an HTMLCollection
document.querySelectorAll('.item');                  // Selects all elements with class = “item”. Returns a NodeList

const item1 = document.querySelector(“ul :nth-child(1)”);                         // Select the first child
const oddItems = document.querySelectorAll(“ul:nth-child(odd)”);         // Select all odd children
const evenItems = document.querySelectorAll(“ul:nth-child(even)”);     // Select all even children

oddItems.forEach((item)=>{item.style.backgroundColor = "#ccc";});        // Make the background dark-gray for all items

// Can also use firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, parentElement etc. 
// to traverse over the DOM
const item1 = document.querySelector('ul').firstElementChild;       // First item
const item4 = document.querySelector('ul').lastElementChild;        // Last item 
const item2 = item1.nextElementSibling;                                              // Next sibling of item1, i.e., item2
const item3 = item4.previousElementSibling;                                      // Previous sibling of item4, i.e., item3
const list = item1.parentElement;                                                          
```

Here is how we can create a new <li> node and add it in between item2 & item 3:

```
const newItem = document.createElement('li');
newItem.className = "item";
newItem.id = "newItemId";              // Give it a hypothetical id

// Create a new text item
const newTextItem = document.createTextNode("New Item");
newItem.style.fontWeight = "bold";     // Make the text bold
newItem.appendChild(newTextItem);      // Append the text item to the new item

// Get a handle to item3
const item3 = ul.children[2];

// Add the new item after item2
ul.insertBefore(newItem, item3);
```


...
