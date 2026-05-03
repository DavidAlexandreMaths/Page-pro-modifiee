# US-011 — Guide d'ajout de pages (Multi-page)

**Statut :** ✅ Terminé
**Priorité :** 🟢 Basse (Documentation)

## Description
En tant que propriétaire du site, je veux pouvoir étendre mon site au-delà d'une seule page en ajoutant des pages HTML distinctes (ex: blog, détails d'un projet) tout en conservant le design "Manifold" et la navigation.

## Layout de base à reproduire
Chaque nouvelle page doit charger les mêmes ressources dans le `<head>` pour garantir la cohérence visuelle.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- 1. Recopier exactement le <head> de index.html -->
    <!-- Cela inclut KaTeX, AOS, Space Grotesk, et style.css -->
</head>
<body>
    <!-- 2. Barre de Navigation (identique à index.html) -->
    <!-- Note : Pour revenir à l'accueil, le logo doit pointer vers index.html -->
    <nav class="navbar"> ... </nav>

    <!-- 3. Contenu spécifique à la page -->
    <main style="margin-top: 100px;"> <!-- Marge pour compenser la nav fixe -->
        <section>
            <div class="container">
                <h1 class="section-title">Ma Nouvelle Page</h1>
                <!-- Votre contenu ici -->
            </div>
        </section>
    </main>

    <!-- 4. Footer -->
    <footer class="footer"> ... </footer>

    <!-- 5. Scripts (L'ordre est important) -->
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="./js/hero-canvas.js"></script>
    <script src="./js/navigation.js"></script>
    <script src="./js/math-render.js"></script>
    <script src="./js/main.js"></script>
</body>
</html>
```

## Étapes pour reproduire
1. **Dupliquer** : Copiez le fichier `page-template.html` ou `index.html`.
2. **Nettoyer** : Supprimez la section `<section id="hero">` si vous ne voulez pas l'animation de fond sur cette page spécifique.
3. **Marge de sécurité** : Ajoutez un `padding-top` ou un `margin-top` sur votre première section pour qu'elle ne soit pas cachée sous la barre de navigation fixe.
4. **Liens** : 
   - Dans `index.html`, faites pointer votre lien vers `ma-page.html`.
   - Dans `ma-page.html`, faites pointer le logo vers `index.html`.

## Notes techniques
- **Navigation active** : Le script `navigation.js` utilise un `IntersectionObserver`. Sur une page séparée, il ne trouvera pas les IDs de la page d'accueil. C'est normal.
- **Canvas Hero** : Si vous voulez le canvas animé sur toutes les pages, gardez la balise `<canvas>` et la section Hero, mais modifiez les textes.

## Historique
- 2026-05-03 : Création de la story et du template.
