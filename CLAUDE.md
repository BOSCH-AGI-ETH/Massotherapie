# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# CLAUDE.md — massotherapiesamuelbeauchamp.online

## IDENTITÉ DU PROJET
Tu construis le site web professionnel de **Samuel Beauchamp, massothérapeute certifié**
basé à **Rimouski, Québec**. Le site cible des clients locaux cherchant des soins
de massothérapie thérapeutique et relaxante.

---

## PRIORITÉS ABSOLUES (dans cet ordre)
1. **Simplicité** — Chaque élément doit avoir une raison d'être. Supprime le superflu.
2. **Clarté** — Le visiteur comprend en 5 secondes ce que Samuel offre et comment
   le contacter.
3. **Rendu mobile d'abord** — Tout composant est conçu mobile-first, puis adapté
   desktop. Tester mentalement chaque layout sur 375px avant 1280px.

---

## IDENTITÉ VISUELLE
- **Palette:** Tons terre, vert sauge, beige chaud, blanc cassé. Aucune couleur vive
  ou agressive.
- **Typographie:** Fontes sérieuses mais douces — ex. Inter, Lato, ou DM Sans.
  Hiérarchie claire H1 > H2 > body.
- **Ambiance:** Calme, naturel, professionnel. Évoque la confiance, le soin,
  le relâchement.
- **Images:** Espaces épurés, lumière naturelle, textures organiques. Jamais de
  stock photos génériques ou cliniques.

### Couleur principale
`#4a6257` (vert sauge foncé) — définie comme `primary-600` dans la config Tailwind.

### Images disponibles (`image/`)

| Fichier | Usage |
|---|---|
| `logo.png` | Logo coloré — nav bar uniquement |
| `LogoBlancLong.png` | Logo blanc horizontal — hero et footer |
| `profil.png` | Photo de Samuel (section About) |
| `Local_pratique.jpeg` | Photo du local de pratique |

---

## SERVICES À METTRE EN VALEUR
Présente ces spécialités avec clarté et bénéfices concrets pour le client :
- **Massage thérapeutique** — cible douleurs, tensions, rééducation
- **Massage relaxant** — détente profonde, réduction du stress
- **Relâchement neuro-musculaire** — travail du système nerveux, réponse au stress chronique
- **Travail du diaphragme** — respiration, posture, tension viscérale
- **Libération myofasciale** — fascias, mobilité, douleurs chroniques
- **Mobilité articulaire** — amplitude, fluidité du mouvement

Pour chaque service : nom clair + description en 2 phrases max + bénéfice ressenti.

---

## STRUCTURE DU SITE

Le site est actuellement une **page unique** (`index.html`) déployée via GitHub Pages.
Chaque section doit avoir un seul appel à l'action (CTA) principal et visible.

### Sections actuelles (dans l'ordre)
1. `#accueil` — Hero avec `LogoBlancLong.png`
2. About — Photo de profil + bio (pas d'`id`)
3. `#approche` — 3 piliers thérapeutiques
4. `#protocole` — 4 étapes de séance
5. "Ce qui distingue" — Photo local + 3 points (pas d'`id`)
6. `#temoignages` — 4 témoignages clients
7. Indications thérapeutiques (pas d'`id`)
8. `#tarifs` — 2 forfaits : 60 min (80 $) / 90 min (120 $), hors taxes
9. `#contact` — CTA final
10. Footer — `LogoBlancLong.png` + lien Facebook + sélecteur de langue (EN = stub non implémenté)

---

## SEO LOCAL — RIMOUSKI (priorité haute)
Applique systématiquement ces règles SEO dans tout le code et contenu.

### Balises techniques
- `<title>` format : `[Service] | Samuel Beauchamp Massothérapeute Rimouski`
- `<meta description>` : 150-160 caractères, inclure "massothérapeute Rimouski"
- Une seule balise `<h1>` par page contenant un mot-clé local
- Balises `<h2>` pour structurer les services et sections

### Mots-clés locaux à intégrer naturellement
- "massothérapeute Rimouski"
- "massage thérapeutique Rimouski"
- "massage relaxant Rimouski"
- "massothérapie Bas-Saint-Laurent"
- "Samuel Beauchamp massothérapeute"

### Schema.org (JSON-LD obligatoire sur chaque page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Samuel Beauchamp Massothérapeute",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rimouski",
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "url": "https://massotherapiesamuelbeauchamp.online",
  "priceRange": "$$",
  "serviceType": "Massothérapie"
}
</script>
```

### Contenu SEO
- Textes en français québécois naturel — pas de jargon médical inaccessible
- Chaque page : minimum 300 mots de contenu utile
- Liens internes entre les pages (accueil ↔ services ↔ contact)
- Attribut `alt` descriptif sur toutes les images
  (ex : `alt="massage thérapeutique Rimouski Samuel Beauchamp"`)

---

## STANDARDS TECHNIQUES

### Architecture actuelle
- Fichier HTML unique (`index.html`) sans système de build ni dépendances npm
- CSS et JS entièrement inline dans `index.html`
- **Tailwind CSS** via CDN — config personnalisée (couleurs `primary`, `sand`) dans un `<script>` dans le `<head>`
- **Google Fonts** : Inter + Lora via `<link>` avec `font-display: swap`
- **JS** : Vanilla — menu hamburger mobile + IntersectionObserver pour lien actif + sélecteur de langue

### HTML/CSS
- HTML5 sémantique (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- CSS custom properties (variables) pour couleurs et typographie
- Flexbox ou Grid — pas de frameworks lourds sauf si justifié
- Aucune dépendance inutile

### Performance (impact SEO direct)
- Images : format WebP, attributs `width` et `height` toujours présents
- Pas de JavaScript si la fonctionnalité peut être faite en CSS
- Score Lighthouse cible : 90+ sur mobile

### Accessibilité
- Contraste WCAG AA minimum
- Tous les liens et boutons ont un label descriptif
- Structure de navigation cohérente

---

## RÈGLES DE GÉNÉRATION DE CODE
- Toujours commenter les sections importantes du code
- Variables CSS nommées en français ou anglais — jamais mixtes
- Un fichier CSS par composant majeur si le projet grandit
- Noms de classes descriptifs (`.carte-service`, `.hero-accueil`)
- Mobile-first : écrire les styles de base pour mobile,
  puis `@media (min-width: 768px)` pour desktop

---

## DÉPLOIEMENT
GitHub Pages publie automatiquement depuis la branche `main`. Aucune étape de build requise.

```bash
git add <fichiers>
git commit -m "message"
git push origin main
```

---

## CE QU'IL FAUT ÉVITER
- ❌ Animations lourdes ou distractives
- ❌ Textes trop longs ou jargon technique médical
- ❌ Plus d'un CTA principal par section
- ❌ Couleurs vives, contrastes agressifs
- ❌ Composants inutiles qui ralentissent le site
- ❌ Contenu générique non localisé à Rimouski
