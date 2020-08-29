<template>
  <div>
    <p style="text-align: center">导航卫星信号质量监测结果</p>
    <el-table
      :data="datas"
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="said"
        label="said">
      </el-table-column>
      <el-table-column
        prop="stid"
        label="stid">
      </el-table-column>
      <el-table-column
        prop="sifr"
        label="sifr">
      </el-table-column>
      <el-table-column
        prop="nuco"
        label="nuco">
      </el-table-column>
    </el-table>
  </div>
  <!--    <table>-->
  <!--      <thead>-->
  <!--      <tr>-->
  <!--        <th>Time</th>-->
  <!--        <th>SAID</th>-->
  <!--        <th>STID</th>-->
  <!--        <th>SIFR</th>-->
  <!--        <th>NUCO</th>-->
  <!--      </tr>-->
  <!--      </thead>-->
  <!--      <tbody is="transition-group" name="flip-list">-->
  <!--      <tr v-for="item in datas" :key="item">-->
  <!--        <td>{{ item["time"] }}</td>-->
  <!--        <td>{{ item["said"] }}</td>-->
  <!--        <td>{{ item["stid"] }}</td>-->
  <!--        <td>{{ item["sifr"] }}</td>-->
  <!--        <td>{{ item["nuco"] }}</td>-->
  <!--      </tr>-->
  <!--      </tbody>-->

  <!--    </table>-->

</template>

<script>
import storageUtils from "../../utils/storageUtils";
import {LIST_COUNT} from "../../../config/display";
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../../config/mqtt";
import Stomp from "stompjs";


export default {
  name: "NavSatSignalQuality",
  data() {
    return {
      client: Stomp.client(MQTT_SERVICE),
      datas: null
    }
  },
  created() {
    // this.$mqtt.launch(this.$options.name,this.queuePush);
    this.connect();
  },
  methods: {
    connect() {
      this.client.connect(HEADERS, this.onConnected, this.onFailed);
    },
    onConnected(frame) {
      let exchange = EXCHANGE_PUSH + this.$options.name;
      this.client.subscribe(exchange, this.responseCallback, this.onFailed);
      console.log("无订阅")
    },
    onFailed(frame) {
      console.log("Failed: " + frame);
    },
    responseCallback(frame) {
      console.log(frame)
      this.queuePush(JSON.parse(frame.body));
      //接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
      // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
    },
    queuePush(data) {
      if (this.datas === null) {
        this.datas = [];
      }
      if (this.datas.length > LIST_COUNT) {
        this.datas = this.datas.slice(0, LIST_COUNT);
      }
      let insertdata = {};
      insertdata.time = data["time"];
      insertdata.said = data["said"];
      insertdata.stid = data["stid"];
      insertdata.sifr = data["sifr"];
      insertdata.nuco = data["nuco"];
      this.datas.unshift(insertdata);
      this.resetSetItem(insertdata, this.$options.name);
      // loggerUtils.saveLog(insertdata, this.$options.name)
      storageUtils.saveData(this.$options.name, this.datas);
    }
  }
}
</script>

<style scoped>
</style>
