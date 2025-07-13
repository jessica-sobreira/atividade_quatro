document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerIcon && navMenu) {
        hamburgerIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});