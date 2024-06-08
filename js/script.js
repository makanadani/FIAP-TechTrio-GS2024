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
        event.preventDefault();
        if (window.innerWidth <= 768) {
            dropdownMenu.classList.toggle('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Cadastro realizado com sucesso!');
                registerForm.reset();
            } else {
                alert('As senhas não coincidem.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
