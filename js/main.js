/**
 * Main entry point
 * Initializes all modules and AOS library.
 * Loaded after the other scripts via regular <script> tags (no ES modules).
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero canvas animation
    initHeroCanvas();

    // Initialize navigation (smooth scroll, active state, mobile menu)
    initNavigation();

    // Initialize KaTeX math rendering
    initMathRender();

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            offset: 80,
            once: true,
            easing: 'ease-out-cubic',
        });
    }
});
