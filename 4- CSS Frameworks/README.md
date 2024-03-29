# CSS Frameworks

This week we will look into 4 very popular CSS frameworks: Bootstrap, Materialize CSS, Bulma CSS, Tailwind CSS.

<img width="616" alt="image" src="https://user-images.githubusercontent.com/56068905/198584549-a22f2a60-d9a2-44e4-8d34-621d34ad66e5.png">

<img width="716" alt="image" src="https://user-images.githubusercontent.com/56068905/200769518-89834a46-ef6b-47e0-9422-06c8ebbf125f.png">

```
<div class="container border">
<div class="container my-3 bg-dark text-white">
<div class="container-fluid my-3 bg-primary text-white">
<div class="container-md my-3 bg-warning text-white">
```

<img width="717" alt="image" src="https://user-images.githubusercontent.com/56068905/200769733-599e9ab5-ae4f-4639-9ecc-3fe59cf93c0d.png">

```
<div class="jumbotron text-center">
<div class = "container">
    <div class="row">
      <div class="col-sm-6 col-md-3">
      <div class="col-sm-6 col-md-3">
      <div class="col-sm-6 col-md-3">
      <div class="col-sm-6 col-md-3">
```

<img width="400" alt="image" src="https://user-images.githubusercontent.com/56068905/200770220-8cc2ce18-e034-400a-9a27-22b008f7ffb8.png">  <img width="400" alt="image" src="https://user-images.githubusercontent.com/56068905/200770278-fffcdf56-c7a1-4e75-b7df-a9eda7b20e8b.png">. <img width="400" alt="image" src="https://user-images.githubusercontent.com/56068905/200770337-b23a2c68-cb75-48e5-b964-6a31c4e17143.png">

```
<div class="container header">
<div class = "container">
    <div class="row">
      <div class="menu col-sm-3">
      <div class="content col-sm-9 col-md-6">
      <div class="aside col-sm-12 col-md-3">
<div class="container footer">

.menu {
      grid-row: 1;
      grid-column: 1/1;
    }
.aside {
      grid-row: 3;
      grid-column: 1/1;
      background-color: #33b5e5;
      padding: 15px;
      color: #ffffff;
      text-align: center;
      font-size: 14px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .footer {
      background-color: #0099cc;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      padding: 15px;
    }
```

<img width="575" alt="image" src="https://user-images.githubusercontent.com/56068905/200780563-f71bca59-9411-44e9-a5f4-9e5162943d55.png">

```
<h1 class="page-header">
<p class="lead">
<p class="font-weight-bold">
<p class="font-italic">
<p class="text-left text-lowercase">
<p class="text-center text-uppercase">
<p class="text-right text-capitalize">
```

<img width="639" alt="image" src="https://user-images.githubusercontent.com/56068905/200780912-f4c56a6b-a204-458d-b4b1-4095f3313e1b.png">

## Colors

```
<p class="bg-primary text-white">asd</p>
<p class="bg-success text-white">asd</p>
<p class="bg-info text-white">asd</p>
<p class="bg-warning text-white">asd</p>
<p class="bg-danger text-white">asd</p>
<p class="bg-secondary text-white">asd</p>
<p class="bg-dark text-white">asd</p>
<p class="bg-light text-dark">asd</p>
```

## Jumbotron

```
<div class="jumbotron jumbotron-fluid">
	  <div class="container">
		<h1>Bootstrap Tutorial</h1>
		<p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
	  </div>
</div>
```

```
<img src="../images/newyork.jpg" class="rounded" alt="New York" width="304" height="236">

<img src="../images/newyork.jpg" class="rounded-circle" alt="New York" width="304" height="236">

<img src="../images/newyork.jpg" class="img-thumbnail" alt="CNew York" width="100" height="80">
```

##  List

```
<li class="list-group-item">First item</li>
<li class="list-group-item active">Second item</li>
<li class="list-group-item">Third item</li>
```     

## Table 

table klasorunde detaylar mevcut

## Buttons

buton klasorunde detaylar mevcut

## Forms

forms klasorunde detaylar mevcut

## dropdown menu

dropdown klasorunde detaylar mevcut

##	Tabbar

tab klasorunde detaylar mevcut

##	avigation bar

navbar klasorunde detaylar mevcut

##	alerts

alerts klasorunde detaylar mevcut

##	 Carousel, haber sitelerinde vs. resim kaydırma 

ilgili klasorde detaylar mevcut

##	pop up ekran açma

modals klasorunde detaylar mevcut

##	badges

ilgili klasorde detaylar mevcut

##	progress bar ve çeşitleri

ilgili klasorde detaylar mevcut

##	spinner, Circle Waiting 

ilgili klasorde detaylar mevcut


#	Float

<img width="605" alt="image" src="https://user-images.githubusercontent.com/56068905/200788121-f1c4d85b-60d3-4e47-988b-f571801398e9.png">


```
<div class="container clearfix">
        <div class="float-right">Floated to the right 1</div>
        <div class="float-right">Floated to the right 2</div>
        <div class="float-left">Floated to the left 1</div>
        <div class="float-left">Floated to the left 2</div>
</div>

<div class="container d-flex flex-row">
        <div class="flex-fill bg-primary">Element 1</div>
        <div class="flex-fill bg-success">Element 2</div>
        <div class="flex-fill bg-warning">Element 3</div>
</div>
    
<div class="container d-flex flex-column">
        <div class="flex-fill bg-primary">Element 1</div>
        <div class="flex-fill bg-success">Element 2</div>
        <div class="flex-fill bg-warning">Element 3</div>
</div>    
```


