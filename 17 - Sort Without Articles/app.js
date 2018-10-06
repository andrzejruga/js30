const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('#bands');

const newArr = [];

function sortBands() {
    const newArr = [];

    bands.map(item => {
        if (item.includes('The ')) {
            item = item.substring(4)
        } else if (item.includes('A ')) {
            item = item.substring(2)
        } else if (item.includes('An ')) {
            item = item.substring(3)
        }
        newArr.push(item);
    });

    newArr.sort();
    newArr.forEach(band => {
        const item = document.createElement('li');
        item.innerHTML = band;
        list.appendChild(item);
    })
}

sortBands();