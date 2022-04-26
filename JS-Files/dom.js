// document.getElementById("test").innerHTML = "Hello World";
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByClassName("test"))
// console.log(document.getElementsByClassName("test"))

var v = document.querySelectorAll("p.class1")
v[1].innerHTML ="node value"

// var d = new Date();
// document.getElementById("test").innerHTML = d

var x = document.getElementById("test");
x.innerHTML = "Hello World"

function myFunc(){
    x.style.color = "blue";
}

var y = document.getElementById("myImg");
function funcOn(){
    y.src = "../Images/pic_bulbon.gif"
}

function funcOff(){
    y.src = "../Images/pic_bulboff.gif"
}