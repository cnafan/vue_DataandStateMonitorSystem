<template>
  <div>
    <p style="text-align: center">工作状态</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="start"
        label="start">
      </el-table-column>
      <el-table-column
        prop="counter"
        label="counter">
      </el-table-column>
      <el-table-column
        prop="hour"
        label="hour">
      </el-table-column>
      <el-table-column
        prop="minute"
        label="minute">
      </el-table-column>
      <el-table-column
        prop="second"
        label="second">
      </el-table-column>
      <el-table-column
        prop="millisecond"
        label="millisecond">
      </el-table-column>
      <el-table-column
        prop="kashiStart"
        label="kashiStart">
      </el-table-column>
      <el-table-column
        prop="kashiCounter"
        label="kashiCounter">
      </el-table-column>
      <el-table-column
        prop="kashiHour"
        label="kashiHour">
      </el-table-column>
      <el-table-column
        prop="kashiMinute"
        label="kashiMinute">
      </el-table-column>
      <el-table-column
        prop="kashiSecond"
        label="kashiSecond">
      </el-table-column>
      <el-table-column
        prop="kashiMillisecond"
        label="kashiMillisecond">
      </el-table-column>
      <el-table-column
        prop="kashiReverse"
        label="kashiReverse">
      </el-table-column>
      <el-table-column
        prop="kashiAzimuth"
        label="kashiAzimuth">
      </el-table-column>
      <el-table-column
        prop="kashiPitchAngle"
        label="kashiPitchAngle">
      </el-table-column>
      <el-table-column
        prop="kashiReverse1"
        label="kashiReverse1">
      </el-table-column>
      <el-table-column
        prop="kashiTemperature"
        label="kashiTemperature">
      </el-table-column>
      <el-table-column
        prop="kashiReverse2"
        label="kashiReverse2">
      </el-table-column>
      <el-table-column
        prop="kashiEnd"
        label="kashiEnd">
      </el-table-column>
      <el-table-column
        prop="sanyaStart"
        label="sanyaStart">
      </el-table-column>
      <el-table-column
        prop="sanyaCounter"
        label="sanyaCounter">
      </el-table-column>
      <el-table-column
        prop="sanyaHour"
        label="sanyaHour">
      </el-table-column>
      <el-table-column
        prop="sanyaMinute"
        label="sanyaMinute">
      </el-table-column>
      <el-table-column
        prop="sanyaSecond"
        label="sanyaSecond">
      </el-table-column>
      <el-table-column
        prop="sanyaiMillisecond"
        label="sanyaiMillisecond">
      </el-table-column>
      <el-table-column
        prop="sanyaReverse"
        label="sanyaReverse">
      </el-table-column>
      <el-table-column
        prop="sanyaAzimuth"
        label="sanyaAzimuth">
      </el-table-column>
      <el-table-column
        prop="sanyaPitchAngle"
        label="sanyaPitchAngle">
      </el-table-column>
      <el-table-column
        prop="sanyaReverse1"
        label="sanyaReverse1">
      </el-table-column>
      <el-table-column
        prop="sanyaTemperature"
        label="sanyaTemperature">
      </el-table-column>
      <el-table-column
        prop="sanyaReverse2"
        label="sanyaReverse2">
      </el-table-column>
      <el-table-column
        prop="sanyaEnd"
        label="sanyaEnd">
      </el-table-column>

      <el-table-column
        prop="jilinStart"
        label="jilinStart">
      </el-table-column>
      <el-table-column
        prop="jilinCounter"
        label="jilinCounter">
      </el-table-column>
      <el-table-column
        prop="jilinHour"
        label="jilinHour">
      </el-table-column>
      <el-table-column
        prop="jilinMinute"
        label="jilinMinute">
      </el-table-column>
      <el-table-column
        prop="jilinSecond"
        label="jilinSecond">
      </el-table-column>
      <el-table-column
        prop="jilinMillisecond"
        label="jilinMillisecond">
      </el-table-column>
      <el-table-column
        prop="jilinReverse"
        label="jilinReverse">
      </el-table-column>
      <el-table-column
        prop="jilinAzimuth"
        label="jilinAzimuth">
      </el-table-column>
      <el-table-column
        prop="jilinPitchAngle"
        label="jilinPitchAngle">
      </el-table-column>
      <el-table-column
        prop="jilinReverse1"
        label="jilinReverse1">
      </el-table-column>
      <el-table-column
        prop="jilinTemperature"
        label="jilinTemperature">
      </el-table-column>
      <el-table-column
        prop="jilinReverse2"
        label="jilinReverse2">
      </el-table-column>
      <el-table-column
        prop="jilinEnd"
        label="jilinEnd">
      </el-table-column>
      <el-table-column
        prop="end"
        label="end">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../../config/mqtt";
