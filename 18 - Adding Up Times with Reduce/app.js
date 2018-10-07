const durationTimes = Array.from(document.querySelectorAll('[data-time]'));

const totalSeconds = durationTimes
    .map(item => item.dataset.time) // array of duration time for each video
    .map(durationItem => durationItem.split(':').map(parseFloat))
    .map(([minutes, seconds]) => {
        return (minutes * 60) + seconds;
    })
    // Wes did 2nd and 3rd map function in one like this:
    // .map(durationItem => {
    //     const [minutes, seconds] = durationItem.split(':').map(parseFloat);
    //     return (minutes * 60) + seconds;
    // })
    .reduce((a, b) => a + b);
console.log(totalSeconds);

const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = minutes % 60;
// Wes did it a bit differently, but my way looks simpler to me ;)

console.log('Total time: ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds.');