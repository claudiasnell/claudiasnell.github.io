const colorModeOverride = window.localStorage.getItem('color-mode');

const hasColorModeOverride = typeof colorModeOverride === 'string';

if (hasColorModeOverride) {

document.documentElement.setAttribute('data-theme', colorModeOverride);

  

}

var theme = colorModeOverride;

const light = document.querySelector('#light-mode');

const dark = document.querySelector('#dark-mode');

const resetDefault = document.querySelector('#reset');

const themeState = document.querySelector('.status');

  


resetDefault.addEventListener("click", (event) => {

theme = "theme-default";

localStorage.removeItem('color-mode', theme);

document.documentElement.removeAttribute('data-theme');
light.classList.remove('active');
dark.classList.remove('active');
resetDefault.classList.add('active');



});

  

light.addEventListener("click", (event) => {

theme = "light";

window.localStorage.setItem('color-mode', theme);

document.documentElement.setAttribute('data-theme', theme);
light.classList.add('active');
dark.classList.remove('active');
resetDefault.classList.remove('active');



});

dark.addEventListener("click", (event) => {

theme = "dark";

window.localStorage.setItem('color-mode', theme);

document.documentElement.setAttribute('data-theme', theme);
light.classList.remove('active');
dark.classList.add('active');
resetDefault.classList.remove('active');



});

