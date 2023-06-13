window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menu_items = document.querySelectorAll('.menu_items'),
    homburger = document.querySelector('.homburger');

    homburger.addEventListener('click', () => {
        homburger.classList.toggle('homburger_active');
        menu.classList.toggle('menu_active');
    });

    menu_items.forEach(items => {
        menu_items.addEventListener('click', () => {
            homburger.classList.toggle('homburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})