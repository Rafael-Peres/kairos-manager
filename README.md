# Kairos Manager

School schedule manager

## Built With

* [NodeJS](https://nodejs.org/dist/latest-v12.x/docs/api/)
* [Docker](https://www.docker.com/)

## Getting Started

### Installing

Run this command in your terminal:
```bash
make install
```

### Running the application

Run this command in your terminal:
```bash
make start
```

If you prefer with Docker, run this commands in your terminal:
```bash
make docker/up
```

## Testing

### Running developer mode

Run this command in your terminal:
```bash
make start/dev
```

### Running all tests

Run this command in your terminal:
```bash
make test
```

### Running only unit tests

Run this command in your terminal:
```
make test/unit
```

### Running only integration tests

Run this command in your terminal:
```bash
make test/integration
```

### Running only e2e tests

Run this command in your terminal:
```bash
make test/e2e
```

### Checking code coverage

Run this command in your terminal:
```bash
make test/coverage
```

### Checking the code style

Run this command in your terminal:
```bash
make lint
```

To automatically correct possible errors just run this command in your terminal:
```bash
make lint/fix
```