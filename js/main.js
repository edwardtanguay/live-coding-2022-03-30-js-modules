import { getAdvert, title } from './advert.js';
const contentElem = document.querySelector('.content');

contentElem.innerHTML = title;
contentElem.innerHTML += getAdvert();
