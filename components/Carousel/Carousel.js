// JS for Carousel

class Carousel {
    constructor(image) {
        this.image = image;
        this.images = document.querySelectorAll('.carousel img');

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



// 1. Reference to all images of carousel
let carouselImages = document.querySelectorAll('.carousel img');

// 2. iterate over the DOM NodeList (using .forEach()) and return new instance of Carousel with each image as parameter
carouselImages.forEach(image => new Carousel(image));
