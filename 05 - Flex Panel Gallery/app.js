const panels = document.querySelectorAll('.panel');

function openToggle() {
    this.classList.toggle('open');
}
function openActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(item => item.addEventListener('click', openToggle));
panels.forEach(item => item.addEventListener('transitionend', openActive));