let homeContainer = document.getElementById('home-container');
let homeRedCircle = document.getElementById('home-red-circle');
let homeText = document.querySelector('#home-container p');
let redCircleSunLights = document.getElementsByClassName('sunlights');

//red circle and Home text moves when hover

homeContainer.addEventListener('click', () => {

    location.assign('Home.html');
});

homeContainer.addEventListener('mouseover', () => {

        homeRedCircle.style.transform = 'translateX(' + '130px' + ')' + '' + 'rotate(' + '360deg' + ')';

        Array.from(redCircleSunLights).forEach(e => {

            e.style.height = '50px';
        });

        homeText.style.transform = 'translateX(' + '-100px' + ')';

        setTimeout(() => {
            
            homeText.style.color = '#000';
        }, 1500);
});
homeContainer.addEventListener('mouseout', () => {


    homeRedCircle.style.transform = 'initial';

    Array.from(redCircleSunLights).forEach(e => {

        e.style.height = '0px';
    });

    homeText.style.transform = 'initial';

    setTimeout(() => {
            
        homeText.style.color = '#fff';
    }, 1500);
});

