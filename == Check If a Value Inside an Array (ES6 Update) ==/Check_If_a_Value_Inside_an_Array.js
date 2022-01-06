var arrayOfNumbers = [1, 2, 3 ,4],

    arrayOfStrings = ["A", "B", "C", "D"];


function CheckValue(theArray, ValueToCheck) {

    'use strict';

    if (theArray.indexOf(ValueToCheck) !== -1) {

        return ValueToCheck + ' Is Found In The Array';

    }

    return ValueToCheck + ' Not Found In The Array';

};

console.log(CheckValue(arrayOfNumbers, 3)); // "3 Is Found in The Array"
console.log(CheckValue(arrayOfStrings, "D")); // "D Is Found in The Array"
console.log(CheckValue(arrayOfNumbers, 6)); // "6 Not Found in The Array"


// Using ES6

/*

let arrayOfNumbers = [1, 2, 3 ,4],

    arrayOfStrings = ["A", "B", "C", "D"];


function CheckValue(theArray, ValueToCheck) {

    if (theArray.includes(ValueToCheck)) {

        return `${ValueToCheck} Is Found In The Array`;

    }

    return `${ValueToCheck} Not Found In The Array`;

};

console.log(CheckValue(arrayOfNumbers, 3)); // "3 Is Found in The Array"
console.log(CheckValue(arrayOfStrings, "D")); // "D Is Found in The Array"
console.log(CheckValue(arrayOfNumbers, 6)); // "6 Not Found in The Array"

*/

