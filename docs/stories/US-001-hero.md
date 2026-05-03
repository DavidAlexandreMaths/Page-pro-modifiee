# US-001 — Hero Section

**Statut :** ✅ Terminé
**Priorité :** 🔴 Haute

## Description

En tant que visiteur, je veux voir une section d'accueil visuellement impressionnante avec des courbes mathématiques animées afin de comprendre immédiatement le domaine du doctorant.

## Critères d'acceptation

- [x] Canvas plein écran en arrière-plan
- [x] Courbes algébriques animées (lemniscate, spirales)
- [x] Effet de glow sur les courbes
- [x] Nom et titre affichés en overlay
- [x] Indicateur de scroll en bas
- [x] Le canvas se redimensionne au resize de la fenêtre
- [x] Animation fluide à 60fps

## Notes techniques

- Module : `js/hero-canvas.js`
- Utilise `requestAnimationFrame` pour l'animation
- Canvas 2D (pas de WebGL)
- Courbes paramétriques calculées en temps réel

## Historique

- 2026-05-03 : Création et implémentation
