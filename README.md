# Rainforest Frontend Homework Result

## Setup

**Requirements:** NodeJS >= 14, [yarn](https://yarnpkg.com/en/docs/install)

`yarn install` to install.

`yarn start` to start the development and api server

`yarn test` to runs unit tests

`yarn e2e` to runs E2E test on headless mode

`yarn e2e-dev` runs E2E test on development mode

## Routing

The app uses `react-router` to route the user to two screens:

- List test suites `/`
- Edit test suite `/test-suite/:id/edit`

## Project Structure
- src
  - components: contains the presentational components.
  - hooks: contains hooks to handle data fetching and validation and tests for them.
  - libs: contains functions to be reused for different components.
  - pages: contains the two pages rendered by the routes which also encapsulate data fetching, it can also contains sub-components which handle state and business logic.
- cypress/e2e/specs contains the specs for the application.