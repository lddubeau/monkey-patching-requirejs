define([], function () {
    "use strict";

    var foo = function(){
        return exports.bar();
    };

    var bar = function(){
        return "original";
    };

    var exports =  {
        foo: foo,
        bar: bar
    };

    return exports;
});
