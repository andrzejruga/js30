const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoordinates = this.getBoundingClientRect();
    const positionTop = linkCoordinates.top + window.scrollY;
    highlight.style.width = `${linkCoordinates.width}px`;
    highlight.style.height = `${linkCoordinates.height}px`;
    highlight.style.transform = `translate(${linkCoordinates.left}px, ${positionTop}px)`;
}

links.forEach(a => a.addEventListener('mouseenter', highlightLink));
