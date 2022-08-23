import acc from './modules/acc.js';
import burger from './modules/burger.js';
import * as flsFuncs from './modules/functions.js';
import headerScroll from './modules/headerScroll.js';
import mask from './modules/mask.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    headerScroll();
    burger();
    acc();
    mask();
})
