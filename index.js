module.exports = function (source) {
  this.cacheable && this.cacheable();

  var content = source.replace(/^\s*module.exports\s*=\s*/, '');
  var content = content.replace(/;\s*$/, '');

  return "var _ = require('underscore'); \n module.exports = _.template(" + content + ")";
}
