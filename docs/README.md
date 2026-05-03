# 📐 Site Personnel — David

> Site web personnel pour un doctorant en mathématiques, spécialisé en géométrie algébrique et différentielle, avec un volet médiation didactique.

---

## 🚀 Démarrage rapide

### Prérequis

Aucun ! C'est un site **vanilla** (HTML/CSS/JS pur), sans build tool, sans npm, sans bundler.

### Lancer le site

**Option 1 — Ouvrir directement**
Double-cliquez sur `index.html` dans votre explorateur de fichiers.

**Option 2 — Serveur local (recommandé)**
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si installé)
npx serve .

# Avec VS Code
# Installez l'extension "Live Server" puis clic droit > "Open with Live Server"
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.

> ⚠️ Un serveur local est recommandé pour que les modules ES (`type="module"`) fonctionnent correctement sur tous les navigateurs.

---

## 🛠️ Technologies

| Technologie | Rôle | Chargement |
|---|---|---|
| **HTML5** | Structure sémantique | Local |
| **CSS3** | Style, animations, responsive | Local |
| **JavaScript ES Modules** | Logique, interactions | Local |
| **KaTeX** | Rendu d'équations LaTeX | CDN |
| **AOS** | Animations au scroll | CDN |
| **Google Fonts** | Typographie (Space Grotesk, Inter) | CDN |

**Aucune dépendance locale à installer.** Tout est chargé via CDN au chargement de la page.

---

## 📁 Structure du projet

```
David/
├── index.html                  # Page principale
├── css/
│   └── style.css               # Styles complets
├── js/
│   ├── main.js                 # Point d'entrée
│   ├── hero-canvas.js          # Animation du hero
│   ├── math-render.js          # Rendu KaTeX
│   └── navigation.js           # Navigation & scroll
├── assets/
│   └── favicon.svg             # Favicon géométrique
├── docs/
│   ├── README.md               # ← Vous êtes ici
│   ├── DOCUMENTATION.md        # Comment fonctionne la doc
│   ├── BOARD.md                # Board de suivi
│   ├── ARCHITECTURE.md         # Architecture technique
│   ├── DESIGN.md               # Guide de design
│   ├── EDITING-GUIDE.md        # Guide d'édition du contenu
│   └── stories/                # User stories
│       └── US-XXX-*.md
└── .gitignore
```

---

## 📖 Documentation

- [**DOCUMENTATION.md**](./DOCUMENTATION.md) — Comment fonctionne le système de documentation
- [**BOARD.md**](./BOARD.md) — Tableau Kanban de suivi du projet
- [**ARCHITECTURE.md**](./ARCHITECTURE.md) — Architecture technique détaillée
- [**DESIGN.md**](./DESIGN.md) — Choix de design et guidelines
- [**EDITING-GUIDE.md**](./EDITING-GUIDE.md) — Comment modifier le contenu du site

---

## 🎨 Concept visuel — « Manifold »

Le design du site s'inspire directement du domaine de recherche : la **géométrie algébrique et différentielle**. Des courbes algébriques animées, une palette sombre avec des accents lumineux, et un rendu mathématique natif créent une identité visuelle unique qui lie forme et fond.

Voir [DESIGN.md](./DESIGN.md) pour les détails complets.

---

## 📝 Licence

Ce projet est personnel. Adaptez-le librement à vos besoins.
