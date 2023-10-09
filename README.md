# Template-Redux-Router-Vitest

[@Wes-Coburn](https://github.com/Wes-Coburn)

[![Netlify Status](https://api.netlify.com/api/v1/badges/7976680a-c64c-4cfd-baae-e186a91e2f3d/deploy-status)](https://app.netlify.com/sites/taupe-meerkat-458fbc/deploys)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Wes-Coburn/template-redux-router-vitest/tree/main.svg?style=shield&circle-token=917a5a89383b187b09385db5d3666cf6c695e967)](https://dl.circleci.com/status-badge/redirect/gh/Wes-Coburn/template-redux-router-vitest/tree/main)
___
[![Lighthouse](./test_results/lighthouse.svg)](https://github.com/Wes-Coburn/template-redux-router-vitest)
[![codecov](https://codecov.io/gh/Wes-Coburn/template-redux-router-vitest/graph/badge.svg?token=qJB9VJOwvx)](https://codecov.io/gh/Wes-Coburn/template-redux-router-vitest)
[![CodeClimate Maintability Badge](https://api.codeclimate.com/v1/badges/15e6cb4f5a6fc68dee42/maintainability)](https://codeclimate.com/github/Wes-Coburn/template-redux-router-vitest/maintainability)
[![CodeClimate Test Coverage Badge](https://api.codeclimate.com/v1/badges/15e6cb4f5a6fc68dee42/test_coverage)](https://codeclimate.com/github/Wes-Coburn/template-redux-router-vitest/test_coverage)
___
[![Lighthouse Accessibility Badge](./test_results/lighthouse_accessibility.svg)](https://developer.chrome.com/docs/lighthouse/accessibility/)
[![Lighthouse Best Practices Badge](./test_results/lighthouse_best-practices.svg)](https://developer.chrome.com/docs/lighthouse/best-practices/)
[![Lighthouse Performance Badge](./test_results/lighthouse_performance.svg)](https://developer.chrome.com/docs/lighthouse/performance/)
[![Lighthouse PWA Badge](./test_results/lighthouse_pwa.svg)](https://developer.chrome.com/docs/lighthouse/pwa/)
[![Lighthouse SEO Badge](./test_results/lighthouse_seo.svg)](https://developer.chrome.com/docs/lighthouse/seo/)
___
___

## Inspiration

### [CI/CD with React](https://medium.com/front-end-weekly/ci-cd-with-react-f4af73618d57) | [Lighthouse with CircleCI](https://www.freecodecamp.org/news/how-to-use-lighthouse-in-circleci/)

### Description

-> A template for a preconfigured React app.

- Uses vanilla JavaScript (no TypeScript).
- Configured for testing with Vitest.
- Configured for CI/CD with CircleCI and Netlify.

## Technologies

### [Vite](https://vitejs.dev/) | [Vitest](https://vitest.dev/) | [React](https://react.dev/) | [Redux](https://redux.js.org/) | [React-Router](https://reactrouter.com/en/main)

### ESLint Configuration

- [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb?activeTab=readme)

## Development

### See [DEVLOG](DEVLOG.md) for more info

```shell
npm i # install packages
ncu # update packages
ncu -u # update package.json
lighthouse-badges -u https://url -o test_results # run lighthouse and create all badges
lighthouse-badges -s -u https://url -o test_results # run lighthouse and create single badge
```
