// Method 1 //

// let friends = ["Ahmed", "Sayed", "Eman", "Amgad", "Ameer", "Majed"];

// let filtered = [];

// for (let i = 0; i < friends.length; i++) {
//     if (friends[i].startsWith("A")) {
//         filtered.push(friends[i]);
//     }
// }

// console.log(filtered); // ["Ahmed", "Amjad", "Ameer"]

// Method 2 Using the filter

let filtered = friends.filter();

let filtered = friends.filter(function (friend) {
    return friend.startsWith("A");
});

// let filtered = friends.filter((friend) => friend.startsWith("A")); // ES6

console.log(filtered); // ["Ahmed", "Amjad", "Ameer"]
