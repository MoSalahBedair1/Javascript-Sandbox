var myButton = document.getElementById('pass-toggle'),

    myInput  = document.getElementById('pass-id');


myButton.onclick = function (e) {

    'use strict';

    e.preventDefault();

    if (this.textContent == 'Show Password') {

        this.textContent = 'Hide Password';

        myInput.setAttribute('type', 'text');

    } else {

        this.textContent = 'Show Password';

        myInput.setAttribute('type', 'password');

    }

};