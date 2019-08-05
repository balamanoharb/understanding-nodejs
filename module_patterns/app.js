// replacing/overriding the whole module.exports
var greet1 = require("./greet-1")
greet1();

// adding on to the existing module.exports empty values
var greet2 = require("./greet-2").greet2;
greet2()

// assigning funcitons created via constructors
var greet3 = require("./greet-3")
greet3.greet()

// assigning funciton constructor itself
var Greet = require("./greet-4")
var greet4 = new Greet()
greet4.greet();

// revealing module pattern
var greet5 = require("./greet-5")
greet5.greet();