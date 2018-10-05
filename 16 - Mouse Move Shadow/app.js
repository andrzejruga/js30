const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function moveShadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // below we'll use ES6 and write the same but shorter
    const { offsetWidth: width, offsetHeight: height } = hero; // hero destructured
    let { offsetX: x, offsetY: y } = e; // same here, below is longer version
    // let x = e.offsetX;
    // let y = e.offsetY;
    // we used let this time to reassign the values below

    // "this" is what we listen in the event, in this case "hero"
    // e.target is what the mouse hovers over
    // so when it's just hero, it's hero, but when we are over its child h1, it's h1
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

}

hero.addEventListener('mousemove', moveShadow);