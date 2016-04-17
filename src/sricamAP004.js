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
        stop : {
          action: "decoder_control.cgi",
          up: {
            paramName: "command",
            value: "3"
          },
          down: {
            paramName: "command",
            value: "1"
          },
          left: {
            paramName: "command",
            value: "5"
          },
          right: {
            paramName: "command",
            value: "7"
          }
        },
        move : {
          action: "decoder_control.cgi",
          up: {
            paramName: "command",
            value: "0"
          },
          down: {
            paramName: "command",
            value: "2"
          },
          left: {
            paramName: "command",
            value: "6"
          },
          right: {
            paramName: "command",
            value: "4"
          }
        },
        zoom: {
          in: {
            action: "camera_control.cgi",
            value: "17",
            paramName: "param",
            start : {
              paramName: "value",
              value: "0"
            },
            stop : {
              paramName: "value",
              value: "0"
            }
          }
        },
    },
    actions: [
      {
      key: "zoomInStart",
      action:{
        type: zoomType+".in",
        value: "start"
      }},
      {
      key: "zoomInStop",
      action:{
        type: zoomType+".in",
        value: "stop"
      }},
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
      }}
    ]
  }

  module.exports = sricam_ap004;
