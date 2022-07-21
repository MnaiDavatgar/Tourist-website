let icelandLeftText = document.getElementById('left-big-text');
let icelandRightText = document.getElementById('right-big-text');
let icelandMobileContainer = document.getElementById('iceland-mobile-container');
let seeMoreButton = document.getElementById('see-more-button');
let headerContainer = document.getElementById('header-container');
let bigIcelandBox = document.getElementById('big-iceland-box');
let icelandTextsTopLimit;
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const vw = window.innerWidth;

//Some responsiveness for iceland big text

if(vw < 600) {

    if(vw < 515) {
        
        icelandRightText.style.fontSize = '50px'
        icelandLeftText.style.fontSize = '50px';
        icelandLeftText.style.top = '30%';
        icelandRightText.style.top = '55%';
        icelandTextsTopLimit = 13;
    } else{

        icelandRightText.style.fontSize = '70px'
        icelandLeftText.style.fontSize = '70px';
        icelandLeftText.style.top = '45%';
        icelandRightText.style.top = '60%';
        icelandTextsTopLimit = 17;
    }
} else if(vw < 1055) {

    icelandLeftText.style.fontSize = '100px';
    icelandRightText.style.fontSize = '100px';
    icelandLeftText.style.top = '20%';
    icelandRightText.style.top = '30%';
} else if(vw > 1840) {

    icelandLeftText.style.fontSize = '200px';
    icelandRightText.style.fontSize = '200px';
    icelandLeftText.style.top = '30%';
    icelandRightText.style.top = '55%';
    icelandTextsTopLimit = 3;
    } else {

        icelandLeftText.style.fontSize = '144px';
        icelandRightText.style.fontSize = '144px';
        icelandLeftText.style.top = '25%';
        icelandRightText.style.top = '45%';
        icelandTextsTopLimit = 3;
    }

seeMoreButton.addEventListener('click', () => {

    icelandTextFunction();

    setTimeout(() => {

        bigIcelandBox.style.display = 'none';
        seeMoreButton.style.display = 'none';
        footer.style.display = 'initial';
        main.style.height = '100%';
        main.style.paddingBottom = '4rem';
    }, 500);
});;

function icelandTextFunction() {

    if(vw < 600) {
        
        icelandMobileContainer.style.display = 'block';
    }
    if(parseInt(icelandLeftText.style.top) > icelandTextsTopLimit) {

        icelandLeftText.style.top = parseInt(icelandLeftText.style.top) - 1 + '%';
    } else{
        icelandLeftText.style.position = 'fixed';
    }
    if(parseInt(icelandRightText.style.top) > icelandTextsTopLimit) {

        icelandRightText.style.top = parseInt(icelandRightText.style.top) - 1 + '%';
    } else{
        icelandRightText.style.position = 'fixed';
    }
    if(parseInt(icelandLeftText.style.fontSize) > 50) {

     icelandLeftText.style.fontSize = parseInt(icelandLeftText.style.fontSize) - 1 + 'px';
     icelandRightText.style.fontSize = parseInt(icelandRightText.style.fontSize) - 1 + 'px';
 }
    if(icelandRightText.style.position === 'fixed') {

        headerContainer.style.position = 'fixed';
        icelandMobileContainer.style.position = 'fixed';
    }
    requestAnimationFrame(icelandTextFunction);
}
//icelandTextFunction();

let attractionPictures = document.querySelectorAll('.attraction-pictures');
let cargoPicture = document.querySelector('#cargo-picture h3');

console.log(cargoPicture);

attractionPictures.forEach(n => n.addEventListener('mouseover', (e) => {

    e.target.children[0].children[0].style.display = 'initial';
    e.target.children[0].style.height = '25%';
}));
attractionPictures.forEach(n => n.addEventListener('mouseout', (e) => {
    
    e.target.children[0].children[0].style.display = 'none';
    e.target.children[0].style.height = '0';
}));

//Zoom menu

let zoomMenu = document.getElementById('zoom-menu');
let menuCountriesItem = document.getElementById('countries-item');
let zoomMenuItems = document.querySelectorAll('#zoom-menu-list li');
let zoomMenuContainer = document.getElementById('zoom-menu');
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