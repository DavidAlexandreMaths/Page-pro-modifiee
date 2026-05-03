# 🏗️ Architecture Technique

> Description de l'architecture du site, module par module.

---

## Principes

1. **Zéro build** — Pas de bundler, pas de npm
2. **ES Modules natifs** — `import/export` natifs du navigateur
3. **CDN pour les libs** — KaTeX, AOS, Google Fonts
4. **Single Page** — Navigation par ancres dans `index.html`

---

## Fichiers

### `index.html`

Structure sémantique HTML5 :
- `<nav>` — Navigation fixe glassmorphism
- `<section#hero>` — Canvas animé + titre
- `<section#about>` — Présentation + timeline
- `<section#research>` — Axes de recherche avec KaTeX
- `<section#teaching>` — Médiation didactique
- `<section#publications>` — Publications académiques
- `<section#contact>` — Contact
- `<footer>` — Crédits

### `css/style.css`

Organisation :
1. Custom Properties (variables couleurs, fonts, spacings)
2. Reset & Base
3. Typography
4. Navigation
5. Sections (hero, about, research, teaching, publications, contact)
6. Components (cards, tags, timeline)
7. Animations
8. Media Queries

### Modules JS

| Module | Rôle |
|---|---|
| `main.js` | Point d'entrée, init AOS et modules |
| `hero-canvas.js` | Courbes algébriques animées (lemniscate, spirales) |
| `navigation.js` | Smooth scroll, active state, mobile menu |
| `math-render.js` | Rendu KaTeX des expressions LaTeX |

---

## CDN

| Lib | Fichiers |
|---|---|
| KaTeX 0.16.x | `katex.min.css`, `katex.min.js`, `auto-render.min.js` |
| AOS 2.3.x | `aos.css`, `aos.js` |
| Google Fonts | Space Grotesk, Inter |

Si un CDN est down, le site reste fonctionnel (formules en texte brut, pas d'animations scroll, fonts système).

---

## Flux de chargement

```
HTML parsed → CSS + CDN loaded → main.js (module)
                                    ├→ hero-canvas.js (animation)
                                    ├→ navigation.js (observers)
                                    ├→ math-render.js (KaTeX)
                                    └→ AOS.init()
```
