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

let reviewTextEl = document.querySelector('#reviewText');
let authorNameEl = document.querySelector('#authorName');
let reviewContainerEl = document.querySelector('#reviewContainer');
let authorPhotoEl = document.querySelector('#authorPhoto');
let authorDesignationEl = document.querySelector('#authorDesignation')

let reviews = [
  {
    text: "Irfan consistently brings a creative touch to projects. His professionalism, punctuality, and teamwork make him a strong asset to any development team.",
    author: "Himanshu Tyagi",
    image : "images/himanshu.png",
    designation : "Marketing Manager"
  },
  {
    text: "Working with Irfan was very smooth. He’s skilled in UI/UX and frontend, and always responsible about deadlines and revisions.",
    author: "Mohd Javed",
    image : "images/mohd-javed.png",
    designation : "Sr. Software Developer"
  },
  {
    text: "Irfan consistently brings a creative touch to projects. His professionalism, punctuality, and teamwork make him a strong asset to any development team.",
    author: "Ranjeet Kumar",
    image : "images/ranjeet.png",
    designation : "CEO Haut IT Solutions"
  }
];

let current = 0;

function showReview(index) {
  reviewContainerEl.classList.remove('slide-active');
  reviewContainerEl.classList.add('slide-enter');

  setTimeout(() => {
    reviewTextEl.innerText = `"${reviews[index].text}"`;
    authorNameEl.innerText = `${reviews[index].author}`;
    authorPhotoEl.src = `${reviews[index].image}`;
    authorDesignationEl.innerText = `${reviews[index].designation}`;

    // Force reflow to restart CSS animation
    void reviewContainerEl.offsetWidth;

    reviewContainerEl.classList.remove('slide-enter');
    reviewContainerEl.classList.add('slide-active');
  }, 400);
}

document.getElementById('nextReview').addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  showReview(current);
});

document.getElementById('preReview').addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showReview(current);
});

// Initial render
showReview(current);

