const section = document.getElementById('section');
const head = document.getElementById('head');

let headH = head.offsetHeight;
let iH = window.innerHeight;

section.style.height = iH - headH + 'px';

