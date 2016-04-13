var moveType = "camera.control.ptz.move";
var stopType = "camera.control.ptz.stop";
var velocityType = "camera.control.ptz.velocity";
var zoomType = "camera.control.ptz.zoom";
var focusType = "camera.control.ptz.focus";

var sricam_ap004 = {
      auth : {
        userParam: "loginuse",
        passParam: "loginpas"
      },
      ptz : {
        velocity : {
          action: "camera_control.cgi",
          param: "100",
          paramName: "param",
          slow: "1",
          mid: "5",
          fast: "10"
        },
        zoom: {
          action: "camera_control.cgi",
          in: {
            param: "17"
            paramName: "param",
            value: {
              paramName: "value",
              start: "0",
              stop: "1"
            }
          },
          out: {
            action: "camera_control.cgi",
            param: "18"
            paramName: "param",
            value: {
              paramName: "value",
              start: "0",
              stop: "1"
            }
          }
        },
        focus: {
          action: "camera_control.cgi",
          in: {
            param: "19"
            paramName: "param",
            value: {
              paramName: "value",
              start: "0",
              stop: "1"
            }
          },
          out: {
            action: "camera_control.cgi",
            param: "20"
            paramName: "param",
            value: {
              paramName: "value",
              start: "0",
              stop: "1"
            }
          }
        },
        stop : {
          action: "decoder_control.cgi",
          paramName: "command",
          up: "3",
          down: "1",
          left: "5",
          right: "7"
        },
        move : {
          action: "decoder_control.cgi",
          paramName: "command",
          preset1: "31",
          preset2: "33",
          up: "0",
          down: "2",
          left: "6",
          right: "4"
        }
    },
    actions: [
      {
      key: "moveLeft",
      action:{
        type: moveType,
        value: "left"
      }},
      {
      key: "moveRight",
      action:{
        type: moveType,
        value: "right"
      }},
      {
      key: "moveUp",
      action:{
        type: moveType,
        value: "up"
      }},
      {
      key: "moveDown",
      action:{
        type: moveType,
        value: "down"
      }},
      {
      key: "stopLeft",
      action:{
        type: stopType,
        value: "left"
      }},
      {
      key: "stopRight",
      action:{
        type: stopType,
        value: "right"
      }},
      {
      key: "stopUp",
      action:{
        type: stopType,
        value: "up"
      }},
      {
      key: "stopDown",
      action:{
        type: stopType,
        value: "down"
      }},
      {
      key: "zoomInStart",
      action:{
        type: zoomType+".in",
        value: "param",
        valueAction: {
          type: zoomType+".in.value",
          value: "start"
        }
      }},
      {
      key: "zoomInStop",
      action:{
        type: zoomType+".in",
        value: "param",
        valueAction: {
          type: zoomType+".in.value",
          value: "stop"
        }
      }},
      {
      key: "focusInStart",
      action:{
        type: focusType+".in",
        value: "param",
        valueAction: {
          type: focusType+".in.value",
          value: "start"
        }
      }},
      {
      key: "zoomOutStart",
      action:{
        type: zoomType+".out",
        value: "param",
        valueAction: {
          type: focusType+".out.value",
          value: "start"
        }
      }},
      {
      key: "zoomOutStop",
      action:{
        type: zoomType+".out",
        value: "param",
        valueAction: {
          type: focusType+".out.value",
          value: "stop"
        }
      }},
      ]
  }

  module.exports = sricam_ap004;
