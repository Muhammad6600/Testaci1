// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");
// console.log(myNodelist);
var i;
for (i = 0; i < myNodelist.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    // console.log(div);
    div.style.display = "none";
  }
}



 

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
console.log(list)
list.addEventListener('click', function(ev) {
  // console.log(ev.target.classList)
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

 

// Create a new list item when clicking on the "Add" button

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("item").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("This field cannot be empty!");
  } else {
    document.getElementById("list").appendChild(li);
    localStorage.setItem("item",inputValue);
    // localStorage.getItem();
    // localStorage.removeItem();
  }
  document.getElementById("item").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }

  }

}
function appValue(){
  var li = document.createElement("li");
  var inputValue = localStorage.getItem("item");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  list.appendChild(li)
}
appValue()