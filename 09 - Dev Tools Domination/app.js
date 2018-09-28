const dogs = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello, I am a %s person', 'very nice');

// Styled
console.log('%c I am some great text', 'font-size: 30px; background: tomato; border: 3px solid green;');

// warning!
console.warn('Oh nooo!');

// Error :|
console.error('Oh, shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('andy'), 'You are quite wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(item => {
    console.groupCollapsed(`${item.name}`);
    console.log(item.name);
    console.log(`This is ${item.name}`);
    console.log(`${item.name} is ${item.age} years old`);
    console.log(`${item.name} is ${item.age * 7} dog years old`);
    console.groupEnd(`${item.name}`);
});

// counting
console.count('andy');
console.count('monka');
console.count('andy');
console.count('andy');
console.count('monka');
console.count('monka');
console.count('andy');
console.count('andy');
console.count('monka');
console.count('monka');
console.count('monka');
console.count('monka');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table
console.table(dogs);