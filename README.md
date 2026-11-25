# Massothérapie Samuel Beauchamp

Site web de Samuel Beauchamp, massothérapeute à Rimouski (Québec).
En ligne : https://massotherapiesamuelbeauchamp.online

## Structure

- `index.html` : page principale (CSS et JS inline).
- `soins-et-douleurs.html` : page pilier des approches et des inconforts.
- `<inconfort>-rimouski.html` : pages d'atterrissage, une par intention de recherche.
- `legal.html`, `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`.

## Prévisualiser en local

Dans VS Code, clic droit sur `index.html` puis **Open with Live Server**.

## Modifier le style (Tailwind)

`tailwind.min.css` est compilé. Après toute modification de classes dans un fichier HTML :

```bash
npx --yes tailwindcss@3.4.17 -i tailwind.input.css -o tailwind.min.css --minify
```

Node.js est requis. Aucune autre installation n'est nécessaire.

## Déploiement

GitHub Pages publie automatiquement depuis la branche `main`.

```bash
git add <fichiers>
git commit -m "message"
git push origin main
```

Les consignes de contenu, de SEO et de vocabulaire sont dans `CLAUDE.md`.
