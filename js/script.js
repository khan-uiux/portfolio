
// collapse

let collapseEl = document.querySelector('.collapse');
let collapseHeaderEl = document.querySelectorAll('.collapseHeader');
let arrowEL = document.querySelector('.arrow')

collapseHeaderEl.forEach(header => {
    header.addEventListener('click', () => {
        const parentCollapse = header.closest('.collapse');
        const arrowImg = header.querySelector('img');

        // Close all other collapses
        document.querySelectorAll('.collapse').forEach(collapse => {
            const img = collapse.querySelector('img');

            if (collapse !== parentCollapse) {
                collapse.classList.remove('open');
                if (img) img.src = "images/arrow.png"; // default arrow
            }
        });

        // Toggle current one
        parentCollapse.classList.toggle('open');

        // Change arrow image accordingly
        if (parentCollapse.classList.contains('open')) {
            arrowImg.src = "images/arrow-down.png";
        } else {
            arrowImg.src = "images/arrow.png";
        }
    });
});


// reviews