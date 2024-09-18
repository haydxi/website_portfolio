// Scroll animation for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
AOS.init({
    duration: 1200, // Duración de las animaciones (en milisegundos)
});
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
