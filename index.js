/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require('path');
module.exports = function() {
  return "try {global.process.dlopen(module, " + JSON.stringify('./' + path.relative(this.options.context, this.resourcePath)) + "); } catch(e) {" +
    "throw new Error('Cannot open ' + " + JSON.stringify('./' + path.relative(this.options.context, this.resourcePath)) + " + ': ' + e);}";
}
