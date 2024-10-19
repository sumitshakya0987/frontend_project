const slides1 = [
    [
        { src: 'Images/Informatica_mdm_csaas.jpg', alt: 'Informatica MDM'  },
        { src: 'Images/iics.jpg', alt: 'Informatica MDM Cloud SaaS' },
        { src: 'Images/imdm.jpg', alt: 'Informatica MDM Services' },
        { src: 'Images/manual-testing.png', alt: 'Manual Testing' },
        { src: 'Images/react.png', alt: 'ReactJS' },
        { src: 'Images/iit.png', alt: 'IIT Delhi' },
    ],
    [
        { src: 'Images/react.png', alt: 'MERN Stack' },
        { src: 'Images/react.png', alt: 'Android Development' },
        { src: 'Images/react.png', alt: 'iOS Development' },
        { src: 'Images/react.png', alt: 'Manual Testing' },
        { src: 'Images/react.png', alt: 'ReactJS' },
        { src: 'Images/react.png', alt: 'IIT Delhi' },
    ],
    [
        { src: 'Images/iit.png', alt: 'Cloud Technology' },
        { src: 'Images/iit.png', alt: 'DevOps' },
        { src: 'Images/iit.png', alt: 'iOS Development' },
        { src: 'Images/iit.png', alt: 'Manual Testing' },
        { src: 'Images/iit.png', alt: 'ReactJS' },
        { src: 'Images/iit.png', alt: 'IIT Delhi' },
    ]
];

let currentSlide1 = 0;

// Function to render the current slide
function renderSlide() {
    const slideContainer = document.getElementById('slide');
    slideContainer.innerHTML = '';

    slides1[currentSlide1].forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
        slideContainer.appendChild(gridItem);
    });

    // Update button states and styles
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.disabled = currentSlide1 === 0;
    nextButton.disabled = currentSlide1 === slides1.length - 1;

    // Change button styles based on their state
    if (currentSlide1 === 0) {
        prevButton.classList.add('disabled');
        prevButton.classList.remove('enabled');
    } else {
        prevButton.classList.remove('disabled');
        prevButton.classList.add('enabled');
    }

    if (currentSlide1 === slides1.length - 1) {
        nextButton.classList.add('disabled');
        nextButton.classList.remove('enabled');
    } else {
        nextButton.classList.remove('disabled');
        nextButton.classList.add('enabled');
    }
}

// Function to handle the next slide
function handleNextSlide() {
    if (currentSlide1 < slides1.length - 1) {
        currentSlide1++;
        renderSlide();
    }
}

// Function to handle the previous slide
function handlePrevSlide() {
    if (currentSlide1 > 0) {
        currentSlide1--;
        renderSlide();   
    }
}
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 100, // Offset from the trigger point
        once: false, // Whether animation should happen only once
    });
});

// Event listeners for buttons
document.getElementById('nextButton').addEventListener('click', handleNextSlide);
document.getElementById('prevButton').addEventListener('click', handlePrevSlide);

// Initial render
renderSlide();
