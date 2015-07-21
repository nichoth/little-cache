module.exports = Cache;

function Cache(fetchFn) {
  if (!(this instanceof Cache)) return new Cache();
  this.c = {};
  this.fetch = fetchFn || fetch;
}

Cache.prototype.find = function find(url) {
  if (this.c[url]) return this.c[url];
  this.c[url] = this.fetch(url);
  return this.c[url];
};

Cache.prototype.findAll = function findAll(urls) {
  ps = urls.map(function(url) {
    return this.find(url);
  }, this);
  return Promise.all(ps);
};
    
