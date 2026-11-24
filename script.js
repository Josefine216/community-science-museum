

const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    
    menuButton.textContent = isOpen ? '✕' : '☰';
});
