var theNames = ["Osama", "Ahmed", "Sayed", "Eman", "Mahmoud", "Khaled"];

for (var i = 0; i < theNames.length; i++) {
    if (theNames[i] === "Eman") {
        break;
    }
    console.log(theNames[i]);
}

// Output
"Osama"
"Ahmed"
"Sayed"


/* If You Put the console.log() before the if statement */

/*
var theNames = ["Osama", "Ahmed", "Sayed", "Eman", "Mahmoud", "Khaled"];

for (var i = 0; i < theNames.length; i++) {
    console.log(theNames[i]);
    if (theNames[i] === "Eman") {
        break;
    }
}

// Output
"Osama"
"Ahmed"
"Sayed"
"Eman"
*/