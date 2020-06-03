# NC News Frontend

Welcome to NC News frontend, a reddit style news aggregator for Millennials who love Millennial pink and avocados! The frontend was built with React, Axios, styled-components and Jest for testing.

A link to the backend repo can be found [here](https://github.com/JasminBower/Backend-News-App).

Please click [here](https://jbnews.netlify.app) for a link to the hosted version of this application.

## Available Functionality

As a user you are abe to:

- view a list of all posted articles
- view a page for each topic with a list of related articles
- view an individual article
- view an individual article's comments
- sort articles by:
  - date created (oldest)
  - votes
  - comment count
- post a new comment to an existing article (as a default logged in user)
- delete own comments (as a default logged in user)
- vote on article and immediately see the change
- vote on comment and immediately see the change

## Getting Started

These instructions will provide you with a copy of the project on your local machine.

Node.js needs to be version v13.8.0 or higher.

React.js needs to be v16.13.1 or higher.

After cloning the repo cd into jasminsncnews, then install dependencies with:

```
npm install
```

To start and watch the project in development mode:

```
npm start
```

A test server will then run on localhost:3000

To build for production mode:

```
npm run build
```

This will bundle React in production mode and optimize the build for the best performance, after this your app is ready to be deployed. See [netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) for instructions.

## Languages and Tools

- HTML
- CSS
  - [styled-components](https://styled-components.com/)
- Javascript
  - [React](https://reactjs.org/)
  - [Axios](https://github.com/axios/axios) - HTTP client
  - [Jest](https://jestjs.io/) - testing utils

## Authors

- Jasmin Bower - _initial work_ - [GitHub](github.com/JasminBower)
