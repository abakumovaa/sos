// Выпадающее меню

const langBtn = document.querySelector('.header__language-btn');
const langList = document.querySelector('.header__language-list');

langBtn.addEventListener('click', function() {
    langList.classList.toggle('visibly-hidden');
});

// Слайдер about

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slider__image');
const bottom = document.querySelector('.slider__container-bottom');

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination () {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide () {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide () {
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}


addPagination();
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", previousSlide);

// Аккордеон

const accordions = document.querySelectorAll(".accordion__container");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active-accordion");
    })
})
