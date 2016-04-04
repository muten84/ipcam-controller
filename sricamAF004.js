var sricam_af004 = {
      auth : {
        userParam: "loginuse",
        passParam: "loginpas"
      },
      ptz : {
        velocity : {
          action: "camera_control.cgi",
          param: "100",
          slow: "1",
          mid: "5",
          fast: "10"
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
    }
  }

  module.exports = sricam_af004;
