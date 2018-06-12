// DOM Variables
const menuButton = document.getElementById("menuIcon");
const menuCancelButton = document.getElementById("menuCancel");
const menu = document.getElementsByTagName("nav")[0];

menuButton.addEventListener("click", function() {
    menu.style.visibility = "visible";
    menuButton.style.visibility = "hidden";
}, false);

menuCancelButton.addEventListener("click", function() {
    menu.style.visibility = "hidden";
    menuButton.style.visibility = "visible";
}, false);