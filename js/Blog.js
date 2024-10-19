const slider = document.querySelector('.blog-slider');
let isHovered = false;
let animationDuration = '15s'; // Default duration

// Adjust animation duration based on screen size
function updateAnimationDuration() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
        animationDuration = '10s'; // Slower for mobile
    } else if (screenWidth <= 768) {
        animationDuration = '8s'; // Slightly slower for tablets
    } else {
        animationDuration = '8s'; // Default for larger screens
    }

    slider.style.animationDuration = animationDuration;
}

// Call updateAnimationDuration on page load
updateAnimationDuration();

// Add hover events to pause and resume the animation
slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
    isHovered = true;
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
    isHovered = false;
});

// Adjust the animation duration on window resize
window.addEventListener('resize', updateAnimationDuration);
