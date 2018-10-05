const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const check = document.querySelector('button:first-of-type');
const uncheck = document.querySelector('button:last-of-type');

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name = item]')).value;
    const item = {
        text: text,
        // text, -> that is also correct since ES6 (without "text:")
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // clears input
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
        return `
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
            <label for="item${index}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip target unless it's an input
    console.log(e.target);
    const element = e.target;
    console.log(element.dataset.index);
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function checkAll(e) {
    items.forEach(box => {
        if (box.done = true) {
            return;
        } else {
            box.done = true;
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function uncheckAll(e) {
    items.forEach(box => {
        if (box.done = true) {
            box.done = false;
        } else {
            return;
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
check.addEventListener('click', checkAll);
uncheck.addEventListener('click', uncheckAll);

populateList(items, itemsList);
