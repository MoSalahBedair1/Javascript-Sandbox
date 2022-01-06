let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

console.log(arrOne.concat(arrTwo)); // [1, 2, 3, 4, 5, 6]

console.log([].concat(arrOne, arrTwo)); // [1, 2, 3, 4, 5, 6]

console.log([...arrOne, ...arrTwo]); // [1, 2, 3, 4, 5, 6]

