var can = document.createElement("canvas");
can.setAttribute("id","myCanvas");
can.style.border = "1px solid black";
can.style.backgroundColor = "pink";
can.width = 600;
can.height = 600;
document.body.appendChild(can);

var ctx = myCanvas.getContext("2d");

function Rec(x,y,width,height,color){
	ctx.fillStyle = color;
	ctx.fillRect(x,y,width,height,color);
}
function bRec(x,y,width,height,color,lw){
	ctx.lineWidth = lw;
	ctx.strokeStyle = color;
	ctx.strokeRect(x,y,width,height,color);
}
/*
Rec(50,40,20,30,"blue");
Rec(90,40,20,30,"brown");
bRec(35,90,90,10,"blue",3);
Rec(35,90,90,10,"red");
*/
//==========================
//==========================
//==========================
//==========================
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,Math.PI * 2);
	ctx.stroke();
}
function fcircle(x,y,r,color){
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x,y,r,0,Math.PI*2);
	ctx.fill();
}
/*
circle(450,300,25);
circle(450,300,50);
circle(450,300,150);
circle(450,300,250);
fcircle(75,150,25,"black");
fcircle(160,160,40,"red");
fcircle(100,100,20,"blue");
fcircle(200,200,60,"green");
*/
/*
scratch repeat = javascript while
scratch pick random num = javascript Math.random()
*//*
size = 2;
for (corner = 0; corner < 400; corner = corner + 1) {
	bRec(corner,corner,size,size);
	corner = corner + 2;
	size = size + 2;
}
for (x=20;x<=100;x=x+20) {
	fcircle(x,290,10,"yellow");
}
*//*
function word(txtw,x,y,size,fcolor,scolor,Lwidth){
	ctx.font = size + "px " + "Sans-serif";
	ctx.lineWidth = Lwidth;
	ctx.fillStyle = fcolor;
	ctx.strokeStyle = scolor;
	ctx.fillText(txtw, x, y);
	ctx.strokeText(txtw, x, y);
}
function ranNum(up_to){
	//Math.random(); random 0 <= n < 1
	//Math.floor(); always averages 2 lower number
	n = Math.floor(Math.random() * up_to);
	return n;
}
*/
//word(ranNum(10),50,50);

var y_pos1 = 0;
var y_pos2 = 0;
/*
var MyImg = new Image();
MyImg.src = "https://s2js.com/img/etc/cat_grumpy.png";
function Timer(){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	y_pos1 = y_pos1 + 5;
	y_pos2 = y_pos2 + 5;
	circle(10,y_pos1,50);
	circle(500,y_pos2,50);
	w(y_pos1,200,300);
	w(y_pos2,300,400);
	ctx.drawImage(MyImg,100,100);
}
setInterval(Timer,50);
*/
/*
function w(a,x,y){
	ctx.font = "25px Sans-serif";
	ctx.fillText(a,x,y);
}
*/
	var x_pos = 30;
	var y_pos = 30;
var a = "https://www.gatormodz.com/pics/png/gatormodz3.png";
var pic = new Image();
pic.src = a;
function Timer(){
	ctx.clearRect(0,0,can.width,can.height);
	ctx.drawImage(pic,x_pos,y_pos);
}

function MyKeyDownHandler(MyEvent) {
	if (MyEvent.keyCode == 37 && x_pos > -30) {x_pos = x_pos - 10;}//left
	if (MyEvent.keyCode == 38 && y_pos > 0) {y_pos = y_pos - 10;}//up
	if (MyEvent.keyCode == 39 && x_pos + pic.width < can.width) {x_pos = x_pos + 10;}//right
	if (MyEvent.keyCode == 40 && y_pos + pic.height < can.height) {y_pos = y_pos + 10;}//down
	MyEvent.preventDefault()
}
setInterval(Timer,100);
addEventListener("keydown", MyKeyDownHandler);