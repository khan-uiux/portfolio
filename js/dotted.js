let mainBodyEl = document.querySelector('#mainBody');

let circle = document.createElement('div');
circle.classList.add('dotCircle');
circle.style.position = 'absolute';
circle.style.pointerEvents = 'none'

mainBodyEl.appendChild(circle)

mainBodyEl.addEventListener('mousemove', (e) => {
    let xPosetion = e.pageX;
    let yPosetion = e.pageY;

    circle.style.left = xPosetion + 'px';
    circle.style.top = yPosetion + 'px';

})

let menuIcon = document.querySelector('.menuIcon');
let closemenu = document.querySelector('.closemenu');
let navBar = document.querySelector('#navBar');

menuIcon.addEventListener('click', () => {
    navBar.style.left = "0px";
})

closemenu.addEventListener('click', () => {
    navBar.style.left = "-425px";
})