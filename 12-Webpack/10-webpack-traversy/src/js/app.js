require('../css/style.css');
let people = require('./people.js');
let $ = require('jquery');
let capital = require("./capital.js");

$.each(people, function(key, value){
  $('body').append('<h1>'+value.name+'</h1>');
});

$('body').append('<h1>'+capital('hello world')+'</h1>')
