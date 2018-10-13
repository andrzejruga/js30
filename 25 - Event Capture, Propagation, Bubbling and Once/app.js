document.addEventListener('DOMContentLoaded', function () {

    const divs = document.querySelectorAll('div');
    const btn = document.querySelector('button');

    function logText(e) {
        console.log(this.classList.value);
        // e.stopPropagation(); // stop bubbling, the function runs only at the lowest element we clicked
    }

    divs.forEach(item => item.addEventListener('click', logText, {
        capture: false, // true runs from the highest element to the lowest
        // false is default and runs from the lowest to the highest
        once: false // true is the same as: div.removeEventListener('click', logText) written outside forEach
    }));

    btn.addEventListener('click', () => {
        console.log('Click!');
    }, {
        once: true // you can only click the button once, i.e. in online store checkouts
    })

});