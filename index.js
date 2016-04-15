var fs = require('fs');
var path = require('path');
var glob = require('glob');

module.exports = function(url, parent, done) {
  var base = path.join(path.dirname(parent),url);
  if (glob.hasMagic(base)) {
    glob(base,{nodir: true},function(err,files) {
      var contents = files.map(function(cur) {
        return fs.readFileSync(cur,'utf8');
      });
      done({contents: contents.join('\n')});
    });
  } else {
    done({file: url});
  }
};