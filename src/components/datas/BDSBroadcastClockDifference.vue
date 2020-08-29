<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        label="station">
      </el-table-column>
      <el-table-column
        min-width="150"
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="svid"
        label="SVID">
      </el-table-column>
      <el-table-column
        prop="b3I"
        label="B3I">
      </el-table-column>
      <el-table-column
        prop="b1I"
        label="B1I">
      </el-table-column>
      <el-table-column
        prop="b2A"
        label="B2A">
      </el-table-column>
    </el-table>
  </div>

  <!--  <div>-->
  <!--    <table>-->
  <!--      <thead>-->
  <!--      <tr>-->
  <!--        <th>station</th>-->
  <!--        <th>time</th>-->
  <!--        <th>SVID</th>-->
  <!--        <th>B3I</th>-->
  <!--        <th>B1I</th>-->
  <!--        <th>B2A</th>-->
  <!--      </tr>-->
  <!--      </thead>-->
  <!--      <tbody is="transition-group" name="flip-list">-->
  <!--      <tr v-for="item in datas" :key="item">-->
  <!--        <td>{{ item["station"] }}</td>-->
  <!--        <td>{{ item["time"] }}</td>-->
  <!--        <td>{{ item["svid"] }}</td>-->
  <!--        <td>{{ item["b3I"] }}</td>-->
  <!--        <td>{{ item["b1I"] }}</td>-->
  <!--        <td>{{ item["b2A"] }}</td>-->
  <!--      </tr>-->
  <!--      </tbody>-->
  <!--    </table>-->
  <!--  </div>-->

</template>

<script>
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../../config/mqtt";
import Stomp from "stompjs";
import storageUtils from "../../utils/storageUtils";
import {LIST_COUNT,MIN_WIDTH} from "../../../config/display";
export default {
  name: "BDSBroadcastClockDifference",
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
      insertdata.station = data["station"];
      insertdata.time = data["time"];
      insertdata.svid = data["svid"];
      insertdata.b3I = data["b3I"];
      insertdata.b1I = data["b1I"];
      insertdata.b2A = data["b2A"];
      this.datas.unshift(insertdata);
      storageUtils.saveData(this.$options.name, this.datas);
      this.resetSetItem(insertdata, this.$options.name);
    }
  }
}
</script>

<style scoped>

</style>
