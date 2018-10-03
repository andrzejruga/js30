// start with strings, numbers and booleans
// let height = 177;
// let height2 = height;
// console.log(height, height2);
// height = 188;
// console.log(height, height2);
//
// let city = 'Poznan';
// let city2 = city;
// console.log(city, city2);
// city = 'Boston';
// console.log(city, city2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Monika';
console.log(team);
console.log(players);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // when you pass nothing to slice function it will just make a copy of an original array
console.log('team2', team2);
team2[3] = 'Lux';
console.log('team2', team2);
console.log('players', players);
console.log(players.slice(2, 3));
console.log('players', players);


// one way

// or create a new array and concat the old one in
const team3 = [].concat(players); // it does exactly the same as slice in team2 - just a copy

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players); // both work exactly the same as the other two - make a copy

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person; // it's just a reference
// captain.number = 99;
// console.log(captain);
// console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 77, age: 33 });
console.log(captain2);
console.log(person);

// We will hopefully soon see the object ...spread
const captain3 = {...person};
console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// const wes = {
//     name: 'Wes',
//     age: 100,
//     social: {
//         twitter: '@wesbos',
//         facebook: 'wesbos.developer'
//     }
// };
//
// console.clear();
// console.log(wes);
//
// const dev = Object.assign({}, wes); // makes a copy but just 1 level deep, 2nd level is a reference
// const dev2 = JSON.parse(JSON.stringify(wes));