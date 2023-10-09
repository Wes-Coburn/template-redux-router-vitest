# Devlog | template-redux-router-vitest

[@Wes-Coburn](https://github.com/Wes-Coburn)

## Contents

> 1. [Boilerplate](#create-boilerplate-with-vite-template)
> 2. [Vitest](#install-and-configure-vitest)
> 3. [ESLint Error](#fix-eslint-error)
> 4. [React-Redux + Redux Toolkit](#install-react-redux-and-redux-toolkit)
>    1. [Redux Store](#create-redux-store)
> 5. [React Router](#install-react-router)
>    1. [Redux Ducks](#implement-redux-ducks-structure)
> 6. [CircleCI CI/CD](#connect-to-circleci-cicd-pipeline)
>    1. [Lighthouse + CodeCov](#integrate-lighthouse-and-codecov)

---

---

---

## Create Boilerplate with [Vite](https://vitejs.dev/) Template

```shell
# using npm v9.8.0
# using node v18.18.0
npm create vite@latest template-react-redux -- --template react
# npm i
# npm run dev
```

## Install and Configure [Vitest](https://vitest.dev/)

```shell
npm install -D vitest
npm install -D @vitest/ui
```

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

## Install [ESLint-Plugin-Vitest](https://www.npmjs.com/package/eslint-plugin-vitest) Error

```shell
npm install -D eslint-plugin-vitest
```

```cjs
// .eslintrc.cjs
plugins: ['vitest'],
extends: [
    'plugin:vitest/recommended'
  ],

```

## Install [React-Redux](https://react-redux.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/)

```shell
npm install react-redux
npm install @reduxjs/toolkit
```

### Create Redux Store

```js
// store.js
export const store = configureStore({
  reducer: {
    // reducers
  },
});
```

## Install [React-Router](https://reactrouter.com/en/main)

```shell
npm install react-router-dom@6
```

### Implement [Redux Ducks](https://github.com/erikras/ducks-modular-redux) Structure

## Connect to [CircleCI](https://app.circleci.com/) CI/CD Pipeline

- Connect CircleCI to GitHub repo
- Create .circle/config.yml

### Integrate [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) and [CodeCov](https://about.codecov.io/)

- Update .circleci/config.yml
- Connect CodeCov to GitHub repo
- Add to package.json scripts
  - "test:coverage": "cross-env CI=true npm test -- --env=jsdom --coverage",
  - "upload:test-report": "./node_modules/.bin/codecov"

### Install [Lighthouse-Badges](https://github.com/emazzotta/lighthouse-badges/tree/master)

> - **REMOVED FROM PROJECT DUE TO CIRCLECI ERROR**
> - To use, run the 2 scripts below manually

```shell
# ERROR MESSAGE
template-redux-router-vitest@0.0.1 lighthouse-badges
lighthouse-badges -u https://google.com -o test_results

Error: The CHROME_PATH environment variable must be set to a Chrome/Chromium executable no older than Chrome stable.
```

```shell
npm i -g lighthouse-badges
```

#### Add Lighthouse-Badges to CircleCI Workflow

```yml
// .circleci/config.yml
lighthouse-badges:
    executor: node/default
    steps:
      - run: npm run lighthouse-badges
      - run: npm run lighthouse-badges-single
```

```json
// package.json
"scripts": {
    "lighthouse-badges": "lighthouse-badges -u https://url -o test_results",
    "lighthouse-badges-single": "lighthouse-badges -u -s https://url -o test_results"
  },
```

## Install Netlify-CLI

```shell
npm install netlify-cli --save-dev
```

### Configured Netlify Deployment

> Disabled automatic deployment on Netlify
> Added deployment step to circle config

```yml
# .circleci/config.yml
deploy-netlify:
    executor: node/default
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run: npm run build
      - run: npm run netlify:deploy
```
