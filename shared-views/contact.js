var __base = __base || '../',
    c = require(__base + 'shared-config/constants'),
    log = c.getLog('shared-views/contact');

module.exports = function(d, cb) {

    d.test = "bar";

    cb(null, d);
}