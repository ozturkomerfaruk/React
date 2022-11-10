$(document).ready(function(){
  // jQuery methods go here..
  $("#test").css("color", "red");   // Change the color of element with id "test" to red

  $("p").css("font-size", "20px");  // Change the font-size of all "p" elements to 20px
  $("p").css("color", "blue");      // Change the color of all "p" elements to blue
  
  $(".test").css("border", "2px solid black");  // Select all elements with class="test" and add a border

  $("ul li:even").css("background-color", "#ddd"); // Select all even li's and change their background color
  $("ul li:odd").css("background-color", "#aaa"); // Select all odd li's and change their background color

  // Event handling using jQuery
  $("#btn1").click(function(){
      $("#btnText").toggle();        // Toggle text with id="btnText" when #btn1 is pressed
  });

  $("#box1").on("click", function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
  });

  $("#box1").on("mouseenter", function(){
      $(this).css("background-color", "lightgreen");
      $(this).css("color", "black");
    });

  $("#box1").on("mouseleave", function(){
    $(this).css("background-color", "aqua");
    $(this).css("color", "black");
  });
});
