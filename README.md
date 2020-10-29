# JS config top webpack alias


To support aliases in import modules declarations we need to have two almost the same configs at jsconfig.json and webpack aliases.

This module let us to have the one source of truth for aliases - jsconfig.json.


Example of jsconfig.json:

```
{
  "compilerOptions": {
    "module": "commonJS",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "Shared/*": ["./src/shared/*"],
    }
  },
  "exclude": ["node_modules"]
}
```


Install module:

```

npm i --save-dev jsconfig-to-webpack-alias

```


At webpack config: 

```
const jsconfigToWebpackAlias = require('jsconfig-to-webpack-alias');
const jsConfig = require('./jsconfig.json');

const alias = getWebpackAliasFromJsconfig( jsConfig.compilerOptions.paths );

module.exports = {
  ...
  resolve: {
    alias,
    extensions: [
        ...
    ]
  }
}


```


