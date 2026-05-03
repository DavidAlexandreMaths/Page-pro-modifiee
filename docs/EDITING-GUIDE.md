# ✏️ Guide d'Édition du Contenu

> Comment modifier les textes, sections et informations du site.

---

## Prérequis

- Un éditeur de texte (VS Code recommandé)
- Connaissances basiques en HTML
- Aucun outil de build nécessaire

---

## Modifier les textes

Tous les textes sont directement dans `index.html`. Cherchez les sections par leur `id` :

| Section | ID HTML | Ligne approximative |
|---|---|---|
| Navigation | `<nav>` | Début du body |
| Hero | `#hero` | Après nav |
| À propos | `#about` | Après hero |
| Recherche | `#research` | Après about |
| Médiation | `#teaching` | Après research |
| Publications | `#publications` | Après teaching |
| Contact | `#contact` | Après publications |

### Exemple : changer le nom

```html
<!-- Cherchez dans la section hero -->
<h1 class="hero__title">David</h1>
<p class="hero__subtitle">Doctorant en Mathématiques</p>
```

Remplacez "David" par votre nom.

---

## Ajouter une publication

Dans la section `#publications`, copiez un bloc `publication-card` existant :

```html
<article class="publication-card" data-aos="fade-up">
    <span class="publication-card__year">2026</span>
    <h3 class="publication-card__title">Titre de votre publication</h3>
    <p class="publication-card__authors">Auteur 1, Auteur 2</p>
    <p class="publication-card__venue">Nom de la revue/conférence</p>
    <a href="https://arxiv.org/..." class="publication-card__link">arXiv →</a>
</article>
```

---

## Ajouter une entrée dans la timeline (parcours)

Dans la section `#about`, copiez un bloc `timeline__item` :

```html
<div class="timeline__item" data-aos="fade-right">
    <span class="timeline__year">2024</span>
    <h3 class="timeline__title">Titre</h3>
    <p class="timeline__desc">Description du diplôme ou poste</p>
</div>
```

---

## Modifier les formules mathématiques

Les formules utilisent la syntaxe **LaTeX** et sont rendues par KaTeX.

```html
<!-- Formule en ligne -->
<span class="math-inline">E = mc^2</span>

<!-- Formule en bloc (centrée) -->
<div class="math-display">\int_M \omega = \int_{\partial M} d\omega</div>
```

Référence LaTeX rapide : [KaTeX Supported Functions](https://katex.org/docs/supported)

---

## Modifier les couleurs

Les couleurs sont des **CSS Custom Properties** dans `css/style.css` :

```css
:root {
    --color-bg: #0a0a0f;
    --color-primary: #6c5ce7;
    --color-secondary: #00cec9;
    --color-text: #f0f0f5;
}
```

Changez les valeurs hex pour adapter la palette.

---

## Modifier les liens sociaux / contact

Dans la section `#contact`, modifiez les liens :

```html
<a href="mailto:votre@email.com" class="contact__link">
<a href="https://orcid.org/XXXX-XXXX" class="contact__link">
```

---

## Ajouter des pages ou des sections

### Ajouter une nouvelle section (Style One-Page)
Pour ajouter une nouvelle thématique sur la page principale :
1. Copiez une section existante dans `index.html` (ex: `#research`).
2. Modifiez l'attribut `id` (ex: `id="projets"`).
3. Dans la `<nav>`, ajoutez un lien : 
   ```html
   <li><a href="#projets" class="navbar__link">Projets</a></li>
   ```

### Créer une nouvelle page HTML
Si vous voulez une page totalement séparée :
1. Créez un fichier (ex: `blog.html`).
2. Copiez le contenu de `index.html` pour conserver les styles et la navigation.
3. Videz le contenu des sections et remplacez-le par le vôtre.
4. Pour le logo, assurez-vous que le lien pointe vers `index.html`.

---

## Statut du projet
Vous pouvez suivre l'avancement dans le [BOARD.md](./BOARD.md).
