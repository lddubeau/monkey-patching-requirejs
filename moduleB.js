define(["module"], function (module) {
    "use strict";

    var debug = module.config().debug;
    var exports = {};

    /**
     * @function
     * @param {String} name Name of the fuction to export
     * @param {Function} f Function to export.
     * @returns {Function} A wrapper for <code>f</code>, or <code>f</code>.
     */
    var _dynamic = (debug ?
        function (name, f) {
            exports[name] = f;
            return function () {
                // This call allows for future changes to arguments passed..
                return exports[name].apply(this, arguments);
            };
        } :
        _dynamic = function (name, f) { return f; });

    var foo = function () {
        return bar(1, 2, 3);
    };

    var bar = _dynamic("bar", function (a, b, c) {
        return "original: called with " + a + " " + b + " " + c;
    });

    exports.foo = foo;

    return exports;
});
