const path = require('path');
module.exports = function(app) {
    require(path.resolve('server', 'middlewares', 'proxy.middleware'))(app)
}