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

```

## 4.	Links

```
<a href="url">link text</a>
<a href="http://google.com">Go to google</a>

<a href=https://google.com target="_blank">Go to google</a>
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



