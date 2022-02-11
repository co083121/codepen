/*
var load = function(name) {
	return name * 2;
};
*//*
var userChoice = "do you want rock, paper or scissors?";
var ch = userChoice;
var computerChoice = Math.random();
var chx = computerChoice;
// document.getElementById("demo").innerHTML = chx;
if (chx < 0.33) {
	chx = "rock";
} else if (chx < 0.66) {
	chx = "paper";
} else {
	chx = "scissors";
} document.getElementById("demo").innerHTML = "Computer: " + chx;

var compare = function(ch1,ch2){
	if (ch1 == ch2) {
		return "Tie!";
	} else if (ch1 == "rock") {
		if (ch2 == "scissors") {
			return "rock wins!";
		} else {
			return "paper wins!";
		}
	} else if (ch1 = "paper") {
		if (ch2 == "rock") {
			return "paper wins!";
		} else {
			return "scissors wins!";
		}
	} else if (ch1 == "scissors") {
		if (ch2 == "rock") {
			return "rock wins!";
		} else {
			return "scissors wins!";
		}
	}
};
compare(ch,chx);
*//*
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";
var myName = "eric";
var hits = [];
for(var i = 0; i < text.length; i++){
	if (text[i] === "E"){
		for (var j = i; j < (myName.length + i); j++){
			hits.push(text[j]);
		}
	}
}
if (hits.length === 0){
	document.getElementById("demo").innerHTML = "name wasn't found";
} else {
	document.getElementById("demo").innerHTML = hits;
}
*/
/*
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
*//*
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}*/
/*
var example = {};
example.name = "joe";
example.num = "352-555-1212";
example.phone = function() {
	console.log(this.name + "'s" + " number is " + this.num);
}
example.phone();
var exam = {
	name: "rick",
	age: 22,
}
var demo = new Object();
demo["name"] = "joe";
or
demo.name = "joe";
*/
/*
var friends = {};
friends.bill = {
	firstName: "bill",
	lastName: "gates",
	number: "(352)555-5555",
	address: ["one","gville","fl","32601"]
};
friends.steve = {
	firstName: "steve",
	lastName: "minecraft",
	number: "(352)555-1212",
	address: ["eight","minertown","fl","32426"]
};
var list = function(obj)   {
	for (var prop in obj) {
		console.log(prop);
	}
};
var search = function(name)   {
	for (var prop in friends){
		if (friends[prop].firstName === name) {
			console.log(friends[prop]);
			return friends[prop];
		}
	}
};
list(friends);
search("steve");
*/
/*
var example1 = {};
var example2 = new Object();
var example3 = {};
var example3 = {name: "joy"}
var example3var = example3.name;
example1.name = "joe";
example2["name"] = "bill";

example3var = example3.name;
c = example3var;
b = example2.name;
a = example1.name;
*//*
var bob = {
	firstName: "Bob",
	lastName: "Jones",
	phoneNumber: "(650) 777-7777",
	email: "bob.jones@example.com"
};

var mary = {
	firstName: "Mary",
	lastName: "Johnson",
	phoneNumber: "(650) 888-8888",
	email: "mary.johnson@example.com"
};
var contacts = [bob, mary];
function printPerson(person) {
	console.log(person.firstName + " " + person.lastName);
}
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
/*Create a search function
then call it passing "Jones"*//*
function search(lastName){
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		if (contacts[i].lastName == lastName){
			printPerson(contacts[i]);
		}
	}
}
function add (firstName, lastName, phoneNumber, email) {
	var contactSize = contacts.length;
	var Person = new Object();
	Person.firstName = prompt("First Name");
	Person.lastName = prompt("Last Name");
	Person.phoneNumber= prompt("Phone No.");
	Person.email = prompt("Email");
	contacts[contactSize] = Person;
};
list();
add();
*/
/*
function Person(first,last,age) {
	
	this.firstname = first;
	this.lastname = last;
	this.age = age;
	var bankBalance = 7500;
	var returnBalance = function() {return bankBalance;};
	this.askTeller = function() {
		if (pass == 1234) {
			return returnBalance;
		} else {
			return "wrong password";
		}
	};
}
var pass = "";
var john = new Person('John','Smith',30);
//console.log(john.returnBalance);
//var myBalanceMethod = john.askTeller();
var myBalance = john.askTeller(1234);
console.log(myBalance);
*/
function StaffMember(name,discountPercent){
	this.name = name;
	this.discountPercent = discountPercent;
}
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var gabe = new StaffMember("gabe", 20);
var cashRegister = {
	total: 0,
	lastTransactionAmount: 0,
	add: function(itemCost) {
		this.total += (itemCost || 0);
		this.lastTransactionAmount = itemCost;
	},
	scan: function(item,quantity) {
		switch (item) {
			case "eggs": this.add(0.98 * quantity); break;
			case "milk": this.add(1.23 * quantity); break;
			case "magazine": this.add(4.99 * quantity); break;
			case "chocolate": this.add(0.45 * quantity); break;
		}
		return true;
	},
	voidLastTransaction: function() {
		this.total -= this.lastTransactionAmount;
		this.lastTransactionAmount = 0;
	},
	applyStaffDiscount: function(employee){
		this.total -= this.total * (employee.discountPercent * 0.01);
    },
};
cashRegister.scan("eggs",1);
cashRegister.scan("magazine",1);
cashRegister.scan("milk",1);
cashRegister.scan("chocolate",1);
cashRegister.applyStaffDiscount(gabe);
//console.log('Your bill is '+cashRegister.total.toFixed(2));
document.getElementById("demo").innerHTML = "safe";
document.getElementsByTagName
document.getElementsByTagNameNS
document.getElementsByClassName
document.getElementsByName