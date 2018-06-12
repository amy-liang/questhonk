// DOM Variables
var usernameInput = document.getElementById("usernameInput");
var usernameIconList = document.getElementsByClassName("usernameIcon");
var passwordInput = document.getElementById("passwordInput");
var passwordIconList = document.getElementsByClassName("passwordIcon");
var loginButton = document.getElementsByClassName("loginButton").item(0);

// prevents chrome bug of firing css transitions onload
window.onload = function(){
    document.body.classList.remove("preload");
    
    usernameInput.value = "";
    passwordInput.value != "";
};

// Animation functions
function hoverOn(iconList){
    iconList.item(0).classList.add("iconHover");
    iconList.item(1).classList.add("iconHover");
}

function hoverOff(iconList){
    iconList.item(0).classList.remove("iconHover");
    iconList.item(1).classList.remove("iconHover");
}

// Username Input Field Events
usernameInput.addEventListener("focus", function() {
    hoverOn(usernameIconList);
}, false);

usernameInput.addEventListener("focusout", function() {
    if (usernameInput.value == "") {
        hoverOff(usernameIconList);
    }
}, false);

usernameInput.addEventListener("mouseover", function() {
    hoverOn(usernameIconList);
}, false);

usernameInput.addEventListener("mouseleave", function() {
    if (usernameInput != document.activeElement && usernameInput.value == "") {
        hoverOff(usernameIconList);
    }
}, false);

// Password Input Field Events
passwordInput.addEventListener("focus", function() {
    hoverOn(passwordIconList);
}, false);

passwordInput.addEventListener("focusout", function() {
    if (passwordInput.value == "") {
        hoverOff(passwordIconList);
    }
}, false);

passwordInput.addEventListener("mouseover", function() {
    hoverOn(passwordIconList);
}, false);

passwordInput.addEventListener("mouseleave", function() {
    if (passwordInput != document.activeElement && passwordInput.value == "") {
        hoverOff(passwordIconList);
    }
}, false);

// Log In Button Visibility Triggers
usernameInput.addEventListener("input", function(){
    if (passwordInput.value != "" && usernameInput.value != "") {
        loginButton.classList.add("fadeIn");
        loginButton.href = "pages/home.html";
        loginButton.style.cursor = "pointer";
    } else {
        loginButton.classList.remove("fadeIn");
        loginButton.href = "javascript:void(0)";
        loginButton.style.cursor = "default";
    }
}, false);

passwordInput.addEventListener("input", function() {
    if (passwordInput.value != "" && usernameInput.value != "") {
        loginButton.classList.add("fadeIn");
        loginButton.href = "pages/home.html";
        loginButton.style.cursor = "pointer";
    } else {
        loginButton.classList.remove("fadeIn");
        loginButton.href = "javascript:void(0)";
        loginButton.style.cursor = "default";
    }
}, false);