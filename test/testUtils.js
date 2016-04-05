var Utils = require('../src/utils.js');

describe('Utils test suite', function () {

    it('checkIsString should return true', function () {
        var s = "I'm a string";
        var check = Utils.isString(s);
        check.should.equal(true);
    });

    it('checkIsObject should return false', function () {
        var s = "I'm a string";
        var check = Utils.isObject(s);
        check.should.equal(false);
    });

    it('checkIsObject should return true', function () {
        var o = {host: "127.0.0.1"};
        var check = Utils.isObject(o);
        check.should.equal(true);
    });

    it('checkIsObject should return true', function () {
        var o = {ip: "127.0.0.1"};
        var check = o.hasOwnProperty("ip");
        check.should.equal(true);
    });

    it('checkIsObject should return true', function () {
        var o = {ip: "127.0.0.1"};
        var check = Utils.checkObjectProps(o,["ip"]);
        check.should.equal(true);
    });

});
