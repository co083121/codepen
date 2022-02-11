var sec1 = document.getElementById("sec1").value;
var sec2 = document.getElementById("sec2").value;
var sec3 = document.getElementById("sec3").value;
var sec4 = document.getElementById("sec4").value;
function enter() {
	console.log(sec1);
}
var colorWell;
var defaultColor = "#00f";
window.addEventListener("load",startup,false);
function startup() {
	colorWell = document.querySelector("#colorWell");
	colorWell.value = defaultColor;
	colorWell.addEventListener("input",updateFirst,false);
	colorWell.addEventListener("change",updateAll,false);
	colorWell.select();
}
function updateFirst() {
	var p = document.querySelector("p");
	if (p) {
		p.style.color = event.target.value;
	}
}
function updateAll(event) {
document.querySelectorAll("p").forEach(function(p) {
	p.style.color = event.target.value;
});
}
let p = document.getElementsByClassName("item");
//for (let x = 0;x < p.length; x++) {p[x].style.backgroundColor = "dodgerblue";}console.log(p[0].innerText);
let menu = document.getElementById("menu");
let items = menu.getElementsByClassName("item");
let data = [].map.call(items, item => item.textContent);
document.getElementById("demo").innerHTML = data;
console.log(data);