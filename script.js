const hamburger = document.getElementById('navbar-hamburger');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
const hamburgerNavbar = document.getElementById('hamburgerNavbar');

hamburger.addEventListener('click', openHamburgerMenu);
close.addEventListener('click', closeHamburgerMenu);

function openHamburgerMenu() {
    close.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
    hamburgerNavbar.classList.toggle('hidden');

    // This should close sections
    toggleSections();
}

function closeHamburgerMenu() {
    close.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    hamburgerNavbar.classList.toggle('hidden');
    navbar.classList.toggle('hidden');

    // This should close sections
    toggleSections();
}

function toggleSections() {
    const sections = document.getElementsByTagName('section');
    for(let section of sections) {
        section.classList.toggle('hidden');
    }
}
