<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS Essetials
A tech talk on NestJS essetials for Capitalise's Dev Day.
- Tasks and Scheduler
- RabbitMQ

## Story
I'm a proud cat owner. My cats love to drink water and I want them to always have water without needing my help to
get more water into their bowl.
So I bought a water level sensor and a water pump to attach to their bowl. In this NestJS Essentials, we're going to set up a cron job to automatically check the water level and, if needed, to activate the water pump to push water into the bowl. Additionally, we're setting up a messaging system to ensure that I'm notified every time that happens.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

Nest is [MIT licensed](LICENSE).
