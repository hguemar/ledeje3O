# Basic blog

## Overview

*Used technologies:*  
* Docker (Compose)
* NodeJS w/ 
  * Express
  * Supertest
  * Chai (tests)
  * Mocha (tests)
* MongoDB
* Make



## Quick start (Make toolbox)

Discover our Make toolbox :  
`make help`

Manager the docker stack :  
`make up`  

Launch tests :  
`make test`

## Load fixtures

While your app is up, visit or GET /fixtures/play to create some fixtures in the MongoDB database. 

## Manage database

We provide a MongoDB Express service in our docker-compose stack.

Visit http://localhost:8081

Or you can use `make mongodb` to enter in the console mode of mongodb service.
