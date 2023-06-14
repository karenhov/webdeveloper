window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menuItems'),
    homburger = document.querySelector('.homburger');

    homburger.addEventListener('click', () => {
        homburger.classList.toggle('homburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItems.forEach(items => {
        items.addEventListener('click', () => {
            homburger.classList.toggle('homburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})