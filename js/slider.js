// JavaScript for Slider functionality
const slides = [
    {
        heading: 'Invent Model provides You Better solution',
        buttonText: 'Explore more',
        buttonLink: '#',
        videoSrc: 'Images/video2.mp4',
    },
    {
        heading: 'Innovate with Us for a Brighter Tomorrow',
        buttonText: 'Learn More',
        buttonLink: '#',
        videoSrc: 'Images/video.mp4',
    },
];

let currentSlide = 0;

const updateSlide = () => {
    const slideWrapper = document.querySelector('.slider-wrapper');
    const heading = document.getElementById('slide-heading');
    const buttonText = document.getElementById('slide-button-text');
    const buttonLink = document.getElementById('slide-button-link');
    
    slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    heading.textContent = slides[currentSlide].heading;
    buttonText.textContent = slides[currentSlide].buttonText;
    buttonLink.href = slides[currentSlide].buttonLink;
};

document.getElementById('nextButton1').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.getElementById('prevButton1').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Initial slide setup
updateSlide();
