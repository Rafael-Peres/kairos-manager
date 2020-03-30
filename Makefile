docker/up:
	docker-compose up --build -d
	sleep 1

docker/down:
	docker-compose down --remove-orphans

docker/db/up:
	docker-compose up --build -d db adminer
	sleep 1

docker/db/down:
	docker-compose down --remove-orphans db adminer

install:
	npm install

.PHONY: test
test: docker/db/up
	npm test

.PHONY: test/unit
test/unit:
	npm run test:unit

.PHONY: test/integration
test/integration: docker/db/up
	npm run test:integration

.PHONY: test/e2e
test/e2e: docker/db/up
	npm run test:e2e

.PHONY: coverage
coverage: docker/db/up
	npm run coverage

lint:
	npm run lint

lint/fix:
	npm run lint:fix

start: docker/db/up
	npm start

start/dev: docker/db/up
	npm run dev
