const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
    // regular expression - if elements starts ^ with a, the or an, replace with ''
    // and trim, if then it starts with a space
    // ^ stands for starts with, i stands for case insensitive
}

const sortedBands = bands.sort(function (a, b) {
    if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});
// same function but much shorter:
// const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
    sortedBands
        .map(item => `<li>${item}</li>`)
        .join('');


// code below does almost the same - the only difference is
// it returns list without articles (a, an, the)
// I just couldn't match newArr elements with bands elements
//
// const list = document.querySelector('#bands');
// const newArr = [];
//
// function sortBands() {
//     const newArr = [];
//
//     bands.map(item => {
//         if (item.includes('The ')) {
//             item = item.substring(4)
//         } else if (item.includes('A ')) {
//             item = item.substring(2)
//         } else if (item.includes('An ')) {
//             item = item.substring(3)
//         }
//         newArr.push(item);
//     });
//
//     newArr.sort();
//     newArr.forEach(band => {
//         const item = document.createElement('li');
//         item.innerHTML = band;
//         list.appendChild(item);
//     })
// }
//
// sortBands();