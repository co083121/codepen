/*
			first div
*/
var div1 = document.createElement("div");
div1.setAttribute("class", "barclock");
div1.setAttribute("id", "hour");
div1.innerHTML = "hours";
document.body.appendChild(div1);
/*
			second div
*/
var div2 = document.createElement("div");
div2.setAttribute("id", "minute");
div2.setAttribute("class", "barclock");
div2.innerHTML = "minutes";
document.body.appendChild(div2);
/*
			third div
*/
var div3 = document.createElement("div");
div3.setAttribute("id", "second");
div3.innerHTML = "seconds";
div3.setAttribute("class", "barclock");
document.body.appendChild(div3);

var hourbar = document.getElementById('hour');
var minutebar = document.getElementById('minute');
var secondbar = document.getElementById('second');

setInterval(function(){
	var today = new Date()
	var curhour = today.getHours()
	var curminute = today.getMinutes()
	var cursecond = today.getSeconds()
	hourbar.style.setProperty('--hourpct',curhour/24)
	minutebar.style.setProperty('--minutepct',curminute/60)
	secondbar.style.setProperty('--secondpct',cursecond/60)
}, 1000);