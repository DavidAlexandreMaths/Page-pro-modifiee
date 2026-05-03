# Site Personnel — Étudiant en Mathématiques (Géométrie Algébrique & Différentielle)

Site web vanilla **sans build** pour un doctorant en géométrie algébrique et différentielle, avec un volet médiation didactique des mathématiques.

---

## Philosophie de Design : Comment rendre le site moderne, pro, propre, beau et original

### 🎨 Direction Artistique — « Manifold »

Le concept créatif s'appuie directement sur le domaine de recherche du doctorant : la **géométrie algébrique et différentielle**. L'idée est de transformer des objets mathématiques abstraits en éléments visuels concrets.

#### Palette de couleurs
- **Fond principal** : Noir profond (`#0a0a0f`) avec un léger bruit de texture — évoque un tableau noir moderne
- **Accent primaire** : Bleu-violet lumineux (`#6c5ce7` → `#a29bfe`) — rappelle les visualisations de variétés algébriques
- **Accent secondaire** : Cyan/turquoise (`#00cec9`) — évoque les courbes de niveau
- **Texte** : Blanc cassé (`#f0f0f5`) avec hiérarchie via opacité
- **Surfaces** : Glassmorphism avec `backdrop-filter: blur()` et bordures semi-transparentes

#### Typographie
- **Titres** : [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — géométrique, moderne, académique sans être austère
- **Corps** : [Inter](https://fonts.google.com/specimen/Inter) — lisibilité parfaite, professionnelle
- **Mathématiques** : KaTeX (chargé via CDN) — rendu LaTeX natif dans le navigateur

#### Éléments visuels originaux
1. **Hero animé** : Canvas avec des courbes algébriques animées (courbes de Bézier, lemniscates, spirales logarithmiques) dessinées en temps réel avec un effet de "glow"
2. **Grille de fond** : Grille subtile en perspective qui évoque un espace tangent — se déforme légèrement au scroll
3. **Sections** : Cards avec glassmorphism et bordures gradient
4. **Transitions** : Animations d'entrée basées sur `IntersectionObserver` — les éléments "se déploient" comme des variétés
5. **Cursor trail** : Effet subtil de particules géométriques suivant le curseur (triangles, cercles)

#### Ce qui le rend **moderne**
- Dark mode natif, glassmorphism, micro-animations, scroll-driven animations
- Layout CSS Grid/Flexbox responsive sans framework

#### Ce qui le rend **professionnel**
- Typographie soignée avec hiérarchie claire, espacement généreux
- Navigation fluide avec smooth scroll, sections bien structurées
- Contenu académique bien présenté (publications, recherche, enseignement)

#### Ce qui le rend **propre**
- Code sémantique HTML5, CSS custom properties, JS modulaire en ES modules
- Architecture fichiers claire et documentée
- Pas de dépendance de build, tout est lisible directement

#### Ce qui le rend **beau**
- Palette de couleurs harmonieuse, gradients subtils, effets de lumière
- Animations fluides à 60fps, transitions soignées
- Rendu mathématique natif (KaTeX) intégré au design

#### Ce qui le rend **original**
- Le hero canvas avec courbes algébriques animées — directement lié au domaine de recherche
- L'identité visuelle "Manifold" qui transforme les concepts mathématiques en design
- Le mélange recherche pure + médiation didactique rarement vu sur un site perso

---

## Bibliothèques externes (chargées via CDN)

| Bibliothèque | Usage | CDN |
|---|---|---|
| **KaTeX** | Rendu d'équations LaTeX | `cdn.jsdelivr.net/npm/katex` |
| **AOS** (Animate On Scroll) | Animations d'entrée au scroll | `cdn.jsdelivr.net/npm/aos` |
| **Google Fonts** | Space Grotesk + Inter | `fonts.googleapis.com` |

> [!NOTE]
> Aucun bundler, aucun build step. Tout est servi statiquement. On peut ouvrir `index.html` directement dans un navigateur ou utiliser un simple serveur statique (`python -m http.server`, Live Server VS Code, etc.)

---

## Architecture du Projet

```
David/
├── index.html                  # Page principale
├── css/
│   └── style.css               # Feuille de style principale
├── js/
│   ├── main.js                 # Point d'entrée JS
│   ├── hero-canvas.js          # Animation canvas du hero
│   ├── math-render.js          # Initialisation KaTeX
│   └── navigation.js           # Navigation & scroll
├── assets/
│   └── favicon.svg             # Favicon SVG géométrique
├── docs/
│   ├── README.md               # Vue d'ensemble du projet
│   ├── DOCUMENTATION.md        # Comment fonctionne le système de docs
│   ├── BOARD.md                # Board de suivi (index)
│   ├── ARCHITECTURE.md         # Architecture technique détaillée
│   ├── DESIGN.md               # Choix de design et guidelines
│   ├── EDITING-GUIDE.md        # Guide pour modifier le site
│   └── stories/
│       ├── US-001-hero.md          # User Story : Hero section
│       ├── US-002-about.md         # User Story : Section À propos
│       ├── US-003-research.md      # User Story : Section Recherche
│       ├── US-004-teaching.md      # User Story : Section Médiation
│       ├── US-005-publications.md  # User Story : Section Publications
│       ├── US-006-contact.md       # User Story : Section Contact
│       ├── US-007-navigation.md    # User Story : Navigation
│       ├── US-008-responsive.md    # User Story : Responsive design
│       ├── US-009-animations.md    # User Story : Animations
│       └── US-010-math-render.md   # User Story : Rendu mathématique
└── .gitignore
```

---

## Sections du Site

### 1. Navigation
- Barre fixe en haut, semi-transparente (glassmorphism)
- Logo/nom à gauche, liens à droite
- Hamburger menu en mobile
- Active state basé sur la section visible (IntersectionObserver)

### 2. Hero Section
- Canvas plein écran avec courbes algébriques animées
- Nom + titre ("Doctorant en Mathématiques")
- Sous-titre avec domaine de recherche
- CTA subtil (scroll down indicator)

### 3. À Propos
- Présentation courte de l'étudiant
- Parcours académique (timeline verticale)
- Compétences/intérêts de recherche (tags stylisés)

### 4. Recherche
- Cards pour les axes de recherche (géométrie algébrique, géométrie différentielle)
- Équations clés rendues via KaTeX
- Description accessible des sujets de thèse

### 5. Médiation & Enseignement
- Section dédiée au volet didactique
- Activités de médiation
- Ressources pédagogiques
- Philosophie d'enseignement

### 6. Publications / Travaux
- Liste stylisée de publications/prépublications
- Liens vers arXiv/HAL
- Présentations en conférence

### 7. Contact
- Formulaire minimaliste (ou mailto)
- Liens réseaux académiques (ORCID, ResearchGate, etc.)
- Coordonnées institutionnelles

---

## Système de Documentation (.md)

### Structure du board

Le fichier `BOARD.md` sert de **tableau Kanban** textuel avec 4 colonnes :
- 📋 **Backlog** — À faire
- 🔨 **En cours** — En développement
- 🔍 **En revue** — À vérifier
- ✅ **Terminé** — Complété

Chaque entrée du board est un lien vers un fichier `.md` dédié dans `docs/stories/`.

### Fichiers de documentation prévus

| Fichier | Rôle |
|---|---|
| `README.md` | Introduction au projet, comment lancer, technologies utilisées |
| `DOCUMENTATION.md` | Explique le système de documentation lui-même (méta-doc) |
| `BOARD.md` | Tableau de suivi avec liens vers les stories |
| `ARCHITECTURE.md` | Structure des fichiers, rôle de chaque module JS/CSS |
| `DESIGN.md` | Choix esthétiques, palette, typographie, guidelines |
| `EDITING-GUIDE.md` | Comment modifier le contenu du site (textes, sections, etc.) |
| `stories/US-XXX-*.md` | User stories individuelles avec critères d'acceptation |

---

## Proposed Changes

### Documentation (`docs/`)

#### [NEW] [README.md](file:///c:/Users/krist/Desktop/Dev/David/docs/README.md)
Vue d'ensemble du projet : description, technologies, comment lancer, structure.

#### [NEW] [DOCUMENTATION.md](file:///c:/Users/krist/Desktop/Dev/David/docs/DOCUMENTATION.md)
Méta-documentation : comment fonctionne le système de .md, conventions, comment ajouter/modifier des stories.

#### [NEW] [BOARD.md](file:///c:/Users/krist/Desktop/Dev/David/docs/BOARD.md)
Tableau Kanban avec liens vers chaque user story et leur statut.

#### [NEW] [ARCHITECTURE.md](file:///c:/Users/krist/Desktop/Dev/David/docs/ARCHITECTURE.md)
Architecture technique du site : fichiers, modules, dépendances CDN.

#### [NEW] [DESIGN.md](file:///c:/Users/krist/Desktop/Dev/David/docs/DESIGN.md)
Guide de design : palette, typographie, composants, principes visuels.

#### [NEW] [EDITING-GUIDE.md](file:///c:/Users/krist/Desktop/Dev/David/docs/EDITING-GUIDE.md)
Guide pratique pour modifier le contenu du site.

#### [NEW] 10 fichiers `stories/US-XXX-*.md`
User stories individuelles avec description, critères d'acceptation, et statut.

---

### Site Web

#### [NEW] [index.html](file:///c:/Users/krist/Desktop/Dev/David/index.html)
Page HTML principale avec toutes les sections, chargement des CDN, structure sémantique.

#### [NEW] [style.css](file:///c:/Users/krist/Desktop/Dev/David/css/style.css)
Feuille de style complète : custom properties, layout, composants, animations, responsive.

#### [NEW] [main.js](file:///c:/Users/krist/Desktop/Dev/David/js/main.js)
Point d'entrée : initialisation AOS, orchestration des modules.

#### [NEW] [hero-canvas.js](file:///c:/Users/krist/Desktop/Dev/David/js/hero-canvas.js)
Animation Canvas2D : courbes algébriques animées (lemniscates, spirales, courbes de Bézier).

#### [NEW] [math-render.js](file:///c:/Users/krist/Desktop/Dev/David/js/math-render.js)
Auto-rendu KaTeX des éléments avec attribut `data-math`.

#### [NEW] [navigation.js](file:///c:/Users/krist/Desktop/Dev/David/js/navigation.js)
Navigation : smooth scroll, active state via IntersectionObserver, mobile menu toggle.

#### [NEW] [favicon.svg](file:///c:/Users/krist/Desktop/Dev/David/assets/favicon.svg)
Favicon SVG géométrique (forme inspirée d'une variété/tore).

#### [NEW] [.gitignore](file:///c:/Users/krist/Desktop/Dev/David/.gitignore)
Fichier gitignore minimal.

---

## Open Questions

> [!IMPORTANT]
> **Nom de l'étudiant** — Quel nom/prénom utiliser sur le site ? Je mettrai un placeholder "David" en attendant.

> [!NOTE]
> **Contenu académique** — Les textes de recherche, publications, parcours seront des placeholders réalistes. Tu pourras les remplacer facilement grâce au guide d'édition (`EDITING-GUIDE.md`).

> [!NOTE]
> **Langue du site** — Le contenu visible du site sera en français (c'est un site perso), le code (variables, classes, commentaires) en anglais. Est-ce correct ?

---

## Verification Plan

### Vérification automatique
- Ouvrir le site dans le navigateur via l'outil browser
- Vérifier le rendu visuel de chaque section
- Tester le responsive (resize du navigateur)
- Vérifier que KaTeX rend correctement les équations
- Vérifier les animations au scroll

### Vérification manuelle
- Relecture des fichiers .md pour cohérence
- Vérification que tous les liens du BOARD pointent vers les bons fichiers
- Test de la navigation smooth scroll
