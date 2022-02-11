var para = document.createElement("p");
para.innerHTML = "http://www.ushistory.org/betsy/flagetiq3.html";
document.body.appendChild(para);
//http://www.ushistory.org/betsy/flagetiq3.html
var paper = document.createElement("canvas");
var pic = paper.getContext("2d");
paper.style.border = "solid black 1px";
paper.height = 130;
paper.width = 247;
pic.fillStyle = "red";
pic.fillRect(0,0,300,10);
pic.fillRect(0,20,300,10);
pic.fillRect(0,40,300,10);
pic.fillRect(0,60,300,10);
pic.fillRect(0,80,300,10);
pic.fillRect(0,100,300,10);
pic.fillRect(0,120,300,10);
pic.fillStyle = "blue";
pic.fillRect(0,0,99,70);

document.body.appendChild(paper);

/*
blue square width=99 height=70

*/