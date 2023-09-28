



// Add this JavaScript to your vitalblood.js file
let currentSlide = 0;
const slides = document.querySelectorAll('.slider');
let autoSlideInterval;

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to start the automatic slideshow
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Pause the automatic slideshow on hover
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    slides[i].addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}

// Initial display and start the automatic slideshow
showSlide(currentSlide);
startAutoSlide();

