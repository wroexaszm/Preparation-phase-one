var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

function searchTasks() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  
  for (var i = 0; i < li.length; i++) {

    var txtValue = li[i].textContent || li[i].innerText;

    txtValue = txtValue.replace(/×/g, '').trim();
    
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function toggleSearch() {
  var searchContainer = document.getElementById("searchContainer");
  var searchInput = document.getElementById("searchInput");
  
  searchContainer.classList.toggle("active");
  
  if (searchContainer.classList.contains("active")) {
    setTimeout(function() {
      searchInput.focus();
    }, 300);
  } else {
    searchInput.value = "";

    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
  }
}

document.getElementById("myInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    newElement();
  }
});