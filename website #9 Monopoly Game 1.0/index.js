var count = 0;
function next() {
	var array = [1,2,3,4];
	var len = array.length;
	if (count == len) {
		count = 0;
	}
	var i = 0;
	i = array[count];
	document.getElementById("abc").innerHTML = i;
	count++;
	console.log("pl"+i);
	if (i == count) {
		
		document.getElementById("pl"+i).style.border = "2px solid red";
	}
		//document.getElementById("pl"+i).style.border = "none";
	
}
/*
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
 justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
 align-items:stretch | flex-start | flex-end | center | baseline;
*/

/* 
order: <integer>; default is 0  
flex-grow: <number>; default 0
flex-shrink: <number>; default 1
flex-basis: <length> | auto; default auto
flex: none | <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> default 0 1 auto
align-self: auto | flex-start | flex-end | center | baseline | stretch;
*/
function dice(min, max) {
	return Math.floor(Math.random() * max) + min;
}
/*
0.0 * (6-1) + 1 = 1
0.1 * (6-1) + 1 = 1.5
0.2 * (6-1) + 1 = 2
0.3 * (6-1) + 1 = 2.5
0.4 * (6-1) + 1 = 3
0.5 * (6-1) + 1 = 3.5
0.6 * (6-1) + 1 = 4
0.7 * (6-1) + 1 = 4.5
0.8 * (6-1) + 1 = 5
0.9 * (6-1) + 1 = 5.5
*/