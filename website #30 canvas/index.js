// all you need to make canvas appear
var can = document.createElement("canvas");
can.style.width = "200px";
can.style.height = "100px";
can.style.border = "1px solid #c3c3c3";
can.setAttribute("id","myCanvas");
document.body.appendChild(can);
/////////////////////////////////////	
// find the canvas
var canvas = document.getElementById("myCanvas");
// create the drawing object
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
// draw a line
//ctx.moveTo(0,0);
//ctx.lineTo(200,100);
//ctx.stroke();
// draw a circle
ctx.beginPath();
	/*arc(x,y,r,startangle,endangle)*/
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();

/*
createLinearGradient(x,y,x1,y1)
createRadialGradient(x,y,r,x1,y1,r1)
*/