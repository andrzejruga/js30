const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(item => {
    const currYear = (new Date()).getFullYear();
    if (currYear - item.year >= 19) {
        return true;
    }
});
console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older?
const areAllAdults = people.every(item => {
    const currYear = (new Date()).getFullYear();
    return (currYear - item.year >= 19);
});
console.log({areAllAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// const thatComment = comments.find(item => {
//     if (item.id === 823423) {
//         return item;
//     }
// });
// console.log(thatComment);

// much shorter
const thatComment = comments.find(item => item.id === 823423);
console.log(thatComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(item => item.id === 823423);
console.log(commentIndex);

comments.splice(commentIndex, 1);
console.table(comments);

// alternative
// const newComments = [
//     ...comments.slice(0, commentIndex),
//     ...comments.slice(commentIndex + 1)
// ];
// console.log(newComments);


