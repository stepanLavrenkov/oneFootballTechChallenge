# How to run tests

- Please note that you need to install and run the `BestBuy/api-playground`
- Install `node` on your machine
- Run `npm i` command in terminal
- Create `.env` from `.env.example` and provide the link to the api (Default value is `localhost`)
- Then run `npm run test` command

# Overview

- Under the `src/api` folder you can find the `AbstractApi` class which has default methods for requesting/creating/updating data. This method is extended by controllers located under `controllers` folder. The `App` class combines all things together and provides space for creating custom methods on top of controllers.
- Also, I wrote simple types generator (located unter `src/generator` folder), which takes API documentation (`swagger.json`) and generate types. It could be extended for generating controllers as well. In order to update the types, you can run the following command: `npm run generate:types`. (Requires `.env` file)
