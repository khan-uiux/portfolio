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

const myArray = ["UI UX Designer", "Front-end Developer", "Web Developer", "Web Designer"];
const changeMeEl = document.querySelector('.changeMe');

let letterIndex = 0;
let wordIndex = 0;
let currentWord = "";
let intervalID;

function typeWord() {
    if (letterIndex < myArray[wordIndex].length) {
        currentWord += myArray[wordIndex][letterIndex];
        changeMeEl.textContent = currentWord; 
        letterIndex++; 
    } else {
        clearInterval(intervalID);
        
        setTimeout(() => {
            letterIndex = 0;
            currentWord = "";
            wordIndex = (wordIndex + 1) % myArray.length;
            intervalID = setInterval(typeWord, 200);
        }, 1000);
    }
}

intervalID = setInterval(typeWord, 150); 