const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(item => {
        // now we want to find out if city or state matches the search
        const regex = new RegExp(wordToMatch, 'gi');
        // g flag stands for global search, i flag stands for case-insensitive
        return item.city.match(regex) || item.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    const matchArr = findMatches(this.value, cities);
    const html = matchArr.map(item => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = item.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = item.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
            <li class="results">
                <span class="place">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(item.population)}</span>
            </li>`
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);