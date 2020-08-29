<template>

</template>

<script>
import {EXCHANGE_PUSH, HEADERS} from "../../config/mqtt";
import storageUtils from "../utils/storageUtils";

export default {
  name: "RabbitMQ",
  data() {
    return {
      client: null
    }
  },
  created() {
    this.buildConnect();
  }
  ,
  methods: {
    buildConnect() {
      this.client.connect(HEADERS, this.onConnected, this.onFailed);
    },
    onConnected(frame) {
      let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
        'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
        'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
        'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
        'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
        'WorkingStateInfoBDGNSSSystemClock']
      for (let i = 0; i < queueName.length; i++) {
        this.client.subscribe(EXCHANGE_PUSH + queueName[i], this.responseCallback, this.onFailed);
      }
    },
    onFailed(frame) {
      console.log("Failed: " + frame);
    },
    getSoftware(frameHeaders) {
      let des = frameHeaders['destination'];
      // /exchange/exchange_pushmsg/
      console.log('getsoftware' + des.substring(27));
      return des.substring(27);
    },
    responseCallback(frame) {
      console.log("进入回调函数："+frame);
      this.queuePush(this.getSoftware(frame.headers), JSON.parse(frame.body));
      //接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
      // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
    },
    queuePush(software, data) {
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
          storageUtils.saveData2("BDSBroadcastClockDifference", insertdata);
          this.$emit()
          break;
        case "NavSatSignalQuality":
          insertdata.time = data["time"];
          insertdata.said = data["said"];
          insertdata.stid = data["stid"];
          insertdata.sifr = data["sifr"];
          insertdata.nuco = data["nuco"];
          storageUtils.saveData2("NavSatSignalQuality", insertdata);
          break;
        default:
          break;
      }

    }
  }
}
</script>

<style scoped>

</style>
