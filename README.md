# npm-module-packaging-for-browser-and-node

Proof of concept for a multi module NPM package that's used both in a browser app and nodejs app.

Dependencies: Module3 -> Module2 -> Module1
App-Browser is a browser app that uses module3.
App-NodeJS is a NodeJS app that uses module3.

This teaches you how to use Event Listeners in order for you to execute bundled
code with Wepback and Vanilla JavaScript.

### Requirements:

`npm install webback webpack-cli -g`

### App-Browser

- `npm install`
- `npm run build` to generate dist/main.js that's used in the HTML page.
- Open the HTML page in a browser.

### App-NodeJS

- `npm install`
- `node index.js`

### Notes

- Webpack will look for src/index.js by default.
- I'm currently using Webpack 4, which require a webpack.config.js file for basic setup.
