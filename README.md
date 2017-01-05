#Web Application Boilerplate
## Overview
The web app boilerplate is built using Node, Bower, Gulp, es6, jQuery and Sass Flexbox Grid.

## Installation
```
git clone https://github.com/drewbot/web-boilerplate
npm install
bower install
```

## Dependencies
Build related dependencies are installed using NPM. Always save to package.json when installing Node dependencies.

Ex:

```
npm install browserify --save-dev
```
Front-end dependencies are installed using Bower. As with Node dependencies, always save to bower.json. However, unlike Node dependencies Bower dependencies should only be saved as devDependencies if they are not intended to be used in the actual application (for example: testing assets).

```
bower install angular --save
bower install chai --save-dev
```

## Development Environment
* Use ```gulp serve``` to serve to localhost:9000. The port can be changed in gulpfile.js if necessary but changes to the serving port should only be made locally and not committed. Running ```gulp serve``` will also convert sass files to css, convert ES6 syntax to ES5, bundle javascript files, package images and fonts and watch for changes to files within the /app folder. The server will automatically reload changes to the /app folder.
* Use ```gulp build``` to build production-ready files to a /dist folder.
* Use ```gulp build-lite``` to build production-ready files to a /dist folder but without performing the imagemin task, saving build time greatly (this task is actually run during deployment).
* ```gulp bundle``` is the task which bundles and converts our ES6 files into browser-ready javascript. This task is ran during ```gulp serve``` and ```gulp build```. Note that this task will also create a sourcemap and place it in the /maps folder.

## Javascript Style Guide
Using ES6 syntax and isolating scope to individual "components" wherever possible, the intent of our JS styleguide is to build future-friendly front-end applications which embrace the direction of JS application development as described by industry leaders.
* Files are imported into /app/scripts/app.js.
* Files can be imported into other files if necessary but ultimately the last or the importers should be imported by /app/scripts/app.js.
Upon build, our bundle task will search the dependency tree starting at /app/scripts/app.js and import all files into a single browser-ready bundle.js file. Observe our index.html does not source /app/scripts/app.js but rather /app/scripts/bundle.js.

## CSS Style Guide

#### Less is Better

Use Sass variables and mixins where possible. Try to build reusable object oriented css classes as opposed to nested structures which are heavily tied to markup structure.

#### Mobile First

Use Sass Flexbox Grid's mobile-first media queries and grid classes. All styles should first be declared at small (mobile) then built outward for larger screens using min-width media queries.

Try to isolate the responsive hiding, showing and column-width properties to the markup using visibility classes.

## Further Resources

[Flexbox Grid](http://flexboxgrid.com/ "flexbox-grid")
