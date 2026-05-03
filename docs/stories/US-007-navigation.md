# US-007 — Navigation

**Statut :** ✅ Terminé
**Priorité :** 🔴 Haute

## Description

En tant que visiteur, je veux naviguer facilement entre les sections du site avec une barre de navigation fixe et fluide afin de trouver rapidement l'information.

## Critères d'acceptation

- [x] Navbar fixe en haut
- [x] Effet glassmorphism sur la navbar
- [x] Smooth scroll vers les sections
- [x] Active state sur le lien de la section visible
- [x] Menu hamburger en mobile
- [x] La navbar devient plus opaque au scroll

## Notes techniques

- Module : `js/navigation.js`
- `IntersectionObserver` pour détecter la section active
- `scroll-behavior: smooth` + JS fallback

## Historique

- 2026-05-03 : Création et implémentation
