function four() {
	var input = document.getElementById("demo");
	input.value += 4;
};
function five() {
	var input = document.getElementById("demo");
	input.value += 5;
};
/*
function equals() {
	var input = document.getElementById("demo");
	input.value += "";
};
*/
function erase() {
	var input = document.getElementById("demo");
	input.value = "";
}
function clicker() {
	var input = document.getElementById("username");
	input.className = "center_black";
}
function change() {
	document.getElementById("username").className = "border";
}


var header = document.createElement("header");
header.style.backgroundColor = "#456";
header.style.height = "100px";
var nav = document.createElement("nav");
nav.style.height = "50px";
nav.style.backgroundColor = "#654";
var ul = document.createElement("ul");
var main = document.createElement("main");
main.style.backgroundColor = "#444";
main.style.height = "150px";
var footer = document.createElement("footer");
footer.style.height = "75px";
footer.style.backgroundColor = "#777";
document.body.appendChild(header);
document.body.appendChild(nav);
document.body.appendChild(main);
document.body.appendChild(footer);
