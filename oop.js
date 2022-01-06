/*
    Defining Object 
    [1] Object Literal
    [2] With New Keyword
    [3] With Object.create()
    [4] With Object.assign()
*/

/*
let user = {

    // Properties
    firstName: "Mo",
    lastName: 'Bedair',
    addresses: {
        eg: "Giza", 
        usa: "California",
        ksa: "Riyadh",

        getMainAddress: function () {

            return `Main Address Is In Egypt In City ${user.addresses.eg}`

        },

    },


    // // Methods
    // getFullName: function () {
    //     return `Full Name: ${user.firstName} ${user.lastName}`
    // },
    getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,
};

// Accessing Object Properties

console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String

console.log(user.addresses.eg);
console.log(user["addresses"]["ksa"]);

// Accessing Object Methods
console.log(typeof user.getFullName); // function
console.log(user.getFullName());

console.log(user.addresses.getMainAddress());

*/

/*
let user = new Object();

user.firstName = "MoSalah";
user.lastName = "Bedair";
user["age"] = 37,

user.getFullName = function () {
    return `Full Name Is ${user.firstName} ${user.lastName}`
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());

*/

/*

let mainObj = {
    hasDiscount: true,
    showMsg: function () {
        return `You${this.hasDiscount ? "" : " Don't"} Have Discount`
    },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

*/

/*
const src1 = {
    prop1: "Value1",
    prop2: "Value2",
    method1: function () {
        return `Method 1`
    },
};

const src2 = {
    prop3: "Value3",
    prop4: "Value4",
    method1: function () {
        return `Method 2`
    },
};

const target = {
    prop5: "Value5",
};

Object.assign(target, src1, src2, {prop6: "Value6"});

console.log(target);

const myObject = Object.assign({}, target, {prop7: "Value7"});

console.log(myObject);
*/

// == Delete Operator ==

/*
const user = {name: "moSalah"};

console.log(user);
console.log(user.name);

// delete user; // Delete Property Not Object
// delete user.name;
// delete user["name"];
console.log(delete user["name"]);

console.log(user);
console.log(user.name);

console.log("#".repeat(15));

const username = "MoSalah"
console.log(username);
console.log(delete username);
console.log(username);

console.log("#".repeat(15));

const freezedObj = Object.freeze({age: 37});
console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);

console.log("#".repeat(15));

const emptyObject = {};
Object.defineProperty(emptyObject, "a", {value: 1, configurable: false})
console.log(emptyObject);
console.log(emptyObject.a);

console.log(delete emptyObject.a); // false

console.log(emptyObject);
console.log(emptyObject.a);
*/

/*  ===============
    For ... In Loop
    Loop Through The Properties Of The Objects
    ===============
*/

/*
const user = {
    name: "MoSalah", 
    country: "Egypt",
    age: 37,
};

let finalData = '';

for (let info in user) {
    console.log(info);
    finalData += info
}

console.log(finalData);
*/

// Constructor Function

/*
function Phone(serial, color, price) { // Best Practice in constractor function is to be first letter capitalized
    this.serial = serial;
    this.color = color;
    this.price = price;
}

let phone1 =  new Phone(123, "Red", 500)
let phone2 =  new Phone(125, "Black", 500)
let phone3 =  new Phone(342, "Silver", 500)

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);

console.log(phone3.serial);
console.log(phone3.color);
console.log(phone3.price);

// const phone1 = {
//     serial: 123,
//     color: "Red",
//     price: 500,
// };

// const phone2 = {
//     serial: 125,
//     color: "Black",
//     price: 500,
// };

// const phone3 = {
//     serial: 342,
//     color: "Silver",
//     price: 500,
// };

// new operator is to create the object separated from window object

*/

// Prototype

// function User(name) {
//     this.name = name;
//     this.welc
// }

// == Class ==

// I think class is a constructor function with a modern style :"D

// function User(name, email) {
//     this.name = name;
//     this.email = email;
//     this.sayHello = function () {
//         return `Hello ${this.name}`;
//     };
// };

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        };
    
    sayHello() {
        return `Hello ${this.name}`;
    }
    showEmail() {
        return `Your Email Is ${this.email}`
    }
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

console.log(user1);
console.log(user2);

console.log