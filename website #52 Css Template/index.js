// document.getElementById("demo").innerHTML 
// document.getElementsByTagName(name)
// document.getElementsByClassName(name)
/*
element.innerHTML 	Change the inner HTML of an element
element.attribute	Change the attribute value of an HTML element
element.style.property  	Change the style of an HTML element
element.setAttribute(attribute, value)
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
document.getElementById(id).onclick = function(){code}
^Adding event handler code to an onclick event^
*/
var header = document.createElement("header");
header.style.display = "grid";
header.style.border = "1px solid white";
header.style.width = "100%";
header.style.background = "red";
header.style.color = "white";
header.style.gridArea = "header";
header.innerHTML = "header";
document.body.appendChild(header);
var nav = document.createElement("nav");
nav.style.gridArea = "nav";
nav.style.border = "1px solid black";
document.body.appendChild(nav);
var main = document.createElement("main");
main.style.gridArea = "main";
document.body.appendChild(main);