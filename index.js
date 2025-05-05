let badgeSectionEl = document.querySelector('.badgeSection');
let AboutUsLeftEl = document.querySelector('.leftDesign');

const generateMiniElement = () => {
    const topDot = document.createElement('div');
    topDot.classList.add('topDot');

    const bottompDot = document.createElement('div');
    bottompDot.classList.add('bottompDot');

    const secondRect = document.createElement('div');
    secondRect.classList.add('secondRect');

    badgeSectionEl.appendChild(topDot);
    badgeSectionEl.appendChild(bottompDot);

    AboutUsLeftEl.appendChild(secondRect)
}

generateMiniElement()