/**
 * Navigation module
 * Handles smooth scrolling, active link state via IntersectionObserver,
 * navbar scroll effect, and mobile menu toggle.
 */

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar__link');
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__links');
    const sections = document.querySelectorAll('section[id]');

    // --- Smooth scroll ---
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu
                if (menu.classList.contains('open')) {
                    menu.classList.remove('open');
                    toggle.classList.remove('open');
                }
            }
        });
    });

    // --- Active state via IntersectionObserver ---
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // --- Navbar scroll effect ---
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });

    // --- Mobile menu toggle ---
    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            menu.classList.toggle('open');
        });
    }
}
