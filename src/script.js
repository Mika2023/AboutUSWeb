const burger_nav = document.querySelector(".burger")
const slide_bar_menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card')

function active_slidebar(){
    slide_bar_menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

burger_nav.addEventListener('click', active_slidebar);
overlay.addEventListener('click', active_slidebar);

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    })
});

