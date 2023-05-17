
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


navbar.addEventListener('click', function() {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });




new ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
new ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
new ScrollReveal().reveal('.home-img, h1, .about-img', { origin: 'left' });
new ScrollReveal().reveal('.home-img, p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['a Student', 'a Gamer', 'an Artist'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});