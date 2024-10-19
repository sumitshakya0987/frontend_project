document.addEventListener('DOMContentLoaded', function () {
    const serviceBoxes = document.querySelectorAll('.service-box');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add a class for animation
                observer.unobserve(entry.target); // Stop observing once it has animated
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 100, // Offset from the trigger point
        once: false, // Whether animation should happen only once
    });
});