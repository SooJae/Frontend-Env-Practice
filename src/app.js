// console.log(sum(1,2));

// console.log(math.sum(1,2));

// import * as math from './math';
// console.log(math.sum(1,2));

import './app.css';
import nyancat from './nyancat.jpg';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
        <img src="${nyancat}" />
    `
})
