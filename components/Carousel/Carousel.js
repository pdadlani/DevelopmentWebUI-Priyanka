// Styling for Carousel

// Current index for slides
let slideIndex = 1;
showSlides(slideIndex);

// change slide
function changeSlides(n) {
    // console.log('change slides called with n of:' + n)
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".carousel img");
    // console.log(slides);
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// set event listener for left button
const leftButton = document.querySelector('.left-button');
// console.log(leftButton);
leftButton.addEventListener('click', () => changeSlides(-1));

// set event listener for right button
const rightButton = document.querySelector('.right-button');
// console.log(rightButton);
rightButton.addEventListener('click', () => changeSlides(1));


