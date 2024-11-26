// Выпадающее меню

const langBtn = document.querySelector('.language__button');
const langList = document.querySelector('.language__list');
const langIcon = document.querySelector('.language__icon');

langIcon.addEventListener('click', function() {
    langList.classList.toggle('visibly-hidden');
});

langBtn.addEventListener('click', function() {
    langList.classList.toggle('visibly-hidden');
});

document.querySelector('.story__icon').addEventListener('click', function () {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });

// Слайдер about

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slider__image');
const bottom = document.querySelector('.slider__bottom');

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

// Скролл секции, убрала пока что его

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');
//     let currentSection = 0;
//     let isScrolling = false;

//     function scrollToSection(index) {
//         isScrolling = true;
//         sections[index].scrollIntoView({ behavior: 'smooth' });

//         setTimeout(() => {
//             isScrolling = false;
//         }, 1000);
//     }

//     function handleScroll(event) {
//         if (isScrolling) return;
//         const delta = event.deltaY || -event.wheelDelta || event.detail;
        
//         if (delta > 0) {
//             if (currentSection < sections.length - 1) {
//                 currentSection++;
//                 scrollToSection(currentSection);
//             }
//         } else {
//             if (currentSection > 0) {
//                 currentSection--;
//                 scrollToSection(currentSection);
//             }
//         }
//     }

//     window.addEventListener('wheel', handleScroll);
//     window.addEventListener('touchmove', handleScroll);
// });

// Всплывающее меню 

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu__button');
    const navPopup = document.querySelector('.header__popup');
    
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navPopup.classList.toggle('active-popup');
    });

    const popupLinks = document.querySelectorAll('.popup__link');
    popupLinks.forEach(link => {
        link.addEventListener('click', () => {
            navPopup.classList.remove('active-popup');
        });
    });

    document.addEventListener('click', function(e) {
        if (!navPopup.contains(e.target) && navPopup.classList.contains('active-popup')) {
            navPopup.classList.remove('active-popup');
        }
    });
});