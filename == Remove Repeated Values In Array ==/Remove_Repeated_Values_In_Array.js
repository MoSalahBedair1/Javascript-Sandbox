/* Old Way */

var arrayOfNumbers = ["A", "A", "B", "C", "D", "A"];

var newArrway = arrayOfNumbers.filter(function(element, index) {
    return arrayOfNumbers.indexOf(element) === index;
});

console.log(newArrway); // ["A", "B", "C", "D"]

/* New Way */

let arrayOfNumbers = ["A", "A", "B", "C", "D", "A"];

// Spread Operator + New Unique Set
let newArrway = [...new Set(arrayOfNumbers)]; ;

console.log(newArrway); // ["A", "B", "C", "D"]