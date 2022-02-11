const ss = document.getElementById('sec');
const mm = document.getElementById('min');
const hh = document.getElementById('hour');

setInterval(updateClock,1000);

function updateClock() {
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = date.getMinutes() + sec / 60;
	let hour = date.getHours() + min / 12;
	
	ss.style.transform = "rotate(" + (sec * 360) + "deg)";
	mm.style.transform = "rotate(" + (min * 360) + "deg)";
	hh.style.transform = "rotate(" + (hour * 360) + "deg)";
}
updateClock();