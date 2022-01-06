var myElement = document.getElementById('myImg');

    myImgs = [
        'URL 1',
        'URL 2',
        'URL 3',
        'URL 4'
    ],

function changeImage(myElement, myImgs) {
    'use strict';

    setInterval(function () {
    var myRandomNum = Math.floor(Math.random() * myImgs.length);
        
    console.log(myRandomNum);

    myElement.src = myImgs[myRandomNum];

    }, 1000);
};

changeImage(myElement, myImgs);