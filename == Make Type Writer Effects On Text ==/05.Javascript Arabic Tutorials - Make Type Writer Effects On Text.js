var myText = 'Hello from Elzero Web School This is Type Writer Effect on Text',

    i = 0,

    myButton = document.getElementById('button');

myButton.onclick = function () {
    
    'use strict';

    var typeWriter = setInterval(function () {

        document.getElementById('type').textContent += myText[i];

        i++;

        if (i > myText.length - 1) {

            clearInterval(typeWriter);
            
        }
    }, 100);

};