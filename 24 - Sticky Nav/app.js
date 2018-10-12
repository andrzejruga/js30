document.addEventListener('DOMContentLoaded', function () {

    const navBar = document.querySelector('#main');
    const topOfNav = navBar.offsetTop;

    function fixNav() {
        if (window.scrollY >= topOfNav) {
            document.body.style.paddingTop = navBar.offsetHeight + 'px';
            document.body.classList.add('fixed-nav');
        } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav');
        }
    }

    window.addEventListener('scroll', fixNav);

});