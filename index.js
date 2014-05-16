var path = require('path');

var pattern = function(file) {
  return {
    pattern: file, included: true, served: true, watched: false
  };
};

var framework = function(files) {
  files.unshift(pattern(path.dirname(require.resolve('jasmine-given'))  + '/dist/jasmine-given.js'));
};

framework.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-given': ['factory', framework]
};