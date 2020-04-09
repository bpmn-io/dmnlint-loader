# dmnlint-loader

[![Build Status](https://travis-ci.com/bpmn-io/dmnlint-loader.svg?branch=master)](https://travis-ci.com/bpmn-io/dmnlint-loader)

Consume [dmnlint](https://github.com/bpmn-io/dmnlint) config files with [webpack](https://webpack.js.org).

```javascript
import { Linter } from 'dmnlint';

import linterConfig from './.dmnlintrc';

const linter = new Linter(linterConfig);
```

## Installation

```sh
npm i dmnlint-loader -D
```

## Usage

Configure the loader in your `webpack.config.js`.

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.dmnlintrc$/,
        use: [
          {
            loader: 'dmnlint-loader',
          }
        ]
      }
    ]
  }
};
```

This will ensure that [dmnlint configuration files](https://github.com/bpmn-io/dmnlint#configuration) can be consumed by your build.

## Credits

The project is based on [`dmnlint-loader`](https://travis-ci.com/nikku/dmnlint-loader) built by [nikku](https://github.com/nikku).

## License

MIT
