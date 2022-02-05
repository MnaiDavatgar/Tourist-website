//Up and Down arrow buttons of the behind page

let upArrow = document.getElementById('up-arrow-button-container');
let downArrow = document.getElementById('down-arrow-button-container');
let firstBehindTextContainer = document.getElementById('behind-page-first-text-container');
let secondBehindTextContainer = document.getElementById('behind-page-second-text-container');
let typingText = document.querySelector('#behind-page-second-text-container h2 span');
let typingTextContainer = document.getElementById('behind-page-second-text-container');
let rootClassName = document.querySelector(':root');
let baliText = document.getElementById('bali-text-container');
let main = document.querySelector('main');
let behindButton = document.getElementById('behind-page-button');
let backToInitialButton = document.getElementById('back-to-initial-button');
let navigationBar = document.querySelector('nav');
let topTextContainer = document.getElementById('top-text-container');
let footerSection = document.getElementById('footer-section');
var i = 0;

upArrow.addEventListener('click', () => {
    firstBehindTextContainer.style.animationName = 'behindTextUp';
    setTimeout(() => {secondBehindTextContainer.style.animationName = 'behindTextDown'}, 700);

    if(!i) {
        setTimeout(() => {
            firstTextTyping();
        }, 1000);
    }
});

downArrow.addEventListener('click', () => {
    secondBehindTextContainer.style.animationName = 'behindTextUp';
    setTimeout(() => {firstBehindTextContainer.style.animationName = 'behindTextDown'}, 700);
});

//Auto typing

setInterval(() => {
        let borderStyle = typingText.style.borderRight == 'none' ? '5px solid #ff0':'none';
    
        typingText.style.borderRight = borderStyle;
}, 1000);


function firstTextTyping() {
    const firstArray = ['D', 'i', 'v', 'i', 'n', 'g'];

    setTimeout(function() {

        typingText.textContent += firstArray[i];
        i++;

        if (i <= 5) {
        firstTextTyping();
        } else{
            setTimeout(() => {
                firstDeleter();
            }, 2000);
        }
    }, 300)
}

function firstDeleter() {
    if(typingText.textContent) {
        
        setTimeout(() => {
            typingText.textContent = typingText.textContent.slice(0, typingText.textContent.length - 1);

            firstDeleter(); 

            if(typingText.textContent == 'D') {
                setTimeout(() => {
                    i = 0;
                    secondTextTyping();
                }, 1000);
            }
            if(typingText.textContent == 'L') {
                setTimeout(() => {
                    i = 0;
                    thirdTextTyping();
                }, 1000);
            } 
        }, 300);
    }
}

function secondTextTyping() {
    const secondArray = ['L', 'o', 'c', 'a', 'l', ' ', 'F', 'o', 'o', 'd'];

    setTimeout(function() {

        typingText.textContent += secondArray[i];
        i++;

        if (i <= 9) {
            secondTextTyping();
        } else{
            setTimeout(() => {
                firstDeleter();
            }, 1000);
        }
    }, 300)
}

function thirdTextTyping() {
    const thirdArray = ['B', 'a', 'l', 'i', '!'];

    setTimeout(function() {

        typingText.textContent += thirdArray[i];
        i++;

        if (i <= 4) {
            thirdTextTyping();
        }
    }, 300)
}
/* =================== Main width increasing animation ==================== */

behindButton.addEventListener('click', () => {

    main.style.animationName = 'mainWider';
    topTextContainer.style.textAlign = 'center';
    baliText.style.display = 'initial';
    footerSection.style.display = 'initial';
    backToInitialButton.style.display = 'initial';
});
backToInitialButton.addEventListener('click', () => {

    main.style.animationName = 'mainShrink';
    topTextContainer.style.textAlign = 'left';
    baliText.style.display = 'none';
    footerSection.style.display = 'none';
    backToInitialButton.style.display = 'none';
});

/* ================== Navigation bar height scroll animation ================== */

main.onscroll = function() {

    let divingHeading = document.getElementById('diving-heading');

    navigationBar.style.top = 'initial';
    navigationBar.style.bottom = '0';

    if(main.scrollTop > 10) {

        if(window.innerWidth > 1840) {

            rootClassName.style.setProperty('--header-height', '150px');
        }

        rootClassName.style.setProperty('--header-height', '60px');
        rootClassName.style.setProperty('--header-box-shadow', 'none');
        navigationBar.style.borderBottom = 'none';
        navigationBar.style.borderTop = '2px solid #000';

    } else{ 
        if(window.innerWidth > 1840) {

            rootClassName.style.setProperty('--header-height', '250px');
        }

        rootClassName.style.setProperty('--header-height', '100px');
        rootClassName.style.setProperty('--header-box-shadow', '0 -5px 10px #000');
    }
    if(main.scrollTop > 400) {

        divingHeading.style.animationName = 'gradientAnimation';
    }
    if(main.scrollTop > 1200) {
        navigationBar.style.bottom = 'initial';
        navigationBar.style.top = '0';
        navigationBar.style.borderBottom = '2px solid #000';
        navigationBar.style.borderTop = 'none';
    }
}

/* ======================== Zoom menu ======================== */
let zoomMenuStayKey = [];
let menuCountriesItem = document.getElementById('country-item');
let zoomMenu = document.getElementById('zoom-menu');
let zoomMenuItems = document.querySelectorAll('#zoom-menu-list li');

menuCountriesItem.addEventListener('mouseover', () => {
    zoomMenu.style.display = 'initial';
});
menuCountriesItem.addEventListener('mouseout', () => {
    setTimeout(zoomNo, 100);
});
zoomMenu.addEventListener('mouseover', () => {
    zoomMenuStayKey.push(1);
});
zoomMenu.addEventListener('mouseout', () => {
    zoomMenuStayKey.pop();
    setTimeout(zoomNo, 10);
});
zoomMenuItems.forEach(n => n.addEventListener('click', () => {
    zoomMenu.style.display = 'none';
    zoomMenuStayKey.pop();
}));
function zoomNo() {
    if (zoomMenuStayKey.length > 0) {
        zoomMenu.style.display = 'initial';
    } else {
        zoomMenu.style.display = 'none';
    }
}
/* ===================== Colored bubbles ======================= */

let bubbles = document.getElementsByClassName('bubbles');

console.log(bubbles);

const backGroundColors = ['hsla(225, 100%, 27%, .7)', 'hsl(336, 100%, 50%, .7)', 'hsl(140, 50%, 47%, .7)', 'hsl(60, 80%, 52%, .7)'];

window.onload = function() {

    Array.from(bubbles).forEach(function(element) {

        element.style.backgroundColor = backGroundColors[randomNum(0, 3)];
        
    });    
}

function bubbleMoover() {

    for(let i = 0; i < bubbles.length; i++) {

        let initialTop = [0, 400, 100, 300];

        if(!bubbles[3].style.top) {

            bubbles[i].style.top = initialTop[i] + 'px';
        } else {

            if(parseInt(bubbles[0].style.top) > 500) {

                bubbles[i].style.top = parseInt(bubbles[i].style.top) - 1020 + 'px';
                Array.from(bubbles).forEach(function(element) {

                    element.style.backgroundColor = backGroundColors[randomNum(0, 3)];
                    
                });
            } else {

                bubbles[i].style.top = parseInt(bubbles[i].style.top) + 1 + 'px';
            }
        }
    }
    requestAnimationFrame(bubbleMoover);
}

bubbleMoover();

function randomNum(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}