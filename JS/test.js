var controls = document.querySelectorAll('.btn-slide');
var slides = document.querySelectorAll('ul .scbanner__list-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    slides[currentSlide].style.opacity = 0;
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].style.opacity = 1;
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};
