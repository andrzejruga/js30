document.addEventListener('DOMContentLoaded', function () {

    const triggers = document.querySelectorAll('.cool > li');
    const background = document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');

    function handleEnter() {
        this.classList.add('trigger-enter');
        // setTimeout(function () {
        //     this.classList.add('trigger-enter-active');
        // }, 200);
        // code above won't work, because "this" doesn't refer to trigger
        // because it's in another function
        // we need to use arrow function, then "this" inherits value from parent function

        setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
        // above is shorter version of if statement - boolean
        // if 1st is true, then 2nd will run
        // if 1st is false, then 2nd doesn't bother us
        // setTimeout(() => {
        //     if (this.classList.contains('trigger-enter')) {
        //         this.classList.add('trigger-enter-active')
        //     }
        // }, 200);
        background.classList.add('open');

        const dropdown = this.querySelector('.dropdown');
        const dropdownCoordinates = dropdown.getBoundingClientRect();
        const navCoordinates = nav.getBoundingClientRect();

        const coords = {
            height: dropdownCoordinates.height,
            width: dropdownCoordinates.width,
            top: dropdownCoordinates.top - navCoordinates.top,
            left: dropdownCoordinates.left - navCoordinates.left
        };

        background.style.width = `${coords.width}px`;
        background.style.height = `${coords.height}px`;
        background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    function handleLeave() {
        this.classList.remove('trigger-enter', 'trigger-enter-active');
        background.classList.remove('open');
    }

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

});