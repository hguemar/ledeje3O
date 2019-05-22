# TD Basic Blog
## Cabrol Alexis - alexiscabrololivaux@gmail.com

## Pour lancer le projet

* Faire un npm install pour avoir les dépendances.
* npm start puis rdv sur http://localhost:8000/ 
* pour générer des données rdv sur http://localhost:8000/generate

## Réponses aux questions 
### Afficher la liste des articles

Quel verbe HTTP utiliser ? On utilise le verbe HTTP GET.

### Entrer un article

Créer un formulaire pour taper un article sur la route `*/post/create*`
Le formulaire devra enclencher une action sur la même route, quel verbe HTTP utiliser?
Pour l'action sur le formulaire, on utilise le verbe HTTP POST.

### Supprimer un article

Ajouter une route `*/post?<ID>>*` pour supprimer un article, quel verbe HTTP utiliser ? On utilise le verbe HTTP GET car on y accède depuis une balise attribute.


