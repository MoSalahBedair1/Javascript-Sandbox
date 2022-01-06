function generatreSerial() {
    'use strict';

    var chars = '1234567890ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',

    serialLength = 20,

    randomSerial = '',

    i,

    randomNumber;

    for (i = 0; i < serialLength; i++) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById('serial').innerHTML = randomSerial;

}