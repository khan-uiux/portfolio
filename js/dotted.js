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

// setHeader

let headerEl = document.getElementById('header')

const fixHeader = (e) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) {
            headerEl.classList.add('fixHeader')
        } else {
            headerEl.classList.remove('fixHeader')
        }
    })
}

fixHeader()


// social icons

let menuIcon = document.querySelector('.menuIcon');
let closemenu = document.querySelector('.closemenu');
let navBar = document.querySelector('#navBar');

menuIcon.addEventListener('click', () => {
    navBar.style.left = "0px";
})

closemenu.addEventListener('click', () => {
    navBar.style.left = "-425px";
})

const portfolioStrip = () => {
    let folioMainEl = document.createElement('div');
    folioMainEl.classList.add('folioMain');

    // generate links

    let dribbble = document.createElement('div');
    let dribbbleAnchor = document.createElement('a');
    let dribbbleImage = document.createElement('img');
    dribbbleImage.src = "images/dribble.png";
    dribbbleAnchor.href = "https://dribbble.com/irfanUIUXDesigner";
    dribbbleAnchor.setAttribute('target', '_blank');
    dribbble.classList.add('portfolioLinks');

    dribbble.appendChild(dribbbleAnchor);
    dribbbleAnchor.appendChild(dribbbleImage);

    // behance

    let behance = document.createElement('div');
    let behanceAnchor = document.createElement('a');
    let behanceImage = document.createElement('img');
    behanceImage.src = "images/behance2.png";
    behanceAnchor.href = "https://www.behance.net/irfanoptimaf0f";
    behanceAnchor.setAttribute('target', '_blank');
    behance.classList.add('portfolioLinks');

    behance.appendChild(behanceAnchor);
    behanceAnchor.appendChild(behanceImage);

    // naukri

    let naukri = document.createElement('div');
    let naukriAnchor = document.createElement('a');
    let naukriImage = document.createElement('img');
    naukriImage.src = "images/naukri2.png";
    naukriAnchor.href = "https://www.naukri.com/mnjuser/profile?id=&altresid";
    naukriAnchor.setAttribute('target', '_blank');
    naukri.classList.add('portfolioLinks');

    naukri.appendChild(naukriAnchor);
    naukriAnchor.appendChild(naukriImage);

    // linkedin

    let linkedin = document.createElement('div');
    let linkedinAnchor = document.createElement('a');
    let linkedinImage = document.createElement('img');
    linkedinImage.src = "images/linkedin2.png";
    linkedinAnchor.href = "https://www.linkedin.com/in/irfanoptimistic/";
    linkedinAnchor.setAttribute('target', '_blank');
    linkedin.classList.add('portfolioLinks');

    linkedin.appendChild(linkedinAnchor);
    linkedinAnchor.appendChild(linkedinImage);

    mainBodyEl.appendChild(folioMainEl);
    folioMainEl.appendChild(dribbble);
    folioMainEl.appendChild(behance);
    folioMainEl.appendChild(naukri);
    folioMainEl.appendChild(linkedin);


    window.addEventListener('scroll', () =>{
        let footer = document.querySelector('footer');
        let footerTop = footer.getBoundingClientRect().top + window.scrollY;
        let scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= footerTop) {
          folioMainEl.style.display = "none"
        } else {
            folioMainEl.style.display = "block"
            folioMainEl.style.transform = "translateY(-5px)"
        }
    })
}

portfolioStrip();