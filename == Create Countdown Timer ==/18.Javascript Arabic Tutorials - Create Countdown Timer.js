var seconds = 12,

    countDiv = document.getElementById('countdown'),

    secondPass, 

    countDown = setInterval(function () {

        'use strict';

        secondPass();

    }, 1000);


function secondPass() {

    'use strict';

    var minutes = Math.floor(seconds / 60),

        remSeconds = seconds % 60;

    countDiv.innerHTML = minutes + ":" + remSeconds;

    if (seconds > 0) {
        
        seconds = seconds - 1;

    } else {

        clearInterval(countDown);

        countDiv.innerHTML = 'Done';

    }

};
