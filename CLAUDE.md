# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site web vitrine one-page pour **Massothérapie Samuel Beauchamp** (Rimouski, Bas-Saint-Laurent).
Déployé via **GitHub Pages** sur le domaine `massotherapiesamuelbeauchamp.online` (configuré dans `CNAME`).

## Architecture

Le site est un fichier HTML unique (`index.html`) sans système de build, framework, ni dépendances npm. Tout le CSS et le JS sont inline dans ce fichier.

- **CSS** : Tailwind CSS chargé via CDN (pas de build step). La config Tailwind personnalisée (couleurs `primary`, `sand`) est définie dans un `<script>` dans le `<head>`.
- **Fonts** : Google Fonts — Inter (sans-serif) + Lora (serif), chargées via `<link>`.
- **JS** : Vanilla JS inline en bas de page — menu hamburger mobile + IntersectionObserver pour lien de nav actif + sélecteur de langue (stub EN non implémenté).

### Sections dans l'ordre

1. `#accueil` — Hero avec `LogoBlancLong.png`
2. About — Photo de profil + bio (pas d'`id`, ne figure pas dans la nav)
3. `#approche` — 3 piliers thérapeutiques
4. `#protocole` — 4 étapes de séance
5. Section "Ce qui distingue" — Photo local + 3 points (pas d'`id`)
6. `#temoignages` — 4 témoignages clients
7. Section Indications thérapeutiques (pas d'`id`)
8. `#tarifs` — 2 forfaits (60 min / 90 min)
9. `#contact` — CTA final
10. Footer — `LogoBlancLong.png` + lien Facebook + sélecteur de langue

### Images disponibles (`image/`)

| Fichier | Usage |
|---|---|
| `logo.png` | Logo coloré — nav bar uniquement |
| `LogoBlancLong.png` | Logo blanc horizontal — hero et footer |
| `profil.png` | Photo de Samuel (section About) |
| `Local_pratique.jpeg` | Photo du local de pratique |

## Déploiement

```bash
git add <fichiers>
git commit -m "message"
git push origin main
```

GitHub Pages publie automatiquement depuis la branche `main`. Aucune étape de build requise.

## Conventions

- Les CTA de prise de rendez-vous pointent tous vers `https://www.facebook.com/SamuelBeauchampMassotherapeute`.
- Les prix affichés (80 $ / 120 $) sont hors taxes — un avertissement `*` est présent sous chaque prix.
- La couleur principale est `#4a6257` (vert sauge foncé) — définie comme `primary-600` dans la config Tailwind.
- Tout le contenu est en français. Le bouton EN du sélecteur de langue est un stub non fonctionnel.
