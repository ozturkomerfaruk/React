# CSS

## Inline CSS

```
<body>
    <h1 style="background-color: black; color: white">This is a heading</h1>
    <p style="color: red; font-family: Arial, Helvetica, sans-serif">This is a paragraph.</p>
</body>
```
## Internal CSS
```
<style>
h1 {
  background-color: black;
  color: white;
}

p {
  color: red; 
  font-family: Arial, Helvetica, sans-serif;
}
</style>
```

## External CSS

```
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
</body>
```

# CSS Simple Selectors

## The CSS Universal Selector

The universal selector (*) selects all HTML elements on the page. The CSS rule below will affect every HTML element on the page: 

```
* {
  text-align: center;
  color: blue;
}
```

## The CSS HTML element Selector

```
p {
  text-align: center;
  color: red;
}
```

## The CSS id Selector

```
#para1 {
  text-align: left;
  color: blue;
}
```

## The CSS class Selector

```
.center {
  text-align: center;
  color: green;
}
```

### Kısa bir Not

Mesela p tagı içerisinde olan ama class ismine sahip olanlar için;

```
p.center {
  text-align: center;
  color: red;
}
```

## Grup halinde

```
h1, h2, p {
  text-align: center;
  color: red;
}
```

|Selector|Example|Description|
|---|-----|---|
|*|*|Selects all elements|
|#id|firstname|Selects the element with id="firstname"|
|.class|.intro|Selects all elements with class="intro"|
|element|p|Selects all <p elements|
|element, element,..|div,p|Selects all <div elements and all <p elements|

# Combinator Selectors

## Descendant Selector

div'denra p gelenler için mesela şöyle oluşturulur. İlk çocuk için geçerli

```
div p {
  background-color: yellow;
}
}
```

## Child Selector

divden sonra gelen tüm p ler için. Tüm çocuklar için geçerli

```
div > p {
  background-color: yellow;
}
```

## Adjacent Sibling Selector

Çocuk farketmeden, divden sonra p varsa ağaçta onun için geçerli

## General Sbling Selector

```
div ~ p {
  background-color: yellow;
}
```

### Summary of CSS Combinator Selectors

|Selector|Example|Example Description|
|---|------|---|
|element element|div p|Selects all <p elements inside <div elements|
|element>element|div > p|Selects all <p elements where the parent is a <div element|
|element+element|div + p|Selects all <p elements that are placed immediately after <div elements|
|element1~element2|p ~ ul|Selects every <ul element that are preceded by a <p element|

# CSS Pseudo-classes

- hover effect
- visidet, unvisited effect
- focus effect

The syntax of pseudo-classes

```
selector:pseudo-class {
    property:value;
}
```
## Anchor Pseudo-classes

```
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

## Anchor Pseudo-classes

Birden fazla çocuk içerisinde ilkine ulaşma sadece

```
p i:first-child {
  color: blue;
}

<body>

<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>

</body>

```

# CSS Pseudo-elements

## The ::first-line Pseudo-element

```
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

## The ::first-letter Pseudo-element

```
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

## The ::before Pseudo-element

```
h1::before {
  content: url(smiley.gif);
}
```

## The ::after Pseudo-element

```
h1::after {
  content: url(smiley.gif);
}
```

## The ::selection Pseudo-element

```
::selection {
  color: red;
  background: yellow;
}
```

```
::selection {
    color: gold;
    background-color: red;
  }

p::selection {
    color: white;
    background-color: blue;
  }
```

<img width="280" alt="image" src="https://user-images.githubusercontent.com/56068905/194702214-50702408-4676-424b-8398-28905d8a4675.png">


# CSS Attribute Selectors

## CSS [attribute] Selector

### CSS [attribute] Selector

```
a[target] {
  background-color: yellow;
}
```

### CSS [attribute="value"] Selector

```
[title~="flower"] {
  border: 5px solid yellow;
}
```

### CSS [attribute~="value"] Selector

```
[class|="top"] {
  background: yellow;
}
```

### CSS [attribute|="value"] Selector

```
[class^="top"] {
  background: yellow;
}
```

### CSS [attribute^="value"] Selector

```
a[target] {
  background-color: yellow;
}
```

### CSS [attribute$="value"] Selector

```
[class$="test"] {
  background: yellow;
}
```

### CSS [attribute*="value"] Selector

```
[class*="te"] {
  background: yellow;
}
```

|Selector|Example|Example Description|
|---|------|---|
|[attribute]|[target]|Selects all elements with a target attribute|
|[attribute=value]|[target=_blank]|Selects all elements with target="_blank"|
|[attribute~=value]|[title~=flower]|Selects all elements with a title attribute containing the word "flower"|
|[attributeI=value]|[lang I=en]|Selects all elements with a lang attribute value starting with "en"|
|[attribute^=value]|a[href^="https"]|Selects every <a element whose href attribute value begins with "https"|
|[attribute$=value]|a[href$=".pdf"]|Selects every <a element whose href attribute value ends with ".pdf"|
|[attribute*=value]|a[href*="w3schools"]|Selects every <a element whose href attribute value contains the substring "w3schools"|

<img width="517" alt="image" src="https://user-images.githubusercontent.com/56068905/195075095-f05ce1f0-8bfb-4936-9451-2222e433f297.png">

<img width="515" alt="image" src="https://user-images.githubusercontent.com/56068905/195075112-e1d354b7-0d02-4fe6-9abb-4feb8c7d207f.png">

<img width="522" alt="image" src="https://user-images.githubusercontent.com/56068905/195075126-4187e1db-4d44-4c15-830e-5028cb81fc09.png">

<img width="524" alt="image" src="https://user-images.githubusercontent.com/56068905/195075141-a3503727-337c-4362-9e9c-1c414b324a52.png">


## How different styles are applied: Cascading Order

1.	Inline style (inside an HTML element)
2.	External and internal style sheets (in the head section)
3.	Browser default

```<p class="class1 class2">This paragraph belongs to two classes.</p> ```

```
.class1 {
    text-align: center;
    color: green;
}

.class2 {
    color: red;
    font-size: 2em;  /* 2x16=32px */
}
```

## Margins, Borders, and Padding

<img width="386" alt="image" src="https://user-images.githubusercontent.com/56068905/195075589-1f9675f2-bd06-4e74-9d57-14ac16c82232.png">

* Content - The content of the box, where text and images appear
* Padding - Clears an area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - Clears an area outside the border. The margin is transparent

* auto - This is default. The browser calculates the height and width
* length - Defines the height/width in px, cm, “em” etc.

* % - Defines the height/width in percent of the containing block

* initial - Sets the height/width to its default value

* inherit - The height/width will be inherited from its parent value

```
div {
    width: 320px;
    border: 15px solid red;
    padding: 10px;
    margin: 0px;
}
```

## Text Formatting

* a color name - like "red"

* a HEX value - like "#ff0000"

* an RGB value - like "rgb(255,0,0)"

Also,

* text-align




