# Devlog | template-react-redux-js

@Wes-Coburn

## Create Boilerplate with Vite Template

```shell
# using npm 9.8.0
npm create vite@latest template-react-redux -- --template react
# npm i
# npm run dev
```

## Install and Configure Vitest

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

## Fix ESLint Error

> - [Stack Overflow Answer](https://stackoverflow.com/questions/55807824/describe-is-not-defined-when-installing-jest)
> - [NPM Docs](https://www.npmjs.com/package/eslint-plugin-jest)
> - **WATCH: This fix is unclear, as replacing 'plugin:jest/recommended' with any nonsense also works (eslint error?)**

```shell
npm install -D eslint-plugin-jest
```

```cjs
// .eslintrc.cjs
extends: [
    'plugin:jest/recommended'
  ],

//plugins: ['jest'], // included by extending
//env: { "jest/globals": true }, // included by extending
```

## Install React-Redux and Redux-Toolkit

```shell
npm install react-redux
npm install @reduxjs/toolkit
```

## Create Redux Store

```js
// store.js
export const store = configureStore({
  reducer: {
    // reducers
  },
});
```

## Install React-Router

```shell
npm install react-router-dom@6
```

### Implement [Redux Ducks](https://github.com/erikras/ducks-modular-redux) Structure
