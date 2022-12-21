# Vite-TypeScript-React

# Installations and Setup
[ * ] Generate Vite-TypeScript React App
[ * ] Setup eslint + prettier + typescript
    _Don't use npm kids. Such a headache🤕_ 
    
[ * ] Setup vitest + jsdom + @testing-library
- Install testing deps `yarn add -D vitest @vitest/ui @vitest/coverage-c8 jsdom @testing-library/jest-dom (for nice matchers/expectations) @testing-library/react @testing-library/user-event`
- configure vite to recognise vitest by adding the following in vite.config.cjs by adding the following in vite.config.cjs

```js
/// <reference types="vitest" />
/// <reference types="vite/client" />

...

test: {
globals: true,
environment: 'jsdom',
setupFiles: './src/setupTests.ts',
// css: true,
},

...

```
- setup test by importing `@testing-library/jest-dom`
- Setup test and coverage scripts like so:
```json
"test": "vitest",
"test:ui": "vitest --ui",
"coverage": "vitest run --coverage"
```
[ * ] Setup react-router
- install `react-router`
- wrapp the App with a HashRouter
- Browser router is an option but uses the history API which causes trouble deploying to different CDNs. Basically needs 404 redirects hence needing special configuration
- 

# References
- [Introduction to React Testing library](https://kentcdodds.com/blog/introducing-the-react-testing-library)
- [Common mistakes with react-testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)