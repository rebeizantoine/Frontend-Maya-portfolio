// Burger menu 

function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
}

var btnMenu = document.getElementsByClassName("burger-menu");
var body = document.body
for (var i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
    });
}

// Animation of the hero illustration

document.addEventListener('DOMContentLoaded', function () {
    const heroIllustration = document.querySelector('.hero-illustration');

    function animateHeroIllustration() {
        heroIllustration.classList.add('illustration-fading');
    }

    animateHeroIllustration();
});

// Name being typed in hero section 

const spanName = document.querySelector('.span-name');
const nameText = "Maya Atiah";
let index = 0;

function type() {
    if (index < nameText.length) {
        spanName.textContent += nameText.charAt(index);
        index++;
        setTimeout(type, 200);
    }
}

window.addEventListener('load', function () {
    type();
});


// Project pictures appear when scrolling

const projectPictures = document.querySelectorAll('.project-picture');

function checkScroll() {
    projectPictures.forEach((projectPicture) => {
        const distanceToTop = projectPicture.getBoundingClientRect().top; // get the distance from the top of the viewport to each project picture
        const windowHeight = window.innerHeight;

        if (distanceToTop < windowHeight - 100) { // check the distance to know when to begin the animation 
            projectPicture.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); // check on page load 

function throttle(func, wait) { // throttle function improves performance as it controls/limits how often it runs
    let timeout; // variable to keep track of time 
    return function () { // new function that controls how often func can be called
        const context = this; // store the value of this in a variable (to keep it when calling func)
        const args = arguments; // store any arguments passed to our new function in a variable (to pass them to func later)
        if (!timeout) { // check if func is not currently waiting to be called
            timeout = setTimeout(() => { // schedule func to be called after wait time 
                timeout = null; // reset to allow func to be called again 
                func.apply(context, args);
            }, wait);
        }
    };
}

window.addEventListener('scroll', throttle(checkScroll, 100));
