# US-009 — Animations & Transitions

**Statut :** ✅ Terminé
**Priorité :** 🟡 Moyenne

## Description

En tant que visiteur, je veux voir des animations subtiles et fluides au scroll et au hover afin de percevoir le site comme moderne et soigné.

## Critères d'acceptation

- [x] Animations d'entrée au scroll (AOS)
- [x] Transitions hover sur les cards et liens
- [x] Animation du canvas hero en continu
- [x] Pas de janks ni de saccades
- [x] Animations désactivables (prefers-reduced-motion)

## Notes techniques

- AOS library via CDN
- Transitions CSS : `transition: all 0.3s ease`
- `@media (prefers-reduced-motion: reduce)` pour l'accessibilité

## Historique

- 2026-05-03 : Création et implémentation
