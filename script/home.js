// DOM Variables
var menuButton = document.getElementById("menuIcon");
var menuCancelButton = document.getElementById("menuCancel");
var menu = document.getElementsByTagName("nav")[0];

menuButton.addEventListener("click", function() {
    menu.style.visibility = "visible";
    menuButton.style.visibility = "hidden";
}, false);

menuCancelButton.addEventListener("click", function() {
    menu.style.visibility = "hidden";
    menuButton.style.visibility = "visible";
}, false);