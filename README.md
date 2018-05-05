# babel-plugin-mobx-async-action

[![NPM](https://nodei.co/npm/babel-plugin-mobx-async-action.png)](https://www.npmjs.com/babel-plugin-mobx-async-action/)

[![Build Status](https://travis-ci.com/Strate/babel-plugin-mobx-async-action.svg?branch=master)](https://travis-ci.com/Strate/babel-plugin-mobx-async-action)

Converts all async actions to mobx's 4 `flow` utility call.

* [Use other package](#toc-mobx-package)
* [Use with Typescript](#toc-use-with-typescript)


## Example

**In**

```js
import { action } from "mobx";

action(async function doSome() {
  const response = fetch("/api/list")
  this.items = await response.json();
});
```

**Out**

```js
"use strict";

import { action } from "mobx";
import { flow as _flow } from "mobx";

action((() => {
  var _ref = _flow(function* () {
    const response = fetch("/api/list");
    this.items = yield response.json();
  });

  function doSome() {
    return _ref.apply(this, arguments);
  }

  return doSome;
})());
```

## Motivation

Motivation to use flow() well described in official mobx documentation: https://mobx.js.org/best/actions.html#flows
However, it is much useful to write pure async/await actions, especially if original code written in typescript: generator
functions can not be covered by types, especially results of `yield` calls. So, let write actions as before, but let
babel and this plugin do all the rest.

## Caveats

Plugin support only ES6 imports. Only this imports are supported:
```
import {action} from "mobx";
```
```
import {action as actionAlias} from "mobx";
```
```
import * as mobx from "mobx";
```
```
import * as mobxAlias from "mobx";
```
For example, this cases are **not supported**:
```
const mobx = require("mobx")
```
```
const {action} = require("mobx")
```
```
import * as mobx from "my-mobx-alias"
```
```
import * as mobx from "mobx";
const {action} = mobx;
action(function() {});
```


## Installation

```sh
$ npm install babel-plugin-mobx-deep-action
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["mobx-deep-action"]
}
```

### Via CLI

```sh
$ babel --plugins mobx-deep-action script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["mobx-deep-action"]
});
```


## <a id="toc-mobx-package"></a> Use other package.

If you use wrapper for "mobx" package, you can pass it's name to plugin:

#### .babelrc

```json5
{
  "plugins": [
    ["mobx-deep-action", {
      "mobx-package": "mobx-custom"
    }]
  ]
}
```

## <a id="toc-use-with-typescript"></a> Use with typescript.

This plugin could handle decorators code, emitted from typescript, such as:

```js
import * as tslib_1 from "tslib";
import { action } from "mobx";
export default class Class2 {
    async method() {
        await 123
        await 321
    }
}
tslib_1.__decorate([
    action
], Class2.prototype, "method", null);
```

To get this code worked, you should enable [importHelpers](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
compiler option, and get [tslib](https://www.npmjs.com/package/tslib) package installed. Also, typescript
should emit es6 modules, so, you should target your compiler to es2015+. That's all,
plugin detect import from "tslib" and handle typescript decorators.
