#  React typescript app from scratch

this project permit to create a react app without Create-react-app and understand all the elements needed to make it run.
The app runs thanks to react, Webpack, Babel and Typescript

## Webpack

## Babel

Babel is our transpiler. It permit to convert ES6 JS into into backwards compatible versions of JavaScript in current and older browsers or environments.

We call `babel-loader` in webpack  to load Babel, and then we call the presets `@babel/preset-env` & `@babel/preset-react` into the babel config file `.babelrc` to convert react and modern JS into compatible versions.

## Styling

In order to convert css file into readable file for browser, we call :
- `sass-loader` to compile sass into css
- `css-loader` to allow css file import and css modules
- `style-loader` to inject css into the DOM

## Assets

There are multiple cases to handle with assets : 
- `html-loader` and `asset/ressource` loaders permit to import a file in JS
- `copy-webpack-plugin` permit to copy assets folder so that we can make sure that assets are in the good path when building

## typescript

## production

The production build has some optimization.
First of all, we extract css style in a single file thanks to `mini-css-extract-plugin`. We also minify the css in this file thanks to `css-minimizer-webpack-plugin`.

we also minify JS thanks to `terser-webpack-plugin` and html thanks to specific settings of `html-webpack-plugin`.
