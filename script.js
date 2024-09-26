const langBtn = document.querySelector('.header__language-btn');
const langList = document.querySelector('.header__language-list');

langBtn.addEventListener('click', function() {
    langList.classList.toggle('visibly-hidden');
});