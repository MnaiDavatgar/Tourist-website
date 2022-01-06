//Slider menu for menu responsivness
let openButton = document.getElementById('slider-menu-open-container');
let topLayer = document.getElementById('top-layer');
let middleLayer = document.getElementById('middle-layer');
let bottomLayer = document.getElementById('bottom-layer');
let slideMenu = document.getElementById('slider-menu-container');
let menuCountriesItem = document.getElementById('menu-countries-item');
let zoomMenu = document.getElementById('zoom-menu');
let downArrowContainer = document.getElementById('down-arrow-container');
let countriesSliderMenuLink = document.getElementById('countries-slider-menu-link');
let sliderZoomMenu = document.getElementById('sliderMenuZoomMenuContainer');
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

//Zoom menu opening and closing

document.onmouseover = function(e) {
    if(e.target.id == 'menu-countries-item') {
        zoomMenu.style.display = 'initial'
    }
}
document.onclick = function() {
    zoomMenu.style.display = 'none'
};
//Slider menu zoom opening and closing

countriesSliderMenuLink.addEventListener('click', () => {
    downArrowContainer.classList.toggle('clicked');
    if(sliderZoomMenu.style.height == '500px') {
    sliderZoomMenu.style.height = '100px';
    } else{
        sliderZoomMenu.style.height = '500px';
    }
});
//Picture slider for Countries slider menu

let contCont = document.getElementById('countries-container');
let scrollerArrow = document.getElementById('scroller-arrow');
let backScrollerArrow = document.getElementById('back-scroller-arrow');
var i = 0;
var x;


if(window.innerWidth > 600) {
    if(window.innerWidth > 1840) {
        x = 595;
    } else{
        x = 1785;
    }
} 
else{
    x = 2380;
}

scrollerArrow.addEventListener('click', () => {

    Number(i += 595);
    if(i > x) {
        i = 0;
    }

    contCont.scrollTo(i, 0);
});

backScrollerArrow.addEventListener('click', () => {
    Number(i -= 595);
    if(i < 0) {
        i = 2380;
    }

    contCont.scrollTo(i, 0);
});

