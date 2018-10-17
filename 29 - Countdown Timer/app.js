let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const minutesForm = document.querySelector('#custom');
const minutesInput = minutesForm.querySelector('input');
console.log(minutesInput);

function timer(seconds) {
    // clear any other existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + (seconds * 1000); // *1000 because we use ms
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
            clearInterval(countdown);
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const display = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    timerDisplay.textContent = display;
    document.title = display; // shows time left in browser tab!
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const howManySecs = parseInt(this.dataset.time);
    timer(howManySecs);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
minutesForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const minsEntered = minutesInput.value;
    timer(minsEntered * 60);
    this.reset();
});

// how Wes did this - if html element has a 'name' attribute, we can use it
// in selecting elements - in this example form -> customForm, input -> minutes
// so here we go
// document.customForm.addEventListener('submit', function(e) {
//    e.preventDefault();
//    const mins = this.minutes.value;
//    timer(mins * 60);
//    this.reset();
// });