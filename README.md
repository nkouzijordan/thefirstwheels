# The First Wheels

Site personnel automobile en français. Page responsive, illustration SVG originale, trois conseils à déplier, filtre par thème et menu mobile. Aucun abonnement, aucune dépendance, aucune compilation. Fonctionne aussi sans JavaScript (articles et navigation restent accessibles).

## Publication gratuite sur GitHub Pages

1. Créez un compte gratuit sur https://github.com si nécessaire.
2. Si le nom de compte `thefirstwheels` est disponible et que vous le choisissez, créez un dépôt **public** nommé exactement `thefirstwheels.github.io`. Adresse prévue : https://thefirstwheels.github.io/ . La disponibilité de ce nom de compte n’a pas été vérifiée.
3. Avec un autre nom de compte, créez un dépôt public `thefirstwheels`. Adresse prévue : `https://VOTRE-PSEUDO.github.io/thefirstwheels/` (remplacez VOTRE-PSEUDO). Vous pouvez aussi nommer le dépôt `VOTRE-PSEUDO.github.io` pour publier à la racine de votre adresse.
4. Décompressez le ZIP. Dans le dépôt, utilisez **Add file → Upload files** et déposez le **contenu** du dossier : `index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll` et ce README. Ne déposez pas le ZIP ni le dossier parent. Conservez le dossier `assets` avec ses deux fichiers. Si votre appareil cache `.nojekyll`, vous pouvez le créer depuis **Add file → Create new file** (fichier vide) ; il n’est pas essentiel ici car il n’y a aucun dossier commençant par un soulignement.
5. Cliquez sur **Commit changes** pour enregistrer les fichiers dans la branche `main`.
6. Allez dans **Settings → Pages → Build and deployment**. Choisissez **Deploy from a branch**, puis **main** et **/(root)**, et cliquez sur **Save**.
7. La publication peut prendre jusqu’à 10 minutes. Revenez dans **Settings → Pages** et cliquez sur **Visit site**.

Le site n’est pas encore publié : ce pack prépare les fichiers. Il ne crée pas de compte ou de dépôt GitHub. `github.io` est une adresse gratuite fournie par GitHub ; un domaine personnalisé tel que `thefirstwheels.be` se réserve séparément et est généralement payant. Laissez le champ Custom domain vide pour l’adresse gratuite.

## Aperçu avant publication

Ouvrez `index.html` dans un navigateur après décompression. Tous les visuels, styles et scripts sont inclus et fonctionnent hors connexion. Sur ordinateur, vous pouvez aussi exécuter `python3 -m http.server 8000` dans ce dossier, puis ouvrir http://localhost:8000 .

## Personnalisation

- Textes, articles et rubrique À propos : `index.html`.
- Couleurs : variables au début de `styles.css` (rouge sombre, noir, crème).
- Visuel principal : `assets/route.svg` ; remplacez-le par votre photo et modifiez le chemin et le texte alternatif dans `index.html`.
- L’identité affichée est une composition typographique, pas une reproduction de votre logo existant.
- Pour ajouter vos réseaux ou un contact, insérez uniquement vos liens exacts dans la rubrique À propos. Aucun profil social ni numéro n’a été inventé.
- Les liens vers les fichiers sont relatifs : ils conviennent aux deux types d’adresse GitHub Pages.
- Aucun formulaire, traceur, cookie ou service externe n’est chargé.

## Fichiers

`index.html` : page d’accueil et contenu.
`styles.css` : design responsive.
`script.js` : menu, filtres et année.
`assets/route.svg` : illustration automobile originale.
`assets/favicon.svg` : icône de l’onglet.
`.nojekyll` : publication directe des fichiers statiques.

## Sources de la procédure

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Les articles contiennent des repères généraux ; ils ne remplacent pas les consignes du constructeur ni un examen adapté du véhicule.
