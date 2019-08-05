// copying props of inherited object to current object
var util = require("util")

function Person() {
  this.firstname = 'firstNamePlaceholder'
  this.lastname = 'lastnamePlaceholder'
}

Person.prototype.greet = function () {
  console.log("Hello.." + this.firstname + " " + this.lastname)
}

function SoftwareEngineer(type) {
  // just adding this line will copy all the props from Person to here
  Person.call(this);
  this.type = type
}

SoftwareEngineer.prototype.code = function () {
  console.log("coding...")
}

util.inherits(SoftwareEngineer, Person)

var se = new SoftwareEngineer();
se.greet();