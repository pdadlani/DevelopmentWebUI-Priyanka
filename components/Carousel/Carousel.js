// JS for Carousel

class Carousel {
    constructor(image) {
        this.image = image;
        this.images = document.querySelectorAll('.carousel img');
        // console.log(this.images);

        // create current index
        this.index = 0;

        // display current image
        this.images[this.index].style.display ='block';

        // reference to right and left button of carousel
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');

        // click handlers for right and left button
        this.rightButton.addEventListener('click', () => this.changeSlide(1));
        this.leftButton.addEventListener('click', () => this.changeSlide(-1));
    }

    changeSlide(n) {
        this.images[this.index].style.display = 'none';
        if (n===1) {
            this.index === (this.images.length-1) ? (this.index = 0) : this.index++;
        } else {
            this.index === 0 ? (this.index = this.images.length-1) : this.index--;
        }
        this.images[this.index].style.display = 'block';
    }
}


// animation

// 1. Reference to all images of carousel
let carouselImages = document.querySelectorAll('.carousel img');
// console.log(carouselImages);

// 2. iterate over the DOM NodeList (using .forEach()) and return new instance of Carousel with each image as parameter
carouselImages.forEach(image => new Carousel(image));





// // Current index for slides
// let slideIndex = 1;
// showSlides(slideIndex);

// // change slide
// function changeSlides(n) {
//     // console.log('change slides called with n of:' + n)
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.querySelectorAll(".carousel img");
//     // console.log(slides);
//     if (n > slides.length) {
//         slideIndex = 1
//     } else if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

// // set event listener for left button
// const leftButton = document.querySelector('.left-button');
// // console.log(leftButton);
// leftButton.addEventListener('click', () => changeSlides(-1));

// // set event listener for right button
// const rightButton = document.querySelector('.right-button');
// // console.log(rightButton);
// rightButton.addEventListener('click', () => changeSlides(1));


