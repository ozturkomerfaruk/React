//document.getElementById(id)
//document.getelementsByTagName(name)
//document.getElementsByClassName(name)
//document.getElementById("demo").innerHTML = "Hello World!";
//element.innerHTML = new html content
//element.attribute = new value
//element.style.property = new style
//element.setAttribute(attribute, value)

//document.createElement(element)
//document.removeChild(element)
//document.appendChild(element)
//document.replaceChild(new, old)
//document.write(text)

//document.getElementById(id).onclick = function () { }

//document.anchors ---> all <a>
//document.baseURI ---> base URI
//document.body
//document.cookie
//document.doctype
//document.documentElement
//document.documentURI
//document.domain
//document.embeds
//document.forms
//document.head
//document.images
//document.implementation
//document.inputEncoding
//document.lastModified
//document.links
//document.readyState
//document.referrer
//document.scripts
//document.title
//document.URL

const baslik = document.getElementById("baslik");
baslik.innerHTML = "asd"
document.getElementById("text2").innerHTML = "asd"

document.getElementById("text").innerHTML = "asaddj"

var e = document.querySelector("#text2")
e.style.color = "red"

//document.getElementById("image").src = "landscape.jpg";

document.getElementById("baslik").innerHTML = "Date : " + Date();

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out")
        return false;
    }
}

function checkGuess() {
    let number = document.getElementById("editTextNumber").value
    if (number >= 0 && number <= 10) {
        document.getElementById("checkGuess1-10").innerHTML = "Valid"
    } else {
        document.getElementById("checkGuess1-10").innerHTML = "Not Valid"
        return false
    }
}


document.getElementById("text").style.color = "blue"


function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


function changeDeneme(id) {
    id.innerHTML = "HOOP"
}

function upperCase() {
    document.getElementById("fdeneme").value = document.getElementById("fdeneme").value.toLowerCase();
}

function mOver(id) {
    id.innerHTML = "asd"
}

function mOut(id) {
    id.innerHTML = "back"
}


function Asagi(id) {
    id.style.backgroundColor = "blue"
    id.innerHTML = "asdk"
}

function Yukari(id) {
    id.style.backgroundColor = "purple"
    id.innerHTML = "12312"
}

document.getElementById("textChange").addEventListener("click", display);

function display() {
    document.getElementById("textChange").innerHTML = "Ömer"
}


function cikisYap() {
    window.close()
}