var menu = document.getElementById("menu");
var logo1 = document.getElementById("logo1");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var b1 = document.getElementById("b1");
var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");
var b2 = document.getElementById("b2");
var info1 = document.getElementById("info1");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var rocket1 = document.getElementById("rocket1");

logo1.style.fontSize = "2em";
logo1.style.top = "0.5%";
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
b2.innerHTML = "UX DESIGN";
arrow1.src = "images/Arrow.png";
arrow2.src = "images/Arrow.png";
info1.src = "images/info.png";
t3.innerHTML = "UI DESIGN";
t4.innerHTML = "Brand & Product Consultation";
rocket1.src = "images/rocket.png";
menu.onclick = showMenu;


function showMenu() {
  if (nav1.style.top == "-5%") {
    nav1.style.top = "2.5%";
    nav2.style.top = "2.5%";
    nav3.style.top = "2.5%";
    menu.style.transform = "rotate(-90deg)";
  } else {
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";
    menu.style.transform = "rotate(0deg)";
  }
}
