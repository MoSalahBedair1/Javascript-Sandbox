function showTime() {

    'use strict';

    var now = new Date(),

        hours = now.getHours(),

        minutes = now.getMinutes(),

        seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        hours = '0' + hours;
    }

    if (seconds < 10) {
        hours = '0' + hours;
    }

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

};

window.onload = function () {
    'use strict'

    setInterval(showTime, 1000);
};