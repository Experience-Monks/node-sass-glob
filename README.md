# node-sass-glob

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A glob importer for use with node-sass

## Installation

```bash
npm i node-sass-glob
```

## Usage

[![NPM](https://nodei.co/npm/node-sass-glob.png)](https://www.npmjs.com/package/node-sass-glob)

To use the importer, simply pass it to the `node-sass.render()` function

```bash
var sass = require('node-sass');
sass.render({
  importer: require('node-sass-glob'),
  ...options
}, function (err, output) {});
```
In your scss files, simply use globs in your import statements.

```bash
@import 'styles/**/*.scss';
@import 'content/*.scss';
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/node-sass-glob/blob/master/LICENSE.md) for details.
