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
        setTimeout(() => this.classList.add('trigger-enter-active'), 200);
    }

    function handleLeave() {
        console.log('leave');
    }

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

});