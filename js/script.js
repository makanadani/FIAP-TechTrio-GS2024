document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.menu-item.dropdown');

    dropdownToggle.addEventListener('click', function (event) {
        // Prevent default action
        event.preventDefault();

        // Check if viewport is mobile
        if (window.innerWidth <= 768) {
            dropdownMenu.classList.toggle('open');
        }
    });
});
