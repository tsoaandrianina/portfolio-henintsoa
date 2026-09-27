# Portfolio de Henintsoa Andrianina Mampiononaritina

Site statique en HTML, CSS et JavaScript uniquement. Pas de framework, pas d'installation, pas de commande à lancer : ces fichiers sont le site fini, prêts à héberger tels quels.

## Structure

```
index.html       Accueil
apropos.html     À propos
skills.html      Compétences
projects.html    Projets
services.html    Services
contact.html     Contact (formulaire Netlify Forms)
merci.html       Page affichée après l'envoi du formulaire
404.html         Page « introuvable »
css/style.css    Styles et couleurs de tout le site
js/main.js       Thème clair/sombre, menu mobile
assets/          Favicon, photo, portrait
```

Chaque page contient son propre `<head>` et son propre `<header>` : c'est du HTML simple, sans étape de fabrication.

## Voir le site sur votre ordinateur

Les liens du site commencent par `/` (ex. `/contact.html`), ce qui est la bonne pratique pour un hébergement comme Netlify, mais cela veut dire qu'un simple double-clic sur `index.html` ne fonctionnera pas correctement pour naviguer entre les pages (le navigateur cherche `/contact.html` à la racine de votre disque). Pour prévisualiser correctement :

- **Le plus simple** : dans VS Code, installez l'extension « Live Server », clic droit sur `index.html`, « Open with Live Server ».
- **Sans VS Code** : ouvrez un terminal dans ce dossier et lancez `python3 -m http.server`, puis ouvrez `http://localhost:8000` dans le navigateur.

Une fois déployé sur Netlify, tout fonctionne normalement sans rien de spécial à faire.

## Compléter vos informations

Cherchez `À COMPLÉTER` dans les fichiers `.html` (Ctrl + Maj + F dans VS Code). Ordre conseillé :

1. `contact.html` : votre e-mail et votre lien LinkedIn.
2. `apropos.html` : vos dates et vos postes (la photo est déjà en place).
3. `projects.html` : le détail de chaque projet, avec une vraie capture d'écran si possible.
4. `skills.html` et `services.html` : ajustez les listes.

Pour changer le numéro WhatsApp, remplacez `261343846949` dans `index.html`, `apropos.html`, `skills.html`, `projects.html`, `services.html`, `contact.html`, `merci.html` et `404.html` (le bouton de l'en-tête et la bulle flottante du pied de page, sur chaque page — cherchez `wa.me`).

## Changer les couleurs

Modifiez les variables au début de `css/style.css` (`--violet`, `--mint`, `--sun`, `--whatsapp`, `--ink`, `--bg`).

## Déployer sur Netlify

**Le plus rapide** : sur https://app.netlify.com/drop, glissez ce dossier.

**Recommandé** : mettez le dossier sur GitHub, puis sur Netlify choisissez « Add new site », « Import an existing project », sélectionnez le dépôt, laissez la commande de build vide et indiquez `.` comme dossier de publication.

Après le déploiement, l'onglet « Forms » de Netlify affiche les messages reçus via `contact.html`.

## Photo

La photo (`assets/photo-henintsoa.jpg`) vient d'un fichier Word et ne fait que 94 × 94 pixels. Remplacez-la par le fichier d'origine, en gardant le même nom, dès que vous l'avez — rien d'autre à changer.
