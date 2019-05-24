# TD Basic Blog
**Adim & Adel BENTAKOUKA**
## Lancement du projet

Il faut faire un npm install puis allez sur http://localhost:8000/
Pour générer la BDD, http://localhost:8000/insertDB


## Afficher la liste des articles

Faire une page web permettant d'afficher la liste des articles. Bonus si la pagination est gérée.
La page devra s'afficher à la route `*/*`

Ëcrire une fonction summarize qui génére un résumé de l'article (par exemples les 140 premiers caractères)


Quel verbe HTTP utiliser ?
**Le verbe GET**

## Afficher un article

Faire en sorte qu'un article avec l'identifiant unique ID s'affiche à la route `*/post/<ID>*`

## Entrer un article

Créer un formulaire pour taper un article sur la route `*/post/create*`
Le formulaire devra enclencher une action sur la même route, quel verbe HTTP utiliser?
**POST**


## Supprimer un article

Ajouter une route `*/post?<ID>>*` pour supprimer un article, quel verbe HTTP utiliser.`
**GET**
## Permettre la suppression d'un article

Ajouter un lien cliquable en bas de l'article permettant de supprimer l'article.
