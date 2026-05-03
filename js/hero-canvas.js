/**
 * Hero Canvas — Animated algebraic curves
 * Draws lemniscates, logarithmic spirals, and parametric curves
 * with a subtle glow effect on a full-screen canvas.
 */

function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;
    let animationId;

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    /** Draw a parametric curve with glow */
    function drawCurve(points, color, alpha, lineWidth) {
        if (points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }

    /** Lemniscate of Bernoulli */
    function lemniscatePoints(cx, cy, a, rotation, steps) {
        const points = [];
        for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * Math.PI * 2;
            const cos2t = Math.cos(2 * t);
            if (cos2t < 0) continue;
            const r = a * Math.sqrt(cos2t);
            const x = r * Math.cos(t + rotation);
            const y = r * Math.sin(t + rotation);
            points.push([cx + x, cy + y]);
        }
        return points;
    }

    /** Logarithmic spiral */
    function spiralPoints(cx, cy, a, b, rotation, maxTheta, steps) {
        const points = [];
        for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * maxTheta;
            const r = a * Math.exp(b * theta);
            const x = r * Math.cos(theta + rotation);
            const y = r * Math.sin(theta + rotation);
            points.push([cx + x, cy + y]);
        }
        return points;
    }

    /** Rose curve r = a * cos(k * theta) */
    function rosePoints(cx, cy, a, k, rotation, steps) {
        const points = [];
        const maxTheta = k % 1 === 0 ? Math.PI * (k % 2 === 0 ? 2 : 1) : Math.PI * 4;
        for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * maxTheta;
            const r = a * Math.cos(k * theta);
            const x = r * Math.cos(theta + rotation);
            const y = r * Math.sin(theta + rotation);
            points.push([cx + x, cy + y]);
        }
        return points;
    }

    /** Subtle grid in perspective */
    function drawGrid() {
        const spacing = 60;
        const offsetX = (time * 8) % spacing;
        const offsetY = (time * 5) % spacing;

        ctx.strokeStyle = 'rgba(108, 92, 231, 0.03)';
        ctx.lineWidth = 0.5;

        for (let x = -spacing + offsetX; x < width + spacing; x += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        for (let y = -spacing + offsetY; y < height + spacing; y += spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }

    /** Floating particles */
    const particles = [];
    function initParticles(count) {
        particles.length = 0;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.5 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.3 + 0.05,
            });
        }
    }

    function drawParticles() {
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(162, 155, 254, ${p.alpha})`;
            ctx.fill();
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        time += 0.005;

        drawGrid();
        drawParticles();

        const cx = width / 2;
        const cy = height / 2;
        const scale = Math.min(width, height) * 0.3;

        // Lemniscate 1
        const lem1 = lemniscatePoints(cx, cy, scale, time * 0.3, 300);
        drawCurve(lem1, '#6c5ce7', 0.3, 1.5);

        // Lemniscate 2 (rotated)
        const lem2 = lemniscatePoints(cx, cy, scale * 0.7, time * 0.3 + Math.PI / 4, 300);
        drawCurve(lem2, '#a29bfe', 0.2, 1);

        // Spiral
        const sp1 = spiralPoints(
            cx + Math.sin(time) * 50,
            cy + Math.cos(time) * 30,
            2, 0.12, time * 0.5, Math.PI * 6, 400
        );
        drawCurve(sp1, '#00cec9', 0.15, 1);

        // Rose curve
        const rose = rosePoints(cx, cy, scale * 0.6, 3, time * 0.2, 400);
        drawCurve(rose, '#6c5ce7', 0.12, 0.8);

        // Center glow
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 0.5);
        gradient.addColorStop(0, 'rgba(108, 92, 231, 0.04)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles(40);
    draw();

    window.addEventListener('resize', () => {
        resize();
        initParticles(40);
    });

    return () => cancelAnimationFrame(animationId);
}
