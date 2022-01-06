// Add Default Local Storage Class on Body
document.body.classList.add(localStorage.getItem("pageColor") || 'red' ); // Truthy Falsy


var el = document.querySelectorAll('.color-switcher li');
var classesList = [];

// Loop On Elements
for (var i = 0; i < el.length; i++) {

    // Get Classes List
    classesList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener('click', function () {

        // Remove All Old Classes
        document.body.classList.remove(...classesList);
        // Add Current Class From LI Data Attribute
        document.body.classList.add(this.getAttribute('data-color'));

        // Add Data Local Storage
        localStorage.setItem("pageColor", this.getAttribute("data-color"));
        
    }, false);

}

console.log(classesList);
console.log(localStorage.getItem("pageColor"));