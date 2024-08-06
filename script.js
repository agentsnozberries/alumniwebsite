/*
    Author: Connor Fallon
    File Name: script.js
*/

//Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionsSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    // var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        // logo.style.display = "block";
    }
    else {
        menu.style.display = "block";
        // logo.style.display = "none";
    }
}
