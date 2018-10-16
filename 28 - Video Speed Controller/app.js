document.addEventListener('DOMContentLoaded', function () {

    const speed = document.querySelector('.speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    function handleMove(e) {
        const y = e.pageY - this.offsetTop;
        const percent = (y / this.offsetHeight) * 100;
        const min = 0.4;
        const max = 4;
        const height = Math.round(percent) + '%';
        const playSpeed = (percent / 100 * (max - min)) + min;
        bar.style.height = height;
        bar.innerText = `${playSpeed.toFixed(1)}x`;
        // Wes did it with "bar.textContent" but the result is the same
        video.playbackRate = playSpeed;
    }

    speed.addEventListener('mousemove', handleMove);

});