console.log('JS file loaded');

document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.getElementById('hamburger');
        const nav = document.querySelector('.main-nav');

        hamburger.addEventListener('click', function () {
                nav.classList.toggle('active');
                hamburger.classList.toggle('active');
        });
});
