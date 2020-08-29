<template>
  <div>
    <p style="text-align: center">地面站工作状态信息</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">

      <el-table-column
        prop="week"
        label="week">
      </el-table-column>
      <el-table-column
        prop="sec"
        label="sec">
      </el-table-column>
      <el-table-column
        prop="groundID1"
        label="groundID1">
      </el-table-column>
      <el-table-column
        prop="baseBandState1"
        label="baseBandState1">
      </el-table-column>
      <el-table-column
        prop="baseBandNo1"
        label="baseBandNo1">
      </el-table-column>
      <el-table-column
        prop="baseBandWorkState1"
        label="baseBandWorkState1">
      </el-table-column>
      <el-table-column
        prop="C1UPState1"
        label="C1UPState1">
      </el-table-column>
      <el-table-column
        prop="C1DOWNState1"
        label="C1DOWNState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterID1"
        label="FreConverterID1">
      </el-table-column>
      <el-table-column
        prop="FreConverterWorkState1"
        label="FreConverterWorkState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterBlockState1"
        label="FreConverterBlockState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterOutput1"
        label="FreConverterOutput1">
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
  name: "GroundStationWorkStateInfo",
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
      insertdata.week = data["week"];
      insertdata.sec = data["sec"];
      insertdata.groundID1 = data["groundID1"];
      insertdata.baseBandState1 = data["baseBandState1"];
      insertdata.baseBandID1 = data["baseBandID1"];
      insertdata.baseBandNo1 = data["baseBandNo1"];
      insertdata.baseBandWorkState1 = data["baseBandWorkState1"];
      insertdata.C1UPState1 = data["C1UPState1"];
      insertdata.C1DOWNState1 = data["C1DOWNState1"];
      insertdata.FreConverterID1 = data["FreConverterID1"];
      insertdata.FreConverterWorkState1 = data["FreConverterWorkState1"];
      insertdata.FreConverterBlockState1 = data["FreConverterBlockState1"];
      insertdata.FreConverterOutput1 = data["FreConverterOutput1"];

      insertdata.groundID1 = data["groundID"];
      insertdata.baseBandState1 = data["baseBandState2"];
      insertdata.baseBandID1 = data["baseBandID2"];
      insertdata.baseBandNo1 = data["baseBandNo2"];
      insertdata.baseBandWorkState1 = data["baseBandWorkState2"];
      insertdata.C1UPState1 = data["C1UPState2"];
      insertdata.C1DOWNState1 = data["C1DOWNState2"];
      insertdata.FreConverterID1 = data["FreConverterID2"];
      insertdata.FreConverterWorkState1 = data["FreConverterWorkState2"];
      insertdata.FreConverterBlockState1 = data["FreConverterBlockState2"];
      insertdata.FreConverterOutput1 = data["FreConverterOutput2"];

      insertdata.groundID1 = data["groundID3"];
      insertdata.baseBandState1 = data["baseBandState3"];
      insertdata.baseBandID1 = data["baseBandID3"];
      insertdata.baseBandNo1 = data["baseBandNo3"];
      insertdata.baseBandWorkState1 = data["baseBandWorkState3"];
      insertdata.C1UPState1 = data["C1UPState3"];
      insertdata.C1DOWNState1 = data["C1DOWNState3"];
      insertdata.FreConverterID1 = data["FreConverterID3"];
      insertdata.FreConverterWorkState1 = data["FreConverterWorkState3"];
      insertdata.FreConverterBlockState1 = data["FreConverterBlockState3"];
      insertdata.FreConverterOutput1 = data["FreConverterOutput3"];
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


