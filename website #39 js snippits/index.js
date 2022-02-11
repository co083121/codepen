/*
addEventListener('mousedown',function(event) {
	if (event.which == 1)
		document.getElementById('me').innerHTML = "left button";
	else if (event.which == 2)
		document.getElementById('me').innerHTML = "middle button";
	else if (event.which == 3)
		document.getElementById('me').innerHTML = "right button";
	});
*/
//	addEventListener('keydown',function(e){
//	document.getElementById('metoo').innerHTML = "You clicked: " + e.which;
//	});
document.body.addEventListener('click',function(event) {
	if (event.target.nodeName == 'BUTTON')
		console.log("Clicked",event.target.textContent);
		document.getElementById('buttons').innerHTML = event.target.textContent;
});
addEventListener("keydown", function(event) {
	if (event.keyCode == 86)
		document.body.style.background = "violet";
});
addEventListener("keyup", function(event) {
	if (event.keyCode == 86)
		document.body.style.background = "";
});