function capitalizeWords(string) {

    // Get All Words in Your String
    var stringLetters = string.split(' '),
    
    // Create New Empty Array
        newString = [];
    
    // Get First Letter of the First Word
    console.log(stringLetters[0].charAt(0));
    
    // Get Rest of the Letters of First Word
    console.log(stringLetters[0].slice(1));
    
    // Loop Through All Words of the String
    for (var i = 0; i < stringLetters.length; i++) {
        
    // Push the New Word After Capitalizing First Letter to the new Array
        newString.push(stringLetters[i].charAt(0).toUpperCase() + stringLetters[i].slice(1));
    }
    
    // Join All Elements of the Array in One String
    return newString.join(' ');
}


console.log(capitalizeWords("every word of this string will capitalized"));