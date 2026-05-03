# 🎨 Guide de Design — « Manifold »

> Choix esthétiques, palette, typographie et principes visuels.

---

## Concept

Le design s'appelle **« Manifold »** (variété en mathématiques). Il transforme les objets de la géométrie algébrique et différentielle en éléments visuels.

---

## Palette de couleurs

| Rôle | Couleur | Hex |
|---|---|---|
| Fond principal | Noir profond | `#0a0a0f` |
| Surface | Blanc très transparent | `rgba(255,255,255,0.03)` |
| Bordure | Blanc transparent | `rgba(255,255,255,0.08)` |
| Accent primaire | Bleu-violet | `#6c5ce7` |
| Accent primaire clair | Lavande | `#a29bfe` |
| Accent secondaire | Cyan | `#00cec9` |
| Texte principal | Blanc cassé | `#f0f0f5` |
| Texte secondaire | Gris | `rgba(240,240,245,0.6)` |

### Pourquoi cette palette ?

- Le **noir profond** évoque un tableau noir moderne
- Le **bleu-violet** rappelle les visualisations de variétés algébriques
- Le **cyan** évoque les courbes de niveau et les lignes de champ

---

## Typographie

| Usage | Font | Poids |
|---|---|---|
| Titres, navigation | Space Grotesk | 500, 600, 700 |
| Corps de texte | Inter | 400, 500 |
| Mathématiques | KaTeX (auto) | — |

### Tailles

- Hero titre : `clamp(2.5rem, 5vw, 4rem)`
- Section titre : `clamp(1.8rem, 3vw, 2.5rem)`
- Corps : `1rem` (16px)
- Small : `0.875rem`

---

## Composants visuels

### Cards (glassmorphism)
```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
backdrop-filter: blur(10px);
```

### Tags
Petits badges colorés avec bordure gradient pour les compétences/sujets.

### Timeline
Ligne verticale avec points lumineux pour le parcours académique.

### Boutons
Fond transparent, bordure gradient, hover avec fill.

---

## Animations

- **AOS** : Éléments qui apparaissent au scroll (`fade-up`, `fade-right`)
- **Canvas hero** : Courbes algébriques animées en boucle
- **Hover** : Transitions 0.3s sur cards, liens, boutons
- **Nav** : Opacité progressive au scroll

### Principe : subtilité
Les animations doivent être **subtiles et fluides**. Jamais de bounce, jamais de flash. Tout doit évoquer le mouvement continu d'une courbe sur une variété.

---

## Responsive

| Breakpoint | Cible |
|---|---|
| `> 1024px` | Desktop |
| `768px – 1024px` | Tablette |
| `< 768px` | Mobile |

En mobile : menu hamburger, cards empilées, tailles réduites.
