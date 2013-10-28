'use strict';
require("amd-loader");
var moduleA = require("../moduleA");


describe("blah", function () {
    it("blah", function () {
        expect(moduleA.foo()).toEqual("original");

        spyOn(moduleA, "bar").andReturn("patched");

        expect(moduleA.foo()).toEqual("patched");
    });
});
