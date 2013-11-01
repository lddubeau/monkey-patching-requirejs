'use strict';
var path = require("path");
var requirejs = require("requirejs");
requirejs.config({
    baseUrl: path.join(__dirname, ".."),
    config: {
        "moduleB": {
            debug: true
        }
    },
    nodeRequire: require
});
var moduleA = requirejs("moduleA");
var moduleB = requirejs("moduleB");


describe("monkey patching modules", function () {
    it("first way", function () {
        expect(moduleA.foo()).toEqual("original");

        spyOn(moduleA, "bar").andReturn("patched");

        expect(moduleA.foo()).toEqual("patched");
    });

    it("second way", function () {
        expect(moduleB.foo()).toEqual("original: called with 1 2 3");

        spyOn(moduleB, "bar").andReturn("patched");

        expect(moduleB.foo()).toEqual("patched");
    });
});
