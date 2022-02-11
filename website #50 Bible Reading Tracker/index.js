// object: container for named values
// constructor: used with "new" operator to create an object
// create a single object
// method: a function defined in an object
// getElementById
// getElementsByClassName
// getElementsByTagName
var one = document.getElementById("demoId");
one.innerHTML = "hello guys";
var two = document.getElementsByClassName("demoClass");
two[0].innerHTML = "hello class!";
var three = document.getElementsByTagName("p");
three[2].innerHTML = "I work!";
var body1 = body.childNodes;

var chi = document.getElementsByTagName("a");
chi[0].href = "https://www.yahoo.com/";



var trialul = {
	name: "joe",
	age: 20,
	color: "green",
	height: 69
};
document.write(trialul.name+"<br/>");
document.write(trialul['age']+"<br/>");
// object: to create a number of objects of a single type
// 
function person(name,age,color) {
	this.name = name;
	this.age = age;
	this.color = color;
	this.changeMe = function(name) {
		this.name = name;
	}
}
// use "new" keyword to create new objects of the same type
var p1 = new person("sean",24,"yellow");
var p2 = new person("amber",12,"black");
document.write(p1.age+"<br/>");
document.write(p1.name+"<br/>");
p1.changeMe("email");
document.write(p1.name);