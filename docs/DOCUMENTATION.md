# 📚 Système de Documentation

> Ce fichier explique **comment fonctionne le système de documentation** de ce projet. C'est la « méta-documentation » — la doc de la doc.

---

## 🧭 Vue d'ensemble

La documentation de ce projet est entièrement basée sur des **fichiers Markdown (.md)**. Pas de wiki externe, pas d'outil tiers — tout vit dans le dépôt, à côté du code.

### Pourquoi Markdown ?

- ✅ **Lisible partout** — GitHub, GitLab, VS Code, n'importe quel éditeur texte
- ✅ **Versionné** — Chaque modification est trackée par Git
- ✅ **Pas de dépendance** — Pas besoin d'installer un outil pour lire/écrire
- ✅ **Collaboratif** — Modifiable par n'importe qui sachant écrire du texte
- ✅ **Durable** — Les fichiers texte ne deviennent jamais obsolètes techniquement

---

## 📂 Organisation des fichiers

```
docs/
├── README.md               # Point d'entrée de la doc
├── DOCUMENTATION.md         # ← Ce fichier (méta-doc)
├── BOARD.md                 # Tableau de suivi Kanban
├── ARCHITECTURE.md          # Architecture technique
├── DESIGN.md                # Guide de design
├── EDITING-GUIDE.md         # Guide d'édition du contenu
└── stories/                 # User stories individuelles
    ├── US-001-hero.md
    ├── US-002-about.md
    ├── US-003-research.md
    └── ...
```

### Rôle de chaque fichier

| Fichier | Rôle | Quand le lire ? |
|---|---|---|
| `README.md` | Vue d'ensemble, démarrage rapide | En premier, toujours |
| `DOCUMENTATION.md` | Comment fonctionne la doc | Pour comprendre le système |
| `BOARD.md` | Suivi d'avancement | Pour voir où en est le projet |
| `ARCHITECTURE.md` | Structure technique du code | Avant de coder |
| `DESIGN.md` | Choix esthétiques et guidelines | Avant de modifier le style |
| `EDITING-GUIDE.md` | Comment changer le contenu | Avant de modifier des textes |
| `stories/US-XXX-*.md` | Détail d'une fonctionnalité | Pour comprendre une feature |

---

## 📋 Le Board (BOARD.md)

Le fichier `BOARD.md` fonctionne comme un **tableau Kanban textuel**. Il contient 4 colonnes :

```
📋 Backlog → 🔨 En cours → 🔍 En revue → ✅ Terminé
```

### Comment ça marche ?

1. Chaque **entrée** dans le board est un lien vers un fichier `.md` dans `docs/stories/`
2. Pour **déplacer une entrée**, il suffit de la couper/coller d'une colonne à l'autre
3. Le **statut** dans le fichier story doit correspondre à la colonne du board

### Exemple de déplacement

Avant (dans BOARD.md) :
```markdown
## 📋 Backlog
- [US-005 — Publications](./stories/US-005-publications.md)
```

Après :
```markdown
## 🔨 En cours
- [US-005 — Publications](./stories/US-005-publications.md)
```

Et dans `US-005-publications.md`, mettre à jour :
```markdown
**Statut :** 🔨 En cours
```

---

## 📝 User Stories (stories/)

Chaque user story suit un **template standardisé** :

```markdown
# US-XXX — Titre de la story

**Statut :** 📋 Backlog | 🔨 En cours | 🔍 En revue | ✅ Terminé
**Priorité :** 🔴 Haute | 🟡 Moyenne | 🟢 Basse

## Description
En tant que [rôle], je veux [action] afin de [bénéfice].

## Critères d'acceptation
- [ ] Critère 1
- [ ] Critère 2
- [ ] Critère 3

## Notes techniques
Détails d'implémentation, contraintes, dépendances...

## Historique
- YYYY-MM-DD : Création
- YYYY-MM-DD : Changement de statut
```

### Conventions de nommage

- Format : `US-XXX-nom-court.md`
- `XXX` : numéro à 3 chiffres, incrémenté séquentiellement
- `nom-court` : description en kebab-case, en anglais (pour les noms de fichiers)

### Ajouter une nouvelle story

1. Créer un fichier `docs/stories/US-XXX-nom.md` en suivant le template
2. Ajouter un lien dans `BOARD.md` dans la colonne appropriée
3. Commit les deux fichiers ensemble

---

## 🔄 Workflow recommandé

```
1. Nouvelle idée/tâche
   → Créer un fichier US-XXX dans stories/
   → L'ajouter dans BOARD.md > 📋 Backlog

2. Début du travail
   → Déplacer dans BOARD.md > 🔨 En cours
   → Mettre à jour le statut dans le fichier story

3. Code terminé
   → Déplacer dans BOARD.md > 🔍 En revue
   → Cocher les critères d'acceptation remplis

4. Validé
   → Déplacer dans BOARD.md > ✅ Terminé
   → Tous les critères cochés
   → Ajouter la date dans l'historique
```

---

## ✏️ Conventions d'écriture

### Langue
- **Fichiers .md** : Français
- **Code** (HTML/CSS/JS) : Anglais (noms de variables, classes, fonctions)
- **Noms de fichiers** : Anglais (kebab-case)

### Format Markdown
- Utiliser les titres hiérarchiquement (`#` → `##` → `###`)
- Utiliser les listes à puces pour les énumérations
- Utiliser les tableaux pour les données structurées
- Utiliser les blocs de code avec la syntaxe appropriée
- Utiliser les emojis pour la lisibilité visuelle (avec modération)

### Liens entre fichiers
- Toujours utiliser des **chemins relatifs** (`./stories/US-001-hero.md`)
- Vérifier que les liens fonctionnent après un rename
