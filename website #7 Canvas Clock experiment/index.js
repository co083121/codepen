var canvas6 = document.getElementById("canvas6"); // creates canvas object
var clk6 = canvas6.getContext("2d"); // create 2d object for canvas object
var radius6 = canvas6.height / 2; // clock radius based on height
clk6.translate(radius6, radius6); // Remap the (0,0) position (of the drawing object) to the center of the canvas
radius6 = radius6 * 0.9; // reduces clock radius
drawClock();

function drawClock() {
	drawFace(clk6,radius6);
	drawNumbers(clk6,radius6);
	drawTime(clk6,radius6);
}

function drawFace(clk6,radius6) {
	var grad6;
	
	clk6.beginPath();
	clk6.arc(0,0,radius6,0,2*Math.PI); // used to create circles, or parts of circles
	clk6.fillStyle = "white"; // color of clock
	clk6.fill(); // or .stroke to actually draw
	
	grad6 = clk6.createRadialGradient(0 ,0 ,radius6 * 0.95, 0, 0, radius6 * 1.05);
	grad6.addColorStop(0,"#333");
	grad6.addColorStop(.5,"white");
	grad6.addColorStop(1,"#333");
	clk6.strokeStyle = grad6;
	clk6.lineWidth = radius6 * .1;
	clk6.stroke();
	
	clk6.beginPath(); // small center circle
	clk6.arc(0, 0, radius6 * .1, 0, 2 * Math.PI);
	clk6.fillStyle = "#333";
	clk6.fill();
}
function drawNumbers(clk6,radius6) {
	var ang;
	var num;
	clk6.font = radius6 * 0.15 + "px arial";
	clk6.textBaseline = "middle";
	clk6.textAlign = "center";
	for (num=1;num<13;num++) {
		ang = num * Math.PI / 6; // makes 12 pieces
		clk6.rotate(ang);
		clk6.translate(0,-radius6*0.85);
		clk6.rotate(-ang);
		clk6.fillText(num.toString(),0,0);
		clk6.rotate(ang);
		clk6.translate(0,radius6*0.85);
		clk6.rotate(-ang);
	}
}
function drawTime() {
	
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	// hour
	hour = hour%12;
	hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
	drawHand(clk6,hour,radius6*0.05,radius6*0.07);
	// minute
	minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
	drawHand(clk6, minute, radius6*0.8, radius6*0.07);
	// second
	second = (second*Math.PI/30);
	drawHand(clk6, second, radius6*0.9, radius6*0.02);
}
function drawHand(clk6,pos,length,width) {
	clk6.beginPath();
	clk6.lineWidth = width;
	clk6.lineCap = "round";
	clk6.moveTo(0,0);
	clk6.rotate(pos);
	clk6.lineTo(0,-length);
	clk6.stroke();
	clk6.rotate(-pos);
}