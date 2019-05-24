# TD Basic Blog

## Déploiement
Je n'ai pas réussi a effectuer de dump je pense. J'ai utiliser mongodump qui m'as crée un dossier Dump mais je pense les fichiers dedans sont inutilisable.

npm install -> download des modules
node datascript.js -> script pour remplir la bdd avec données de test
npm start -> lancement du site sur localhost:8000

## Modélisation des données

C'est un schéma plutot simple, nous avons besoin que d'une seule collection qui s'appelera "articles" et elle sera stocké dans la base document nommée "blog".
Les champs sont : title,date,author et body
Exemple d'entrée :
{ title: 'Article1' , date: '13/05/2018', author:'Me', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'}


## Afficher la liste des articles

Quel verbe HTTP utiliser ?
C'est le verbe GET 


## Entrer un article

Le formulaire devra enclencher une action sur la même route, quel verbe HTTP utiliser?
Le verbe POST pour l'envoie de données

## Supprimer un article

Ajouter une route `*/post?<ID>>*` pour supprimer un article, quel verbe HTTP utiliser.`
Le verbe GET



