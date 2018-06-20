# TIINYTINY Supportive Library #
This library is aimed to provide some useful functions for developers to make their code shorter!



## Installation ##
Simply type the following command to install this module
```
npm install tiinytiny
```






## Usage ##
To use this module, simply requires the module and use the functions attached on the returned object.
```javascript
let tiiny = require( 'tiinytiny' );
```

### Built-in object extensions ###
Since that the module is designed to extend the capabilities of the existing built-in objects, the supportive apis will be attached onto the built-in ojbects by default. Developers who don't want to mess with the built-in objects can use the following statement before the first use of tiinytiny module. 
```javascript
require('tiinytiny/safe');
```

Here's an example for developers who want to use tiinytiny but don't want to mess with their global built-in objects.
```javascript
require( 'tiinytiny/safe' );
let tiiny = require( 'tiinytiny' );
```

> Note that once the **tiinytiny/safe** is invoked, there tiinytiny apis will not be attached on the built-in objects anymore!






## API List ##
This section lists the apis defined in the library.

### ImprintProperties(target, properties, options) ###
The api that defines a set of properties using Object.defineProperties on to an arbitrary object. This api provides easier and more intuitive usage which prevent the needs to assign the annoying options - **{value, writable, configurable, enumerable}** - per property.

#### params ####
| name | type | descriptions |
|:-------|:----|:----|
| target | ```Object``` |  |The object where the propoeries are appended to. |
| properties | ```Object``` |  | The object that contains the properties to be appended. |
| options | ```Object``` | Options ``` {writable, configurable, enumerable} ``` will be applied on all properties |
|  | ```Array``` | Options ``` [writable, configurable, enumerable] ``` will be applied on all properties |
|  | ```Boolean``` | Equals to options \[**value**, **value**, true\] of Array input |

#### return ####
The target object provided in the first argument.

#### extension point ####
```javascript
Object.imprintProperties
```

#### example ####
```javascript
const tiiny = require('tiinytiny');

// Append two properties, prop1 and prop2, onto an object and return the object instance
// The properties are created with {writable:true, configurable:true, enumerable:true}
let target = tiiny.ImprintProperties({}, {
	prop1: 1, prop2: 2
}, true);
```



### PromiseWaitAll( promises ) ###
The original Promise.all api will only guarantee that all the promises are resolved, it will reject immediately if any promise fails. Hence, developers will never know all other promises' statuses. This api is provided to solve this problem by waiting all the promises to end and return all the promises' results.

#### params ####
| name | type | descriptions |
|:----|:----|:----|
| promises | ```Promise[]``` | An array of promises to be waited |

#### return ####
An array of objects (listed in the following table) that decribes the promises' results.

| field | type | descriptions |
|:----|:----|:----|
| resolved | ```Boolean``` | true if the promise is successfully resolved |
| seq | ```Number``` | The promise's index in the original input promise array |
| result | ```Any``` | The execution result returned by the promise |

#### extension point ####
```javascript
Promise.wait
```

#### example ####
```javascript
const tiiny = require('tiinytiny');

let promises = [ Promise.resolve(), Promise.reject(), 1, 2, 3 ];
let results = await tiiny.PromiseWaitAll(promises);
results.forEach((pRes)=>{
    console.log(`${pRes.seq}: ${pRes.resolved?'resolved':'rejected'}`);
    console.log(pRes.result);
});
```


### Include( modulePath ) ###
It's a tiny api that helps the developers to solve the relative path problem without making the node module tree dirty. This api will use the entry module's location as base position to resolve relative paths. So the api will perform module require logic on behave of the entry module.

#### params ####
| name | type | descriptions |
|:----|:----|:----|
| modulePath | ```String``` | The path of the requied module |

#### return ####
The requested module instance if succeeded, an exception will be raised otherwise.

#### extension point ####
```javascript
global.include
```

#### example ####
```javascript
/**
 **     Project Structure
 **         /entry.js
 **         /c/some.js
 **         /a/b/sub.js
 */

// module /c/some.js
const tiiny = require('tiinytiny');
const fs = tiiny.Include( 'fs' );
const sub = tiiny.Include( './a/b/sub' );
```