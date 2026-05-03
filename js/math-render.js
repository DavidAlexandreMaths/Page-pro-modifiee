/**
 * Math Render module
 * Uses KaTeX to render LaTeX expressions found in the DOM.
 * Elements with class "math-inline" are rendered inline.
 * Elements with class "math-display" are rendered as block display.
 */

function initMathRender() {
    if (typeof katex === 'undefined') {
        console.warn('[math-render] KaTeX not loaded — formulas will show as raw LaTeX.');
        return;
    }

    // Render inline math
    document.querySelectorAll('.math-inline').forEach(el => {
        try {
            katex.render(el.textContent, el, {
                throwOnError: false,
                displayMode: false,
            });
        } catch (err) {
            console.error('[math-render] Inline render error:', err);
        }
    });

    // Render display math
    document.querySelectorAll('.math-display').forEach(el => {
        try {
            katex.render(el.textContent, el, {
                throwOnError: false,
                displayMode: true,
            });
        } catch (err) {
            console.error('[math-render] Display render error:', err);
        }
    });
}
