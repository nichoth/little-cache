# little-cache

In memory cache for ajax requests.

## install

```
$ npm install little-cache
```

You need to be sure that Promise exists. Requests are handled with native `fetch`, or you can pass a fetch function to the constructor:

```js
var cache = require('little-cache')(function myFetch(url) {
  /* return a promise for data ... */
});

```

## example

```js
var Cache = require('little-cache');
var cache = Cache();

cache.find('some/url')
  .then(function(resp) {
    console.log(resp);
  })
;
```

