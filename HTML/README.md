# HTML

## 1. Headings 

``` 
<h1>This is a h1 heading</h1>
<h2>This is a h2 heading</h2>
<h3>This is a h3 heading</h3>
<h4>This is a h4 heading</h4>
<h5>This is a h5 heading</h5>
<h6>This is a h6 heading</h6>
```

## 2. Paragraph

```
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Another sentence in the paragraph.
</p>

<pre>
   This is line 1.
   This is line 2.
</pre>

``` 

## 3.	Some Inline Elements for Formatting Text

```
This is a very <strong>important</strong> problem.

This is a very <em>important</em> problem.

The <abbr title=”World Wide Web”>WWW</abbr> is awesome.

<address>
Written by John Doe.<br> 
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Small text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
<q> - Short Quotations
<address> for Contact Information

```



## 4.	Links

```
<a href="url">link text</a>
<a href="http://google.com">Go to google</a>

<a href=https://google.com target="_blank">Go to google</a>
```

### Hover Effect

```
<style>
a:link {
  color: green; 
  background-color: transparent; 
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
```

## 5.	Images

```
<img src="img_girl.jpg" alt="Girl in a jacket">

```

## 6. Lists

```
<ul>
    <li>Unordered List item 1</li>
    <li>Unordered List item 2</li>
    <li>Unordered List item 3</li>
    <li>Unordered List item 4</li>
</ul>

 <!-- <ul style="list-style-type:circle;"> -->

<ol> 
    <li>Ordered List item 1</li>
    <li>Ordered List item 2</li>
    <li>Ordered List item 3</li>
    <li>Ordered List item 4</li>
</ol>

<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol type="1" start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<dl>
  <dt>Coffee</dt>
     <dd>Black hot drink</dd>
  <dt>Milk</dt>
     <dd>White cold drink</dd>
</dl>

```

##  7. Tables

```
<table>
    <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td>Ali</td>
      <td>Kuscu</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Ayse</td>
      <td>Kaptan</td>
      <td>28</td>
    </tr>
   </tbody>
</table>
``` 



```
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Ali Kuscu</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>

```

```
<table>
  <tr>
    <th>Name:</th>
    <td>Ali Kuscu</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>

```


```
<table> 
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>

```
## Forms

```
<form>
    <label>First name: </label>
    <input type="text" name="firstName">
    <br>
    <br>        
    <label>Last name: </label>
    <input type="text" name="lastName">        
    <br>        
</form>
```


```
<form>
    <div>
    <label>First name: </label>
    <input type="text" name="firstName">
    </div>
    <br>   
    <div>     
    <label>Last name: </label>
    <input type="text" name="lastName">        
    </div>        
</form>

```


```
<form>
    <label>First name: </label>
    <input type="text" name="firstName" value="Ali">
    <br>
    <br>        
    <label>Last name: </label>
    <input type="text" name="lastName" value="Kaya">        
    <br>        
</form>

```

```
<form>
    <label>First name: </label>
    <input type="text" name="firstName" value="Ali">
    <br>
    <br>        
    <label>Last name: </label>
    <input type="text" name="lastName" value="Kaya">        
    <br>        
    <br>
    <input type=”submit” value=”Submit”> 
</form>
```

## iframe Kullanma

```
<h2>Custom Iframe Border</h2>
<p>With CSS, you can also change the size, style and color of the iframe's border:</p>

<iframe src="demo_iframe.htm" style="border:2px solid red;" title="Iframe Example"></iframe>
```
<img width="422" alt="image" src="https://user-images.githubusercontent.com/56068905/194304652-aea45fcc-7aed-4619-a31d-1ed19f0ed2c9.png">


----------------------

Form Action
```
<form action="process.php" method="POST">
form elements
</form>
```
``` /process.php?firstName=Ali&lastName=Kaya ```

```
<form>
    <fieldset>
    <legend>Personal Data</legend>
    <label>First name: </label>
    <input type="text" name="firstName" value="Ali">
    <br>
    <br>        
    <label>Last name: </label>
    <input type="text" name="lastName" value="Kaya">        
    <br>        
    <br>
    <input type=”submit” value=”Submit”> 
    </fieldset>
</form>
```
<img width="326" alt="image" src="https://user-images.githubusercontent.com/56068905/194273928-383f4bdc-de6a-4393-8dd5-21fad56cf560.png">   

### Other Input Elements

**RadioButton**

```
<form>
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other
</form>
```

**CheckBox**

```
<form>
  <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
  <input type="checkbox" name="vehicle2" value="Car"> I have a car
</form>
```

**AlertDialog**
```
<form>
        <input type="button" onclick="alert('Hello World!')" value="Click Me!">
</form>

<form>
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
</form>

```

**Extra Bilgiler**

```
  <form>
  Email: <input type="email" name="email"><br><br>
  Number: <input type="number" name="number" value="10"><br><br>
  Date: <input type="date" name="date"><br><br>
  <input type = "submit" value="Submit">
  </form>
```

**DropDown Menu**
```
<select name="car">
        <option value="volvo" selected>Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
</select>
```

