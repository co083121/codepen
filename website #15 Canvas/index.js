	window.onscroll = function(){
		// height scrolled from the top
		var scrolled_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		/* total scrollable height */
		var to_scroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight)
		/* percentage of height scrolled */
		var horizontal_width = (scrolled_top/to_scroll)*100;
		/* assigning calculated width to progress bar */
		document.getElementById('horizontal_scroll').style.width = horizontal_width + '%';
	}
	var table = document.createElement("table");
	for (var i = 1; i < 9; i++) {
		var tr = document.createElement('tr');
		for (var j = 1; j < 9; j++) {
			var td = document.createElement('td');
			if (i%2 == j%2) {
				td.className = "white";
				} else {
				td.className = "black";
			}
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
////////////////////////////////////////
	//					#1
	var canvas1 = document.createElement("canvas");
	var ctx1 = canvas1.getContext("2d");
	canvas1.width = 1000; 
	canvas1.height = 300;
	canvas1.style.background = "darkkhaki";
	document.body.appendChild(canvas1);
//					#2
	var canvas2 = document.createElement("canvas");
	var ctx2 = canvas2.getContext("2d");
	canvas2.width = 1000; 
	canvas2.height = 300;
	canvas2.style.background = "darkkhaki";
	document.body.appendChild(canvas2);
//					#3
	var canvas3 = document.createElement("canvas");
	var ctx3 = canvas3.getContext("2d");
	canvas3.width = 1000; 
	canvas3.height = 300;
	canvas3.style.background = "darkkhaki";
	document.body.appendChild(canvas3);
//					#4
	var canvas4 = document.createElement("canvas");
	var ctx4 = canvas4.getContext("2d");
	canvas4.width = 1000; 
	canvas4.height = 300;
	canvas4.style.background = "darkkhaki";
	document.body.appendChild(canvas4);
//					#5
	var canvas5 = document.createElement("canvas");
	var ctx5 = canvas5.getContext("2d");
	canvas5.width = 1000; 
	canvas5.height = 300;
	canvas5.style.background = "darkkhaki";
	document.body.appendChild(canvas5);
//					#6
	var canvas6 = document.createElement("canvas");
	var ctx6 = canvas6.getContext("2d");
	canvas6.width = 1000; 
	canvas6.height = 300;
	canvas6.style.background = "darkkhaki";
	document.body.appendChild(canvas6);
//					#7
	var canvas7 = document.createElement("canvas");
	var ctx7 = canvas7.getContext("2d");
	canvas7.width = 1000; 
	canvas7.height = 300;
	canvas7.style.background = "darkkhaki";
	document.body.appendChild(canvas7);
//					#8
	var canvas8 = document.createElement("canvas");
	var ctx8 = canvas8.getContext("2d");
	canvas8.width = 1000; 
	canvas8.height = 300;
	canvas8.style.background = "darkkhaki";
	document.body.appendChild(canvas8);
//					#9
	var canvas9 = document.createElement("canvas");
	var ctx9 = canvas9.getContext("2d");
	canvas9.width = 1000; 
	canvas9.height = 300;
	canvas9.style.background = "darkkhaki";
	document.body.appendChild(canvas9);
//					#10
	var canvas10 = document.createElement("canvas");
	var ctx10 = canvas10.getContext("2d");
	canvas10.width = 1000; 
	canvas10.height = 300;
	canvas10.style.background = "darkkhaki";
	document.body.appendChild(canvas10);
//					#11
	var canvas11 = document.createElement("canvas");
	var ctx11 = canvas11.getContext("2d");
	canvas11.width = 1000; 
	canvas11.height = 300;
	canvas11.style.background = "darkkhaki";
	document.body.appendChild(canvas11);
//					#12
	var canvas12 = document.createElement("canvas");
	var ctx12 = canvas12.getContext("2d");
	canvas12.width = 1000; 
	canvas12.height = 300;
	canvas12.style.background = "darkkhaki";
	document.body.appendChild(canvas12);
////////////////////////////////////////
	
	ctx1.beginPath();
	ctx1.arc(50, 50, 50, 0, Math.PI * .5);
	ctx1.stroke();
	ctx1.beginPath();
	ctx1.arc(150, 50, 50, 0, Math.PI * 1);
	ctx1.stroke();
	ctx1.beginPath();
	ctx1.arc(250, 50, 50, 0, Math.PI * 1.5);
	ctx1.stroke();
	ctx1.beginPath();
	ctx1.arc(350, 50, 50, 0, Math.PI * 2);
	ctx1.stroke();
// line				ctx2
	ctx2.moveTo(150,75);		// starting point
	ctx2.lineTo(200,200);	// ending point
	ctx2.stroke();
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// draw shapes		ctx3
	for (let i = 0; i<= 3; i++) {
		for (let j = 0; j <= 2; j++) {
			ctx3.beginPath();
			let x = 25 + j * 50; // x coordinate
			let y = 25 + i * 50; // y coordinate
			let radius = 20; // arc radius
			let startAngle = 0; // starting point on circle
			let endAngle = Math.PI + (Math.PI * j) / 2; // end point on circle
			let ccw = i % 2 === 1; // anticlockwise

			ctx3.arc(x,y,radius,startAngle,endAngle,ccw);
			if (i > 1) {
				ctx3.fill();
				} else {
					ctx3.stroke();
			}
		}
	}
//					ctx4
// https://www.w3schools.com/graphics/canvas_drawing.asp
// create gradients
	var grd = ctx4.createLinearGradient(0,0,200,0);
	grd.addColorStop(0, "red");
	grd.addColorStop(1, "white");
	ctx4.fillStyle = /*"#FF0000"*/ grd;
	ctx4.fillRect(10, 10, 150, 75);
//					ctx5
//many different shapes
	ctx5.fillRect(10, 10, 20, 20);
	ctx5.fillRect(70, 30, 20, 20);

	ctx5.fillStyle= "red";
	ctx5.fillRect(50, 50, 20, 40);
	ctx5.strokeStyle="blue";
	ctx5.strokeRect(100,75,50,50);
	ctx5.font="20px Arial";
	ctx5.fillText("Hello", 10, 50);
	ctx5.strokeText("Good", 150, 110);
	ctx5.beginPath();                         // Start drawing something
	ctx5.arc(150, 150, 50, 0, Math.PI * 2);   // Make it a circle
	ctx5.stroke();                            // Outline an outline
	function drawCircle(){
		ctx5.beginPath();
		ctx5.arc(750, 150, 10, 0, Math.PI * 2);
		ctx5.stroke();
	}/*
	ctx5.beginPath();
	ctx5.arc(750, 150, 10, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath();
	ctx5.arc(750, 150, 20, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath();
	ctx5.arc(750, 150, 30, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath();
	ctx5.arc(750, 150, 40, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath();
	ctx5.arc(750, 150, 50, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath()
	ctx5.arc(750, 150, 60, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath()
	ctx5.arc(750, 150, 70, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath()
	ctx5.arc(750, 150, 80, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath()
	ctx5.arc(750, 150, 90, 0, Math.PI * 2);
	ctx5.stroke();
	ctx5.beginPath()
	ctx5.arc(750, 150, 100, 0, Math.PI * 2);
	ctx5.stroke();
*/
//					ctx6
//					ctx11
	function timer(){
		ctx11.clearRect(/*0,0,canvas11.width,canvas11.height*/); // need to learn how to use it
		hole(ran(canvas11.width),ran(canvas11.height),ran(30));
		hole.clearRect();
		//how do i randomly put holes and delte them so they don't crowd the page?
	}
	function rect(x,y,width,length,color){
		ctx11.fillStyle = color;
		ctx11.fillRect(x,y,width,length,color);
	}
	function squ(x,y,side,color){
		ctx11.fillStyle = color;
		ctx11.fillRect(x,y,side,side,color);
	}
	function ran(up_to) { 
		n = Math.floor(Math.random() * up_to);
		return(n);
	}
	function hole(x,y,radius,color){
		ctx11.beginPath();
		ctx11.fillStyle = color;
		ctx11.arc(x, y, radius, 0/*start angle*/, Math.PI * 2/*end angle*/);
		ctx11.fill();
	}
	function cir(x,y,radius){
		ctx11.beginPath();
		ctx11.strokeStyle = "#ccc";
		ctx11.arc(x,y,radius, 0, Math.PI * 2);
		//function RandInt(up_to){n=Math.floor(Math.random()*up_to);return(n);}
		//Math.floor(Math.random()*10) + 1; // number between 1-10
		ctx11.stroke();
	}
	function line(x1,y1,x2,y2){
		ctx11.moveTo(x1,y1);// starting point
		ctx11.lineTo(x2,y2);// ending point
		ctx11.stroke();
	}
	function text(){
		ctx11.lineWidth = 4;
		ctx11.font = "60px Arial";
		ctx11.fillText("hello", 10, 210);
		ctx11.strokeText("goodbye",10,250);
	}
	// text
	text();
	// line
	line(0,0,20,50);
	// rectangles
	rect(10,10,75,10,"red");
	rect(0,50,75,20,"green");
	rect(170,20,50,150,"red");
	// square
	squ(10,10,20,"yellow");
	// circle
	cir(160,160,120);
	// hole
	hole(20,40,15,"blue");
	// random hole
	hole(ran(canvas11.width),ran(canvas11.height),ran(30));
	///////////////////////// gradients
	// create linear gradient LEARN SYNTAX!!!
	// createRadialGradient(); x,y,r,x1,y1,r1
	var grad = ctx11.createLinearGradient(0,0,200,100);//x,y,x1,y1
	grad.addColorStop(0,"red");
	grad.addColorStop(1,"green");
	ctx11.fillStyle = grad;
	ctx11.fillRect(10,100,100,80);
//					ctx12
	var y_pos = 0;
	var img = new Image();
	img.src = "https://s2js.com/img/etc/cat_grumpy.png";
	function MyTimer () {
		ctx12.clearRect(0/*x*/, 0/*y*/, canvas12.width, canvas12.height);
		y_pos = y_pos + 5;
		ctx12.drawImage(img,250,y_pos);
	}
	setInterval(MyTimer, 40);
