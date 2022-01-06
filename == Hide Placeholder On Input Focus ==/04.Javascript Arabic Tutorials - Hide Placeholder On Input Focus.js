var myInput = document.getElementById('my-input');

myInput.onfocus = function () {

    'use strict';

    // Store PlaceHolder Attr In Backup Attr In Backup Attr

    this.setAttribute('data-place', this.getAttribute(''))

    // Empty Placeholder Attribute

    this.setAttribute('placeholder', '');

};

myInput.onblur = function () {
    
    'use strict';

    // Get Placeholder Attr From Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-place'));

    // Empty Backup Attribute

    this.setAttribute('data-place', '');

};


// Do It with if condition

// Do It with A function


