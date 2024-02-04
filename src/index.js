'use strict';

function CountriesInfo (title, capital, population, area) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.showCountry = function() {
        return `Title: ${this.title}. Capital: ${this.capital}. Population: ${this.population}. Area: ${this.area} sq.km`
    }
};

const ukraine = new CountriesInfo ('Ukraine', 'Kiev', 37445982, 603628);
const schwitzerland = new CountriesInfo ('Schwitzerland', 'Bern', 8703000, 41285);
function showCountriesInfo (obj){
    for (let keys in obj) {
        if (typeof obj[keys] !== 'function')
        console.log(`${keys} = ${obj[keys]}`)
    }
};


console.log(ukraine.showCountry());
showCountriesInfo(ukraine);
console.log('===========================================================================')
console.log(schwitzerland.showCountry());
showCountriesInfo(schwitzerland);