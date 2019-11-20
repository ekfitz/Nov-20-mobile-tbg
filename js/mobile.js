var menu = document.getElementById("menu");
var logo1 = document.getElementById("logo1");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var b1 = document.getElementById("b1");

logo1.style.top = "2%";
logo1.style.fontSize = "5em";
nav1.style.top = "-5%";
nav2.style.top = "-5%";
nav3.style.top = "-5%";


logo1.innerHTML = "t b g";
nav1.innerHTML = "Press";
nav2.innerHTML = "Studio";
nav3.innerHTML = "About";
t1.innerHTML = "Something Motivational Right Here";
t2.innerHTML = "Maybe some smaller text here to describe what happens when you push the button. It can be in a different font";
b1.innerHTML = "Start Today";
menu.onclick = showMenu;

function showMenu() {
  if (nav1.style.top == "-5%") {
    nav1.style.top = "2%";
    nav2.style.top = "2%";
    nav3.style.top = "2%";
    logo1.style.fontSize = "2em";
    logo1.style.top = "0.5%";
    menu.style.transform = "rotate(-90deg)";
  } else {
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";
    logo1.style.fontSize = "5em";
    logo1.style.top = "2%";
    menu.style.transform = "rotate(0deg)";

  }
}

// new logo position will be top: 0.5%, left: 3%,
// font size: 2em;
