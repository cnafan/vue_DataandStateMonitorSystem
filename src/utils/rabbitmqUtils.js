import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../config/mqtt";
import Stomp from "stompjs";

var client = Stomp.client(MQTT_SERVICE);
export var getdatas = {};

export function buildConnect() {
  client.connect(HEADERS, (frame) => {
    console.log(frame)
    let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
      'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
      'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
      'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
      'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
      'WorkingStateInfoBDGNSSSystemClock']
    for (let i = 0; i < queueName.length; i++) {
      console.log(client)
      client.subscribe(EXCHANGE_PUSH + queueName[i], (frame) => {
        console.log("进入反馈回调：" + frame);
        queuePush(getSoftware(frame.headers), JSON.parse(frame.body));
        //接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
        // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
      }, (frame) => {
        console.log("Failed: " + frame);
      });
      console.log(client)
    }
  }, (frame) => {
    console.log("Failed: " + frame);

  });
}


function getSoftware(frameHeaders) {
  let des = frameHeaders['destination'];
  // /exchange/exchange_pushmsg/
  console.log('getsoftware' + des.substring(27));
  return des.substring(27);
}


function queuePush(software, data) {
  let insertdata = {};
  /*
  let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
    'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
    'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
    'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
    'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
    'WorkingStateInfoBDGNSSSystemClock']*/
  switch (software) {
    case "BDSBroadcastClockDifference":
      insertdata.station = data["station"];
      insertdata.time = data["time"];
      insertdata.svid = data["svid"];
      insertdata.b3I = data["b3I"];
      insertdata.b1I = data["b1I"];
      insertdata.b2A = data["b2A"];
      // this.$emit()
      break;
    case "NavSatSignalQuality":
      insertdata.time = data["time"];
      insertdata.said = data["said"];
      insertdata.stid = data["stid"];
      insertdata.sifr = data["sifr"];
      insertdata.nuco = data["nuco"];
      break;
    default:
      break;
  }
  if (typeof datas[software] !== "undefined") {
    getdatas[software] = [];
  }
  getdatas[software].unshift(insertdata);
}

export default {
  buildConnect
}
