/*test suite for camera control class*/
var Camera = require('../src/CameraControl.js');
var sricam = require('../src/sricamAF004.js');
var Utils = require('../src/utils.js');

describe('Camera Control test suite', function () {

  describe('base initialization', function () {
    it('should correctly init the CameraControl', function () {
      var camera = new Camera("Frontdoor");
      camera.getCamera().should.have.property('id', 'Frontdoor');
    });

    it('should correctly setup the CameraControl with a controlSpec', function () {
      var camera = new Camera("Frontdoor");
      camera.setup({ip: "127.0.0.1"}, {login:"admin", pwd:"secret"}, sricam);
      camera.getCamera().should.have.property('id', 'Frontdoor');
      camera.getCamera().should.have.property('host', {ip: "127.0.0.1"});
    });

    it('should correctly setup the CameraControl with a controlSpec', function () {
      var camera = new Camera("Frontdoor");
      camera.setup("127.0.0.1", {login:"admin", pwd:"secret"}, sricam);
      camera.getCamera().should.have.property('id', 'Frontdoor');
      camera.getCamera().host.should.have.property('ip', '127.0.0.1');
    });
    it('should decode an url from a pair (action,value)', function () {
        var camera = new Camera("Frontdoor");
        camera.setup({ip: "127.0.0.1"}, {login:"admin", pwd:"secret"}, sricam);
        console.log(camera.getCamera());
        var type = Utils.getActionType(camera.getCamera().control, "moveLeft");
        var value = Utils.getActionValue(camera.getCamera().control, "moveLeft");
        type.should.equal("camera.control.ptz.move");
        value.should.equal("left");
        var decoded = camera.decode(type, value);
        var check = Utils.isString(decoded);
        check.should.equal(true);
        console.log();
    });
    it('should decode an url from a pair (action,value)', function () {
        var camera = new Camera("Frontdoor");
        camera.setup({ip: "127.0.0.1"}, {login:"admin", pwd:"secret"}, sricam);
        var type = Utils.getActionType(camera.getCamera().control, "moveRight");
        var value = Utils.getActionValue(camera.getCamera().control, "moveRight");
        var decoded = camera.decode(type, value);
        var check = Utils.isString(decoded);
        check.should.equal(true);
        console.log();
    });
  });
});
