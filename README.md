TIINYTINY Lib
=============
This module is aimed to provide some shorthand functions for developers to make their code shorter and more readable!

## Installation ##

Simply type the following command to install this module

```text
npm install tiinytiny
```

## Usage ##
To use this module, simply requires the module and use the functions attached on the returned object.

```javasctipt
let tiiny = require( 'tiinytiny' );
```

Some of the functions are able to be exposed as an extension of existing built-in objects. To make them expose themslves, use the following command.

```javascript
let tiiny = require( 'tiinytiny' ).register();

// tiiny.imprintProperties now can be accessed via Object
let target = Object.imprintProperties({}, {
	prop1: 1,
	prop2: 2
}, true);
```
