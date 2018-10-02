// function that runs our function only once every 20ms
// so that our function that listens to scrolling doesn't run too often
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    images.forEach(item => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - item.height / 2;
        // bottom of the image
        const imageBottom = item.offsetTop + item.height;
        const isHalfShown = slideInAt > item.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));