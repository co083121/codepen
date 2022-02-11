var i1 = 0;
function add_num1(){
	i1++;
	document.getElementById("txt1").value = i1;
	document.getElementById("sub1").value = i1 * 1;
	math();
}
function minus_num1(){
	i1--;
	document.getElementById("txt1").value = i1;
	document.getElementById("sub1").value = i1 * 1;
	math();
}
var i2 = 0;
function add_num2(){
	i2++;
	document.getElementById("txt2").value = i2;
	document.getElementById("sub2").value = i2 * 5;
	math();
}
function minus_num2(){
	i2--;
	document.getElementById("txt2").value = i2;
	document.getElementById("sub2").value = i2 * 5;
	math();
}
var i3 = 0;
function add_num3(){
	i3++;
	document.getElementById("txt3").value = i3;
	document.getElementById("sub3").value = i3 * 10;
	math();
}
function minus_num3(){
	i3--;
	document.getElementById("txt3").value = i3;
	document.getElementById("sub3").value = i3 * 10;
	math();
}
var i4 = 0;
function add_num4(){
	i4++;
	document.getElementById("txt4").value = i4;
	document.getElementById("sub4").value = i4 * 20;
	math();
}
function minus_num4(){
	i4--;
	document.getElementById("txt4").value = i4;
	document.getElementById("sub4").value = i4 * 20;
	math();
}
var i5 = 0;
function add_num5(){
	i5++;
	document.getElementById("txt5").value = i5;
	document.getElementById("sub5").value = i5 * 50;
	math();
}
function minus_num5(){
	i5--;
	document.getElementById("txt5").value = i5;
	document.getElementById("sub5").value = i5 * 50;
	math();
}
var i6 = 0;
function add_num6(){
	i6++;
	document.getElementById("txt6").value = i6;
	document.getElementById("sub6").value = i6 * 100;
	math();
}
function minus_num6(){
	i6--;
	document.getElementById("txt6").value = i6;
	document.getElementById("sub6").value = i6 * 100;
	math();
}
var i7 = 0;
function add_num7(){
	i7++;
	document.getElementById("txt7").value = i7;
	document.getElementById("sub7").value = i7 * 500;
	math();
}
function minus_num7(){
	i7--;
	document.getElementById("txt7").value = i7;
	document.getElementById("sub7").value = i7 * 500;
	math();
}
function math(){
	var i1 = document.getElementById("sub1").value;
	var i2 = document.getElementById("sub2").value;
	var i3 = document.getElementById("sub3").value;
	var i4 = document.getElementById("sub4").value;
	var i5 = document.getElementById("sub5").value;
	var i6 = document.getElementById("sub6").value;
	var i7 = document.getElementById("sub7").value;
	var tot = parseFloat(i1) + parseFloat(i2) + parseFloat(i3) + parseFloat(i4) + parseFloat(i5) + parseFloat(i6) + parseFloat(i7);
	document.getElementById("tot").value = tot;
}