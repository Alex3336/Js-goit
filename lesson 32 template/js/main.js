import {countries} from './array.js';

const templateSource = document.querySelector('#country-card-template').innerHTML;
const template = Handlebars.compile(templateSource);
const container = document.querySelector('#countries-container');

const markup = template(countries);
container.innerHTML = markup;
