let openButton = document.getElementById('slider-menu-open-container');
let topLayer = document.getElementById('top-layer');
let middleLayer = document.getElementById('middle-layer');
let bottomLayer = document.getElementById('bottom-layer');
let slideMenu = document.getElementById('slider-menu-container');
let openKey = false;

openButton.addEventListener('click', () => {
    if(!openKey) {
        topLayer.classList.add('t-layer-animation');
        middleLayer.classList.add('m-layer-animation');
        bottomLayer.classList.add('b-layer-animation');
        slideMenu.style.width = '80%';
        openKey = true;
    } else {
        topLayer.classList.remove('t-layer-animation');
        middleLayer.classList.remove('m-layer-animation');
        bottomLayer.classList.remove('b-layer-animation');
        slideMenu.style.width = '0';
        openKey = false;
    }
});