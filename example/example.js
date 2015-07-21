var Cache = require('../');
var cache = Cache();

cache.find('some/url')
  .then(function(resp) {
    console.log(resp);
  })
;

