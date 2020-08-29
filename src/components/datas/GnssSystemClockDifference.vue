<template>
  <div>
    <p style="text-align: center">GNSS系统时差数据</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">


      <el-table-column
        prop="MeasTimeUTCGPST"
        label="measTimeUTCGPST">
      </el-table-column>
      <el-table-column
        prop="MeasValueUTCGPST"
        label="measValueUTCGPST">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCGLONASST"
        label="measTimeUTCGLONASST">
      </el-table-column>
      <el-table-column
        prop="measValueUTCGLONASST"
        label="measValueUTCGLONASST">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCGST"
        label="measTimeUTCGST">
      </el-table-column>
      <el-table-column
        prop="measValueUTCGST"
        label="measValueUTCGST">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCBDT"
        label="measTimeUTCBDT">
      </el-table-column>
      <el-table-column
        prop="measValueUTCBDT"
        label="measValueUTCBDT">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCQZSST"
        label="measTimeUTCQZSST">
      </el-table-column>
      <el-table-column
        prop="measValueUTCQZSST"
        label="measValueUTCQZSST">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCIRNSST"
        label="measTimeUTCIRNSST">
      </el-table-column>
      <el-table-column
        prop="measValueUTCIRNSST"
        label="measValueUTCIRNSST">
      </el-table-column>
      <el-table-column
        prop="measTimeUTCSBAST"
        label="measTimeUTCSBAST">
      </el-table-column>
      <el-table-column
        prop="measValueUTCSBAST"
        label="measValueUTCSBAST">
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
  name: "GnssSystemClockDifference",
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
      insertdata.MeasTimeUTCGPST = data["measTimeUTCGPST"];
      insertdata.MeasValueUTCGPST = data["measValueUTCGPST"];
      insertdata.MeasTimeUTCGLONASST = data["measTimeUTCGLONASST"];
      insertdata.MeasValueUTCGLONASST = data["measValueUTCGLONASST"];
      insertdata.MeasTimeUTCGST = data["measTimeUTCGST"];
      insertdata.MeasValueUTCGST = data["measValueUTCGST"];
      insertdata.MeasTimeUTCBDT = data["measTimeUTCBDT"];
      insertdata.MeasValueUTCBDT = data["measValueUTCBDT"];
      insertdata.MeasTimeUTCQZSST = data["measTimeUTCQZSST"];
      insertdata.MeasValueUTCQZSST = data["measValueUTCQZSST"];
      insertdata.MeasTimeUTCIRNSST = data["measTimeUTCIRNSST"];
      insertdata.MeasValueUTCIRNSST = data["measValueUTCIRNSST"];
      insertdata.MeasTimeUTCSBAST = data["measTimeUTCSBAST"];
      insertdata.MeasValueUTCSBAST = data["measValueUTCSBAST"];
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



