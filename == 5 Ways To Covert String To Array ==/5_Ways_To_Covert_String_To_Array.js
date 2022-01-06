let myString = "Elzero";

let arrOne = myString.split("");
console.log(arrOne); // ["E", "l", "z", "e", "r", "o"]

let myString = "Elzero";

let arrTwo = [...myString];
console.log(arrTwo); // ["E", "l", "z", "e", "r", "o"]

let myString = "Elzero";

let arrThree = Array.from(myString);
console.log(arrThree); // ["E", "l", "z", "e", "r", "o"]

let myString = "Elzero";

let arrFour = Object.assign([], myString);
console.log(arrFour); // ["E", "l", "z", "e", "r", "o"]

let myString = "Elzero";

let arrFive = [];
for (let i = 0; i < myString.length; i++) {
    arrFive.push(myString[i]);
}
console.log(arrFive); // ["E", "l", "z", "e", "r", "o"]