import Stomp from "stompjs";
import storageUtils from "../../utils/storageUtils";
import {LIST_COUNT} from "../../../config/display";

export default {
  name: "VLBIWorkState",
  components: {},
  data() {
    return {
      client: Stomp.client(MQTT_SERVICE),
      datas: storageUtils.readData(this.$options.name)
    };
  },
  created() {
    this.connect();
  },
  methods: {
    queuePush(data) {
      if (this.datas === null) {
        this.datas = [];
      }
      if (this.datas.length > LIST_COUNT) {
        this.datas = this.datas.slice(0, LIST_COUNT);
      }
      let insertdata = {};
      insertdata.start = data["start"];
      insertdata.counter = data["counter"];
      insertdata.hour = data["hour"];
      insertdata.minute = data["minute"];
      insertdata.second = data["second"];
      insertdata.millisecond = data["millisecond"];
      insertdata.kashiStart = data["kashiStart"];
      insertdata.kashiCounter = data["kashiCounter"];
      insertdata.kashiHour = data["kashiHour"];
      insertdata.kashiMinute = data["kashiMinute"];
      insertdata.kashiSecond = data["kashiSecond"];
      insertdata.kashiMillisecond = data["kashiMillisecond"];
      insertdata.kashiReverse = data["kashiReverse"];
      insertdata.kashiAzimuth = data["kashiAzimuth"];
      insertdata.kashiPitchAngle = data["kashiPitchAngle"];
      insertdata.kashiReverse1 = data["kashiReverse1"];
      insertdata.kashiTemperature = data["kashiTemperature"];
      insertdata.kashiReverse2 = data["kashiReverse2"];
      insertdata.kashiEnd = data["kashiEnd"];

      insertdata.sanyaStart = data["sanyaStart"];
      insertdata.sanyaCounter = data["sanyaCounter"];
      insertdata.sanyaHour = data["sanyaHour"];
      insertdata.sanyaMinute = data["sanyaMinute"];
      insertdata.sanyaSecond = data["sanyaSecond"];
      insertdata.sanyaiMillisecond = data["sanyaiMillisecond"];
      insertdata.sanyaReverse = data["sanyaReverse"];
      insertdata.sanyaAzimuth = data["sanyaAzimuth"];
      insertdata.sanyaPitchAngle = data["sanyaPitchAngle"];
      insertdata.sanyaReverse1 = data["sanyaReverse1"];
      insertdata.sanyaTemperature = data["sanyaTemperature"];
      insertdata.sanyaReverse2 = data["sanyaReverse2"];
      insertdata.sanyaEnd = data["sanyaEnd"];

      insertdata.jilinStart = data["jilinStart"];
      insertdata.jilinCounter = data["jilinCounter"];
      insertdata.jilinHour = data["jilinHour"];
      insertdata.jilinMinute = data["jilinMinute"];
      insertdata.jilinSecond = data["jilinSecond"];
      insertdata.jilinMillisecond = data["jilinMillisecond"];
      insertdata.jilinReverse = data["jilinReverse"];
      insertdata.jilinAzimuth = data["jilinAzimuth"];
      insertdata.jilinPitchAngle = data["jilinPitchAngle"];
      insertdata.jilinReverse1 = data["jilinReverse1"];
      insertdata.jilinTemperature = data["jilinTemperature"];
      insertdata.jilinReverse2 = data["jilinReverse2"];
      insertdata.jilinEnd = data["jilinEnd"];
      insertdata.end = data["end"];
      this.datas.unshift(insertdata);
      storageUtils.saveData(this.$options.name, this.datas);
      this.resetSetItem(insertdata, this.$options.name);
    },
    connect() {
      this.client.connect(HEADERS, this.onConnected, this.onFailed);
    },
    onConnected(frame) {
      let exchange = EXCHANGE_PUSH + this.$options.name;
      this.client.subscribe(exchange, this.responseCallback, this.onFailed);
    },
    onFailed(frame) {
      console.log("Failed: " + frame);
    },
    responseCallback(frame) {
      console.log("responseCallback" + frame)
      this.queuePush(JSON.parse(frame.body));
      //接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
      // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
    }
  }
}
</script>

<style scoped>

</style>


