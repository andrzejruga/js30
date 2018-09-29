const checkboxes = document.querySelectorAll('.inbox input');

let lastChecked;

function handleClick(e) {
    // We need to check if the SHIFT key is down
    // and then check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(item => {
            console.log(item);
            if (item === this || item === lastChecked) {
                inBetween = !inBetween;
                console.log('start');
            }
            if (inBetween) {
                item.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(item => item.addEventListener('click', handleClick));