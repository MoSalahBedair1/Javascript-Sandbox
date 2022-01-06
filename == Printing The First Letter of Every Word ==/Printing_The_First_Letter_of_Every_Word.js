/*
var theName = "Osama Mohamed Elsayed";

// Split With Spaces
var splittedName = theName.split(" "); // ["Osama", "Mohamed", "Elsayed"]

// Get First Letter From Every Word
var firstLetters = splittedName.map(function (element) {
    return element[0]; // ["O", "M", "E"]
});

// Join All Togeters
var theShortName = firstLetters.join(""); // "OME"
*/

// All In One Line

var theName = "Osama Mohamed Elsayed".split(" ").map(function (element) {
    return element[0];
}).join("");

// With ES6

let theName = "Osama Mohamed Elsayed".split(" ").map((element) => element[0]).join("");