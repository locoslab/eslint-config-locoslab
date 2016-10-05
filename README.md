# eslint-config-locoslab [![Build Status](https://travis-ci.org/locoslab/eslint-config-locoslab.svg?branch=master)](https://travis-ci.org/locoslab/eslint-config-locoslab) [![npm version](https://badge.fury.io/js/eslint-config-locoslab.svg)](https://badge.fury.io/js/eslint-config-locoslab)
ESLint (http://eslint.org/) configuration for [Locoslab](https://github.com/locoslab/) projects

## Usage
1. Install: `npm install --save-dev eslint-config-locoslab`
2. 'Extend' the config in your eslint configuration (`.eslintrc.js`, ...)

```js
{
  "extends": "locoslab"
}
```

Note: ESLint is a peer dependency and must be installed separately, which allows using the preferred version for each project.

## License
[MIT](http://opensource.org/licenses/MIT)
