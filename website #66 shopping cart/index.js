var i1 = 0;
function add_num1(){
	i1++;
	document.getElementById('txt1').value = i1;
	document.getElementById("price1").value = i1 * 13.95;
	math();
}
function minus_num1(){
	i1--;
	document.getElementById('txt1').value = i1;
	document.getElementById("price1").value = i1 * 13.95;
	math();
}
var i2 = 0;
function add_num2(){
	i2++;
	document.getElementById('txt2').value = i2;
	document.getElementById("price2").value = i2 * 349.00;
	math();
}
function minus_num2(){
	i2--;
	document.getElementById('txt2').value = i2;
	document.getElementById("price2").value = i2 * 349.00;
	math();
}
var i3 = 0;
function add_num3(){
	i3++;
	document.getElementById('txt3').value = i3;
	document.getElementById("price3").value = i3 * 189.95;
	math();
}
function minus_num3(){
	i3--;
	document.getElementById('txt3').value = i3;
	document.getElementById("price3").value = i3 * 189.95;
	math();
}
var i4 = 0;
function add_num4(){
	i4++;
	document.getElementById('txt4').value = i4;
	document.getElementById("price4").value = i4 * 159.00;
	math();
}
function minus_num4(){
	i4--;
	document.getElementById('txt4').value = i4;
	document.getElementById("price4").value = i4 * 159.00;
	math();
}
function math() {
	var i1 = document.getElementById("price1").value;
	var i2 = document.getElementById("price2").value;
	var i3 = document.getElementById("price3").value;
	var i4 = document.getElementById("price4").value;
	var sub = parseFloat(i1) + parseFloat(i2) + parseFloat(i3) + parseFloat(i4);
	document.getElementById("subtot").value = sub;
}