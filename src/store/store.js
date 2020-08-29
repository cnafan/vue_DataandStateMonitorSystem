import Vue from 'vue'
import Vuex from 'vuex'
import Stomp from "stompjs";
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../config/mqtt";

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    client:null,
    datas:{}
  },
  //存放同步函数方法
  mutations: {

    initMQ() {
      this.client = Stomp.client(MQTT_SERVICE);
      this.client.connect(HEADERS, (frame) => {
        console.log(frame);
        let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
          'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
          'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
          'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
          'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
          'WorkingStateInfoBDGNSSSystemClock']
        for (let i = 0; i < queueName.length; i++) {
          console.log(this.client)
          this.client.subscribe(EXCHANGE_PUSH + queueName[i], (frame) => {
            console.log("进入反馈回调2：" + frame);
            this.queuePush(this.getSoftware(frame.headers), JSON.parse(frame.body));
            //接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
            // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
          }, (frame) => {
            console.log("Failed3: " + frame);
          });
        }
      }, (frame) => {
        console.log("Failed3: " + frame);
      });
    },

    getSoftware(frameHeaders) {
      let des = frameHeaders['destination'];
      // /exchange/exchange_pushmsg/
      console.log('getsoftware3' + des.substring(27));
      return des.substring(27);
    },

    queuePush(software, data) {
      console.log("software3:" + software)
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
      if (typeof this.datas[software]=== "undefined"){
        status.datas[software]=[];
      }
      status.datas[software].unshift(insertdata);
    }

  }
})
