# Projet blog

## Deploiement
Pour déployer le projet :
* Utiliser la VM Fedora fournie
* Effectuer un NPM install pour ajouter et/ou mettre à jour les dépendances du projet
* Lancer dans un terminal mongo pour faire tourner la base nosql
* Lancer dans un autre terminal le server (node server.js)
* La route localhost:8000 contient l'index du projet
\* Avec la route */generate* des articles sont générés aléatoirement

## Dependances
* Faker : permet de générer des données aléatoires pour la création des articles
* Uuid : permet de générer mes identifiants uniques pour ma base de données

## Format des données 
On a une seule collection d'articles :
* id : contient l'identifiant unique 
* titre : titre de l'article
* auteur : auteur de l'article
* date : date d'écriture de l'article
* contenu : contenu de l'article

## Routes
* On affiche les données avec une requête GET sur la route */*
* On affiche les données avec une requête GET sur la route */post/<ID>*
* On affiche la page de création d'article avec une requête GET sur la route */post/create*
* On insère un article avec une requête POST sur la route */post/create*
* On supprime un article avec une requête GET sur la route */post/delete/<ID>*
