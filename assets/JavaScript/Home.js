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
    sliderZoomMenu.style.overflow = 'hidden';
    sliderZoomMenu.style.backgroundColor = 'var(--button-color)';
    } else{
        sliderZoomMenu.style.height = '500px';
        sliderZoomMenu.style.backgroundColor = 'hsl(9, 100%, 44%)';
        sliderZoomMenu.style.overflow = 'auto';
    }
});
//Image slider for Countries slider menu

let contCont = document.getElementById('countries-container');
let scrollerArrow = document.getElementById('scroller-arrow');
let backScrollerArrow = document.getElementById('back-scroller-arrow');
var i = 0;
var x;
var y;

//Making the image slider(because i didnt want to use % for images width)

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

if(window.innerWidth < 400){
    y = 350;
} else{
    y = 595;
}

//Image slider arrows function

scrollerArrow.addEventListener('click', () => {

    Number(i += y);
    if(i > x) {
        i = 0;
    }

    contCont.scrollTo(i, 0);
});

backScrollerArrow.addEventListener('click', () => {
    Number(i -= y);
    if(i < 0) {
        i = 2380;
    }

    contCont.scrollTo(i, 0);
});

//Scroll down animations

window.onscroll = function()
{trendCitiesTextAnimationActivator()};

function trendCitiesTextAnimationActivator() {
    let trendCitiesText = document.querySelectorAll('.trend-cities-container h2');

    if(document.body.scrollTop > 900 || 
        document.documentElement.scrollTop > 900) {
            trendCitiesText.forEach(n => n.style.animationName = 'textLight');
        }
}

