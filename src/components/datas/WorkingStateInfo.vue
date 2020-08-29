<template>
  <div>
    <p style="text-align: center">工作状态信息</p>
    <el-table
      :data="datas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="MS01taskType"
        label="MS01taskType">
      </el-table-column>
      <el-table-column
        prop="MS01startTime"
        label="MS01startTime">
      </el-table-column>
      <el-table-column
        prop="MS01SatName"
        label="MS01SatName">
      </el-table-column>
      <el-table-column
        prop="MS01endTime"
        label="MS01endTime">
      </el-table-column>
      <el-table-column
        prop="MS01Result"
        label="MS01Result">
      </el-table-column>

      <el-table-column
        prop="MS02taskType"
        label="MS02taskType">
      </el-table-column>
      <el-table-column
        prop="MS02startTime"
        label="MS02startTime">
      </el-table-column>
      <el-table-column
        prop="MS02SatName"
        label="MS02SatName">
      </el-table-column>
      <el-table-column
        prop="MS02endTime"
        label="MS02endTime">
      </el-table-column>
      <el-table-column
        prop="MS02Result"
        label="MS02Result">
      </el-table-column>

      <el-table-column
        prop="MS03taskType"
        label="MS03taskType">
      </el-table-column>
      <el-table-column
        prop="MS03startTime"
        label="MS03startTime">
      </el-table-column>
      <el-table-column
        prop="MS03SatName"
        label="MS03SatName">
      </el-table-column>
      <el-table-column
        prop="MS03endTime"
        label="MS03endTime">
      </el-table-column>
      <el-table-column
        prop="MS03Result"
        label="MS03Result">
      </el-table-column>

      <el-table-column
        prop="MS04taskType"
        label="MS04taskType">
      </el-table-column>
      <el-table-column
        prop="MS04startTime"
        label="MS04startTime">
      </el-table-column>
      <el-table-column
        prop="MS04SatName"
        label="MS04SatName">
      </el-table-column>
      <el-table-column
        prop="MS04endTime"
        label="MS04endTime">
      </el-table-column>
      <el-table-column
        prop="MS04Result"
        label="MS04Result">
      </el-table-column>

      <el-table-column
        prop="MS05taskType"
        label="MS05taskType">
      </el-table-column>
      <el-table-column
        prop="MS05startTime"
        label="MS05startTime">
      </el-table-column>
      <el-table-column
        prop="MS05SatName"
        label="MS05SatName">
      </el-table-column>
      <el-table-column
        prop="MS05endTime"
        label="MS05endTime">
      </el-table-column>
      <el-table-column
        prop="MS05Result"
        label="MS05Result">
      </el-table-column>

      <el-table-column
        prop="MS06taskType"
        label="MS06taskType">
      </el-table-column>
      <el-table-column
        prop="MS06startTime"
        label="MS06startTime">
      </el-table-column>
      <el-table-column
        prop="MS06SatName"
        label="MS06SatName">
      </el-table-column>
      <el-table-column
        prop="MS06endTime"
        label="MS06endTime">
      </el-table-column>
      <el-table-column
        prop="MS06Result"
        label="MS06Result">
      </el-table-column>

      <el-table-column
        prop="MS07taskType"
        label="MS07taskType">
      </el-table-column>
      <el-table-column
        prop="MS07startTime"
        label="MS07startTime">
      </el-table-column>
      <el-table-column
        prop="MS07SatName"
        label="MS07SatName">
      </el-table-column>
      <el-table-column
        prop="MS07endTime"
        label="MS07endTime">
      </el-table-column>
      <el-table-column
        prop="MS07Result"
        label="MS07Result">
      </el-table-column>

      <el-table-column
        prop="MS08taskType"
        label="MS08taskType">
      </el-table-column>
      <el-table-column
        prop="MS08startTime"
        label="MS08startTime">
      </el-table-column>
      <el-table-column
        prop="MS08SatName"
        label="MS08SatName">
      </el-table-column>
      <el-table-column
        prop="MS08endTime"
        label="MS08endTime">
      </el-table-column>
      <el-table-column
        prop="MS08Result"
        label="MS08Result">
      </el-table-column>

      <el-table-column
        prop="MS09taskType"
        label="MS09taskType">
      </el-table-column>
      <el-table-column
        prop="MS09startTime"
        label="MS09startTime">
      </el-table-column>
      <el-table-column
        prop="MS09SatName"
        label="MS09SatName">
      </el-table-column>
      <el-table-column
        prop="MS09endTime"
        label="MS09endTime">
      </el-table-column>
      <el-table-column
        prop="MS09Result"
        label="MS09Result">
      </el-table-column>

      <el-table-column
        prop="MS10taskType"
        label="MS10taskType">
      </el-table-column>
      <el-table-column
        prop="MS10startTime"
        label="MS10startTime">
      </el-table-column>
      <el-table-column
        prop="MS10SatName"
        label="MS10SatName">
      </el-table-column>
      <el-table-column
        prop="MS10endTime"
        label="MS10endTime">
      </el-table-column>
      <el-table-column
        prop="MS10Result"
        label="MS10Result">
      </el-table-column>

      <el-table-column
        prop="MS11taskType"
        label="MS11taskType">
      </el-table-column>
      <el-table-column
        prop="MS11startTime"
        label="MS11startTime">
      </el-table-column>
      <el-table-column
        prop="MS11SatName"
        label="MS11SatName">
      </el-table-column>
      <el-table-column
        prop="MS11endTime"
        label="MS11endTime">
      </el-table-column>
      <el-table-column
        prop="MS11Result"
        label="MS11Result">
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
  name: "WorkingStateInfo",
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
      insertdata.MS01taskType = data["MS01taskType"];
      insertdata.MS01startTime = data["MS01startTime"];
      insertdata.MS01SatName = data["MS01SatName"];
      insertdata.MS01endTime = data["MS01endTime"];
      insertdata.MS01Result = data["MS01Result"];

      insertdata.MS02taskType = data["MS02taskType"];
      insertdata.MS02startTime = data["MS02startTime"];
      insertdata.MS02SatName = data["MS02SatName"];
      insertdata.MS02endTime = data["MS02endTime"];
      insertdata.MS02Result = data["MS02Result"];

      insertdata.MS03taskType = data["MS03taskType"];
      insertdata.MS03startTime = data["MS03startTime"];
      insertdata.MS03SatName = data["MS03SatName"];
      insertdata.MS03endTime = data["MS03endTime"];
      insertdata.MS03Result = data["MS03Result"];

      insertdata.MS04taskType = data["MS04taskType"];
      insertdata.MS04startTime = data["MS04startTime"];
      insertdata.MS04SatName = data["MS04SatName"];
      insertdata.MS04endTime = data["MS04endTime"];
      insertdata.MS04Result = data["MS04Result"];

      insertdata.MS05taskType = data["MS05taskType"];
      insertdata.MS05startTime = data["MS05startTime"];
      insertdata.MS05SatName = data["MS05SatName"];
      insertdata.MS05endTime = data["MS05endTime"];
      insertdata.MS05Result = data["MS05Result"];

      insertdata.MS06taskType = data["MS06taskType"];
      insertdata.MS06startTime = data["MS06startTime"];
      insertdata.MS06SatName = data["MS06SatName"];
      insertdata.MS06endTime = data["MS06endTime"];
      insertdata.MS06Result = data["MS06Result"];

      insertdata.MS07taskType = data["MS07taskType"];
      insertdata.MS07startTime = data["MS07startTime"];
      insertdata.MS07SatName = data["MS07SatName"];
      insertdata.MS07endTime = data["MS07endTime"];
      insertdata.MS07Result = data["MS07Result"];

      insertdata.MS08taskType = data["MS08taskType"];
      insertdata.MS08startTime = data["MS08startTime"];
      insertdata.MS08SatName = data["MS08SatName"];
      insertdata.MS08endTime = data["MS08endTime"];
      insertdata.MS08Result = data["MS08Result"];

      insertdata.MS09taskType = data["MS09taskType"];
      insertdata.MS09startTime = data["MS09startTime"];
      insertdata.MS09SatName = data["MS09SatName"];
      insertdata.MS09endTime = data["MS09endTime"];
      insertdata.MS09Result = data["MS09Result"];

      insertdata.MS10taskType = data["MS10taskType"];
      insertdata.MS10startTime = data["MS10startTime"];
      insertdata.MS10SatName = data["MS10SatName"];
      insertdata.MS10endTime = data["MS10endTime"];
      insertdata.MS10Result = data["MS10Result"];

      insertdata.MS11taskType = data["MS11taskType"];
      insertdata.MS11startTime = data["MS11startTime"];
      insertdata.MS11SatName = data["MS11SatName"];
      insertdata.MS11endTime = data["MS11endTime"];
      insertdata.MS11Result = data["MS11Result"];

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


