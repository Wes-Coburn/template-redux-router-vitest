# Devlog | template-redux-router-vitest

[@Wes-Coburn](https://github.com/Wes-Coburn)

## Contents

> 1. [Scaffold](#scaffold-with-vite-react-template)
> 2. [Vitest](#configure-vitest)
>    1. [ESLint](#configure-eslint-for-vitest)
> 3. [React-Redux + Redux Toolkit](#configure-react-redux-and-redux-toolkit)
>    1. [Redux Store](#configure-redux-store)
> 4. [React Router](#configure-react-router)
>    1. [Redux Ducks](#implement-redux-ducks-file-structure)
> 5. [CircleCI CI/CD](#connect-to-circleci-cicd-pipeline)
>    1. [Lighthouse + CodeCov](#integrate-lighthouse-and-codecov)
> 6. [Netlify](#configure-netlify)
>    1. [Redirects](#create-netlify-redirects-file)

---

---

---

## Scaffold with [Vite](https://vitejs.dev/) React Template

```shell
# using npm v9.8.0
# using node v18.18.0
npm create vite@latest template-react-redux -- --template react
# npm i
# npm run dev
```

## Configure [Vitest](https://vitest.dev/)

```shell
npm install -D vitest
npm install -D @vitest/ui
```

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
  }
}
```

### Configure [ESLint](https://eslint.org/) for Vitest

```shell
# https://www.npmjs.com/package/eslint-plugin-vitest
npm install -D eslint-plugin-vitest
```

```json
// package.json
"devDependencies": {
  "eslint-plugin-vitest": "^0.3.2",
}
```

```cjs
// .eslintrc.cjs
plugins: ['vitest'],
extends: [
    "plugin:vitest/recommended",
  ],
```

## Configure [React-Redux](https://react-redux.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/)

```shell
npm install react-redux
npm install @reduxjs/toolkit
```

### Configure Redux Store

```js
// store.js
export const store = configureStore({
  reducer: {
    // reducers
  },
});
```

## Configure [React-Router](https://reactrouter.com/en/main)

```shell
npm install react-router-dom@6
```

### Implement [Redux Ducks](https://github.com/erikras/ducks-modular-redux) File Structure

## Connect to [CircleCI](https://app.circleci.com/) CI/CD Pipeline

- Connect CircleCI to GitHub repo
- Create .circle/config.yml

### Integrate [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) and [CodeCov](https://about.codecov.io/)

- Update .circleci/config.yml
- Connect CodeCov to GitHub repo
- Add scripts to package.json

```json
// package.json
"scripts": {
  "test:coverage": "cross-env CI=true npm test -- --env=jsdom --coverage",
  "upload:test-report": "./node_modules/.bin/codecov"
}
```

### Configure [Lighthouse-Badges](https://github.com/emazzotta/lighthouse-badges/tree/master)

> - **REMOVED FROM WORKFLOW DUE TO CIRCLECI ERROR - USE CLI ONLY**

```shell
npm i -g lighthouse-badges
```

```shell
# console
template-redux-router-vitest@0.0.1 lighthouse-badges
lighthouse-badges -u https://google.com -o test_results

# ERROR MESSAGE
Error: The CHROME_PATH environment variable must be set to a Chrome/Chromium executable no older than Chrome stable.
```

#### Add Lighthouse-Badges to CircleCI Workflow

```yml
# .circleci/config.yml
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

## Configure Netlify

```shell
npm install -D netlify-cli
```

### Configure Netlify Deployment

> Added deployment step to circle config
> Disabled automatic deployment on Netlify

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

### Create [Netlify Redirects File](https://docs.netlify.com/routing/redirects/)

> - Fixes 404 error for nested routes

#### Create '_redirects' file in '/public/' that contains

```txt
/* /index.html 200
```
