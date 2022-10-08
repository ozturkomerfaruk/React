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
|element|p|Selects all <p> elements|
|element, element,..|div,p|Selects all <div> elements and all <p> elements|







