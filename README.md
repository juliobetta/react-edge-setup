# REACT EDGE SETUP

## Stack


* React 16.3
* Babel 7
    * Pipeline operator
    * Opional Chaining
* Webpack 4
* React-Toolbox (Material Design)
* Jest, for unit tests
* Cypress, for integration tests
* ... and it works offline!


## Installation

`npm install -g yarn && yarn` and BOOOM!


## Run & Generate

**Development mode**

    yarn start

... and access http://localhost:8080

**Build Web package**

    yarn build

The files will be located in the folder `www`.



## Storybook

According to the lib repository:

> Storybook runs outside of your app. This allows you to develop UI components in isolation, which can improve component reuse, testability, and development speed. You can build quickly without having to worry about application-specific dependencies.

To run storybook server, execute:

    yarn storybook

To create stories, add a file in the component's folder following the pattern: `<name>.stories.js`.

For more information about how to create stories, please refer to the docs [here](https://github.com/storybooks/storybook).


## Tests

The project is covered by tests using Jest and [Cypress](https://cypress.io).

To unit tests, execute:

    yarn test

... and e2e tests with:

    yarn test:e2e