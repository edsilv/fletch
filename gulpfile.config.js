var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.dist = './dist';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.out = 'displayobjects.js';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;