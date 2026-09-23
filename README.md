# Portfolio de Henintsoa Andrianina Mampiononaritina

Site statique en HTML, CSS et JavaScript, sans installation ni compilation. Il se déploie tel quel sur Netlify.

## Structure

```
index.html       Accueil (présentation, projets récents, stack)
about.html       À propos (présentation, formation, parcours)
skills.html      Compétences
projects.html    Projets
services.html    Services (à garder ou à supprimer)
contact.html     Contact (formulaire Netlify Forms)
merci.html       Page affichée après l'envoi du formulaire
404.html         Page « introuvable » (utilisée automatiquement par Netlify)
css/style.css    Styles et couleurs de tout le site
js/main.js       Thème clair/sombre, menu mobile, pile 3D de l'accueil
assets/          Images (favicon, portrait, captures d'écran)
```

## Voir le site sur votre ordinateur

Double-cliquez sur `index.html`. Le formulaire de contact ne fonctionne qu'une fois le site en ligne sur Netlify.

## Compléter vos informations, page par page

Cherchez `À COMPLÉTER` dans le code (Ctrl + Maj + F dans VS Code). Ces commentaires indiquent chaque endroit à modifier. Les textes entre crochets, comme `[période]`, sont à remplacer par vos vraies informations.

Ordre conseillé :

1. `contact.html` : votre adresse e-mail et votre lien LinkedIn.
2. `about.html` : votre photo (remplacez `assets/profil.svg`), votre parcours, vos dates et vos postes.
3. `projects.html` : le contexte, votre rôle et le résultat de chaque projet. Pour une vraie capture d'écran, mettez l'image dans `assets/` et remplacez le `<svg>` de la zone `cover` par `<img src="assets/mon-projet.png" alt="...">`.
4. `skills.html` : ajustez la liste des technologies.
5. `services.html` : gardez, modifiez ou supprimez les services et ajoutez vos tarifs. Si vous supprimez la page, retirez aussi son lien du menu dans chaque fichier HTML.
6. `index.html` : le texte d'accueil et le badge de disponibilité.

Le menu et le pied de page sont répétés dans chaque fichier HTML. Si vous ajoutez une page, copiez-les.

## Changer les couleurs

Modifiez les variables au début de `css/style.css` (`--violet`, `--mint`, `--sun`, `--ink`, `--bg`).

## Déployer sur Netlify

**Option 1, la plus rapide** : sur https://app.netlify.com/drop, glissez le dossier du projet.

**Option 2, recommandée** : mettez le projet sur GitHub, puis sur Netlify choisissez « Add new site », « Import an existing project » et sélectionnez le dépôt. Laissez la commande de build vide et indiquez `.` comme dossier de publication. Chaque `git push` met le site à jour.

Après le premier déploiement, allez dans l'onglet « Forms » de Netlify pour voir les messages reçus. Vous pouvez y activer une notification par e-mail.

## Améliorations possibles

- Un nom de domaine personnalisé (Netlify, « Domain management »).
- Des captures d'écran réelles et des liens vers les démonstrations en ligne.
- Un bouton WhatsApp ou LinkedIn dans la page Contact.
