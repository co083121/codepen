var count = 0;
function next() {
	document.getElementById("btnnext").disabled = true;
	document.getElementById("roll").disabled = false;
	var array = [
		1,2,3,4
	];
	var len = array.length;
	if (count == len) {
		count = 0;
	}
	var i = 0;
	i = array[count];
	document.getElementById("next").innerHTML = i;
	count++;
	/*
	if (i == count) {
		document.getElementById("pl"+i).style.border = "2px solid red";
	}
	*/
}
function roll() {
	var dice1 = 0;
	var dice2 = 0;
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("dice1").innerHTML = dice1;
	document.getElementById("dice2").innerHTML = dice2;
	document.getElementById("dicetotal").innerHTML = dice1 + dice2;
	if (dice1 === dice2) {
		
		document.getElementById("btnnext").disabled = true;
		document.getElementById("roll").disabled = false;
	} else {
		document.getElementById("btnnext").disabled = false;
		document.getElementById("roll").disabled = true;
	}
}