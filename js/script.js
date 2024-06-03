document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});
