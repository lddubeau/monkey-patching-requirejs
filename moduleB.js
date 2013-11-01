define(["module"], function (module) {
    "use strict";

    var debug = module.config().debug;
    var exports = {};

    var foo = function () {
        return bar(1, 2, 3);
    };

    var bar = _dynamic("bar", function (a, b, c) {
        return "original: called with " + a + " " + b + " " + c;
    });

    /**
     * @param {String} name Name of the fuction to export
     * @param {Function} f Function to export.
     * @returns {Function} A local wrapper for <code>f</code>.
     */
    function _dynamic(name, f) {
        if (debug) {
            exports[name] = f;
            return function () {
                // This call allows for future changes to arguments passed..
                return exports[name].apply(this, arguments);
            };
        }
        else
            return f;
    }

    exports.foo = foo;

    return exports;
});
