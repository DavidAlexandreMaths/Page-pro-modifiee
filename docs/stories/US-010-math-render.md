# US-010 — Rendu Mathématique KaTeX

**Statut :** ✅ Terminé
**Priorité :** 🟡 Moyenne

## Description

En tant que visiteur, je veux voir les formules mathématiques rendues proprement (comme dans un article LaTeX) afin de comprendre les sujets de recherche présentés.

## Critères d'acceptation

- [x] Formules inline rendues dans le texte
- [x] Formules display (bloc) centrées
- [x] Style cohérent avec le design du site
- [x] Fallback lisible si KaTeX ne charge pas
- [x] Auto-rendu au chargement de la page

## Notes techniques

- Module : `js/math-render.js`
- KaTeX chargé via CDN (jsDelivr)
- Classes CSS : `.math-inline`, `.math-display`
- Utilise `katex.render()` pour chaque élément

## Historique

- 2026-05-03 : Création et implémentation
