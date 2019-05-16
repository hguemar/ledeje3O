# HELP
# This will output the help for each task
.PHONY: help up logs down sh test

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

up: ## Up the docker stack
	@docker-compose up -d

logs: up ## Track node logs
	@docker-compose logs -f node

down: ## Down the docker stack
	-@docker-compose down

sh: up ## Exec sh through the node container
	@docker exec -it node sh

test: up ## Launch npm test in the node container
	@docker-compose exec node npm test
