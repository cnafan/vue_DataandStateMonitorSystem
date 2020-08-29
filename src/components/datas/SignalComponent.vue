<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        min-width="150"
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="sico"
        label="SICO">
      </el-table-column>
      <el-table-column
        prop="chpm"
        label="CHPm">
      </el-table-column>
      <el-table-column
        prop="chps"
        label="CHPs">
      </el-table-column>
      <el-table-column
        prop="spsm"
        label="SPSm">
      </el-table-column>
      <el-table-column
        prop="spss"
        label="SPSs">
      </el-table-column>
      <el-table-column
        prop="colm"
        label="COLm">
      </el-table-column>
      <el-table-column
        prop="scbm"
        label="SCBm">
      </el-table-column>
      <el-table-column
        prop="bswm"
        label="BSWm">
      </el-table-column>
      <el-table-column
        prop="bsws"
        label="BSWs">
      </el-table-column>
      <el-table-column
        prop="ccam"
        label="CCAm">
      </el-table-column>
      <el-table-column
        prop="ccsm"
        label="CCSm">
      </el-table-column>
      <el-table-column
        prop="ccss"
        label="CCSs">
      </el-table-column>
      <el-table-column
        prop="prsm"
        label="PRSm">
      </el-table-column>
      <el-table-column
        prop="prss"
        label="PRSs">
      </el-table-column>
      <el-table-column
        prop="cpsm"
        label="CPSm">
      </el-table-column>
      <el-table-column
        prop="cpss"
        label="CPSs">
      </el-table-column>
      <el-table-column
        prop="dpsm"
        label="DPSm">
      </el-table-column>
      <el-table-column
        prop="dpss"
        label="DPSs">
      </el-table-column>
      <el-table-column
        prop="cnsm"
        label="CNSm">
      </el-table-column>
      <el-table-column
        prop="cnss"
        label="CNSs">
      </el-table-column>
      <el-table-column
        prop="ccdm"
        label="CCDm">
      </el-table-column>
      <el-table-column
        prop="ccds"
        label="CCDs">
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
  name: "SignalComponent",
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
      insertdata.time = data["time"];
      insertdata.sico = data["sico"];
      insertdata.chpm = data["chpm"];
      insertdata.chps = data["chps"];
      insertdata.spsm = data["spsm"];
      insertdata.spss = data["spss"];
      insertdata.colm = data["colm"];
      insertdata.scbm = data["scbm"];
      insertdata.bswm = data["bswm"];
      insertdata.bsws = data["bsws"];
      insertdata.ccam = data["ccam"];
      insertdata.ccsm = data["ccsm"];
      insertdata.ccss = data["ccss"];
      insertdata.prsm = data["prsm"];
      insertdata.prss = data["prss"];
      insertdata.cpsm = data["cpsm"];
      insertdata.cpss = data["cpss"];
      insertdata.dpsm = data["dpsm"];
      insertdata.dpss = data["dpss"];
      insertdata.cnsm = data["cnsm"];
      insertdata.cnss = data["cnss"];
      insertdata.ccdm = data["ccdm"];
      insertdata.ccds = data["ccds"];
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


