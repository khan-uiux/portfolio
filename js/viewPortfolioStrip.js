let mainBodyEl = document.querySelector('#mainBody');

const portfolioStrip = () => {
    let folioMainEl = document.createElement('div');
    folioMainEl.classList.add('folioMain');
    folioMainEl.textContent = "This is my portfolio section.";
    mainBodyEl.appendChild(folioMainEl)
}

portfolioStrip();