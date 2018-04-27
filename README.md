# babel-plugin-mobx-async-action



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-mobx-async-action
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["mobx-async-action"]
}
```

### Via CLI

```sh
$ babel --plugins mobx-async-action script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["mobx-async-action"]
});
```
