<template>
  <div>
    <p style="text-align: center">时频工作状态</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="timeFrequencySystem"
        label="timeFrequencySystem">
      </el-table-column>
      <el-table-column
        prop="produceSystem"
        label="produceSystem">
      </el-table-column>
      <el-table-column
        prop="timeServiceSystem"
        label="timeServiceSystem">
      </el-table-column>
      <el-table-column
        prop="performanceEvaluationSystem"
        label="performanceEvaluationSystem">
      </el-table-column>
      <el-table-column
        prop="deviationDetectionSystem"
        label="deviationDetectionSystem">
      </el-table-column>
      <el-table-column
        prop="timeDeliverySystem"
        label="timeDeliverySystem">
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
  name: "TimeFrequencyWorkingState",
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
      insertdata.timeFrequencySystem = data["timeFrequencySystem"];
      insertdata.produceSystem = data["produceSystem"];
      insertdata.timeServiceSystem = data["timeServiceSystem"];
      insertdata.performanceEvaluationSystem = data["performanceEvaluationSystem"];
      insertdata.deviationDetectionSystem = data["deviationDetectionSystem"];
      insertdata.timeDeliverySystem = data["timeDeliverySystem"];
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


