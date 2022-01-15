//Slider menu for menu responsivness

let openButton = document.getElementById('slider-menu-open-container');
let topLayer = document.getElementById('top-layer');
let middleLayer = document.getElementById('middle-layer');
let bottomLayer = document.getElementById('bottom-layer');
let slideMenu = document.getElementById('slider-menu-container');
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

let zoomMenuItems = document.querySelectorAll('#zoom-menu-list li');
let zoomMenuContainer = document.getElementById('zoom-menu');
let menuCountriesItem = document.getElementById('menu-countries-item');
let zoomMenuStayKey = [];
menuCountriesItem.addEventListener('mouseover', () => {
        zoomMenu.style.display = 'initial';
});
menuCountriesItem.addEventListener('mouseout', () => {
    setTimeout(zoomNo, 100);
});
zoomMenuContainer.addEventListener('mouseover', () => {
    zoomMenuStayKey.push(1);
});
zoomMenuContainer.addEventListener('mouseout', () => {
    zoomMenuStayKey.pop();
    setTimeout(zoomNo, 10);
});
zoomMenuItems.forEach(n => n.addEventListener('click', () => {
    zoomMenu.style.display = 'none';
    zoomMenuStayKey.pop();
}));
function zoomNo() {
    if(zoomMenuStayKey.length > 0){
        zoomMenu.style.display = 'initial';
    } else{
        zoomMenu.style.display = 'none';   
    }
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

//Making the image slider(because i didnt want to use "%" for images width so i used "px" instead)

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
    let trendCities = document.querySelectorAll('.trend-cities-container img');

    if(document.body.scrollTop > 900 || 
        document.documentElement.scrollTop > 900) {
            trendCitiesText.forEach(n => n.style.animationName = 'textLight');
            trendCities.forEach(n => n.style.animationName = 'imageLight');
        }
}

