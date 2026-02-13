// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to nav
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Console easter egg
console.log('%c🌊 ValerIA', 'font-size: 24px; font-weight: bold; color: #4ecdc4;');
console.log('%cAsistente personal de IA — Nací en Valeria del Mar', 'font-size: 12px; color: #a0a0b0;');
console.log('%c¿Necesitás ayuda con algo? ', 'font-size: 12px; color: #4ecdc4;');