**Large Text Area** 
```
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

**Div ile Ayırma**
```
<div style="background-color:black;color:white;padding:20px;">
    <h2>London</h2>
    <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    </div>
```

## HTML5 Semantic Tags

<img width="145" alt="image" src="https://user-images.githubusercontent.com/56068905/194276476-1ac5ae12-6dcc-47b6-8f88-b82fd44f09c9.png">

***article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time>***

### Section

 "A section is a thematic grouping of content, typically with a heading." A home page could normally be split into sections for introduction, content, and contact information.

```
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section> 
```

### Artickle

An article should make sense on its own, and it should be possible to read it independently from the rest of the web site. Examples of where an <article> element can be used: Forum post, Blog post, Newspaper article

```
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

### Footer
A footer element should contain information about its containing element. A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc. You may have several <footer> elements in one document.

```
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:iletisim@ozturkomerfaruk.com">
  someone@example.com</a>.</p>
</footer>
```

### nav 
       
Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
       
```
 <nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
     
```
       
### aside 
       
The aside element defines some content aside from the content it is placed in (like a sidebar). The aside content should be related to the surrounding content.

```
<p>My family and I visited The Epcot center this summer.</p>
<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```
       
### figcaption & figure

The purpose of a figure caption is to add a visual explanation to an image. In HTML5, an image and a caption can be grouped together in a <figure> element. The <img> element defines the image, the <figcaption> element defines the caption.
       
```
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>

```

### meta
         
The meta tag gives information about the document such as description and keywords, which are used by search engines in correctly indexing the page. Again, these do not get displayed to the user nor do they have any functionality as far as the content or layout of the page is concerned. But they give information to the search engines so that your page get indexed correctly.       
       
```
<meta name="description" content="HTML5 Cheat sheet: Examples of HTML5 elements">
<meta name="keywords" content="HTML5 tags, Web design">
      
```
       
### Examples

```
<aside>
        <h3>Categories</h3>
          <nav>
            <ul>
              <li><a href="#">Category1</a></li>
              <li><a href="#">Category2</a></li>
              <li><a href="#">Category3</a></li>
            </ul>
        </nav>
    </aside>
```
       
<img width="169" alt="image" src="https://user-images.githubusercontent.com/56068905/194291041-8bc8672f-5af0-45c3-85a4-0b3fbfaae6ff.png">

```
 <section>
        <article class="post">
          <h2>Post 1</h2>
          <p>Posted on January 14, 2020 at 09:45am</p>
          <p>Lorem ipsum dolor sit amet consectetur!</p>
          <a href="post.html">Read more</a>
        </article>
<section>            
```
       
<img width="285" alt="image" src="https://user-images.githubusercontent.com/56068905/194291189-f297dbef-a0e5-4c1f-ba72-5f1bc17d64fe.png">

```
<footer id="main-footer">
            Copyright &copy; 2020, John Doe.
   </footer>       
```
<img width="196" alt="image" src="https://user-images.githubusercontent.com/56068905/194291309-f190269b-4860-4ca7-9fdf-9580457af93e.png">

## DOM

       When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. The DOM is a tree of objects. For example, consider the following HTML document:
       
<img width="365" alt="image" src="https://user-images.githubusercontent.com/56068905/194291586-7697d775-de6e-4f8b-8a89-fedb2e9cf296.png">

1. add/change/remove HTML elements
2. add/change/remove HTML attributes
3. add/change/remove CSS styles
4. react to HTML events
5. add/change/remove HTML events
       
       
- Get HTML elements by id, e.g., var myElement = document.getElementById("intro");
- Get HTML elements by tag name, e.g., var x = document.getElementsByTagName("p");
- Get HTML elements by class name, e.g., var x = document.getElementsByClassName("intro");
- Get HTML elements by CSS selectors, e.g., var x = document.querySelectorAll("p.intro");
- Get HTML elements by HTML object collections, e.g., document.anchors, document.forms, document.links, etc.
       
|element.innerHTML = “new html content”|Changes the inner HTML of an element|
|-----|-----|
|element.attribute = “new value”|Changes the attribute value of an element|
|element.setAttribute(attribute, value)|Changes the attribute value of an element|
|element.style.property = “new value”|Changes the CSS property of an element|
       
       
  
# Responsive Design

## Show Different Images Depending on Browser Width
       
```
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
       
```
       
## Responsive Text Design
       
```
<h1 style="font-size:10vw;">Responsive Text</h1>

<p style="font-size:5vw;">Resize    
```

## Başka bir örnek
       
```
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.left {
  background-color: #2196F3;
  padding: 20px;
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  background-color: #f1f1f1;
  padding: 20px;
  float: left;
  width: 60%; /* The width is 60%, by default */
}

.right {
  background-color: #04AA6D;
  padding: 20px;
  float: left;
  width: 20%; /* The width is 20%, by default */
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
</head>
<body>

<h2>Media Queries</h2>
<p>Resize the browser window.</p>

<p>Make sure you reach the breakpoint at 800px when resizing this frame.</p>

<div class="left">
  <p>Left Menu</p>
</div>

<div class="main">
  <p>Main Content</p>
</div>

<div class="right">
  <p>Right Content</p>
</div>

</body>
</html>


```
