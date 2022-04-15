<template>
  <div id="DailyInfoPanelContent">
    <ChartHeader :title="'今日实时数据'" :icon="'el-icon-s-flag'"></ChartHeader>
    <div style="
    height: 100%;
    display: flex;
    flex-direction: column;">
      <div class="dailyInfoBoard">
        <div>
          <span style="color: whitesmoke;font-size: 20px">今日接收数据</span>
          <dv-digital-flop :config="configDailyReceivedTimes" style="width:200px;height:50px;"/>
        </div>
        <div>
          <span style="color: whitesmoke;font-size: 20px">今日告警数据</span>
          <dv-digital-flop :config="configDailyWarningTimes" style="width:200px;height:50px;"/>
        </div>
      </div>
      <!--        <dv-charts style="height: 100%;width: 100%;" :option="configAllSystemInfo"/>-->
      <nightingale-chart class="nightingale-chart" :usage-data="splitSystemSummaryInfo"></nightingale-chart>
    </div>
  </div>
</template>

<script>
import ChartHeader from '../top/PanelHeader'
import NightingaleChart from "@/components/charts/mid/NightingaleChart";

export default {
  name: 'DailyInfoPanel',
  components: {NightingaleChart, ChartHeader},
  props: {
    dailyReceivedTimes: {
      type: Number
    },
    dailyWarningTimes: {
      type: Number
    },
    allSystemInfo: {
      type: Object
    }
  },
  watch: {
    dailyReceivedTimes: function () {
      this.configDailyReceivedTimes.number[0] = this.dailyReceivedTimes
      this.configDailyReceivedTimes = {...this.configDailyReceivedTimes}
    },
    dailyWarningTimes: function () {
      this.configDailyWarningTimes.number[0] = this.dailyWarningTimes
      this.configDailyWarningTimes = {...this.configDailyWarningTimes}
    },
    allSystemInfo: function () {
      if (this.allSystemInfo === {}) {
        return
      }
      this.splitSystemSummaryInfo = []
      this.splitSystemSummaryInfo.push({
        name: '系统管理控制软件',
        value: this.allSystemInfo['SystemManageSoftware']
      })
      this.splitSystemSummaryInfo.push({
        name: '卫星综合管理软件',
        value: this.allSystemInfo['SatIntegratedSoftware']
      })
      this.splitSystemSummaryInfo.push({
        name: '状态监测及告警软件',
        value: this.allSystemInfo['StateMonitorSoftware']
      })
      this.splitSystemSummaryInfo.push({name: 'VLBI站控软件', value: this.allSystemInfo['VLBISoftware']})
      this.splitSystemSummaryInfo.push({
        name: '原子钟信号监测软件',
        value: this.allSystemInfo['AtomicClockSoftware']
      })
      // 避免分母为0
      if (this.allSystemInfo['SystemManageSoftware'] === 0 && this.allSystemInfo['SatIntegratedSoftware'] === 0 && this.allSystemInfo['StateMonitorSoftware'] === 0 &&
          this.allSystemInfo['VLBISoftware'] === 0 && this.allSystemInfo['AtomicClockSoftware'] === 0 && this.allSystemInfo['BDGNSSSoftware'] === 0) {
        this.splitSystemSummaryInfo.push({name: 'GNSS时差数据处理软件', value: 1})
      } else {
        this.splitSystemSummaryInfo.push({
          name: 'GNSS时差数据处理软件',
          value: this.allSystemInfo['BDGNSSSoftware']
        })
      }
      // this.splitSystemSummaryInfo = {...this.splitSystemSummaryInfo}
    }
  },
  data() {
    return {
      configDailyReceivedTimes: {
        number: [0],
        content: '{nt}',
        style: {
          fontSize: 30,
          fill: '#3de7c9'
        }
      },
      configDailyWarningTimes: {
        number: [0],
        content: '{nt}',
        style: {
          fontSize: 30,
          fill: '#3de7c9'
        }
      },
      splitSystemSummaryInfo: [
        {name: '系统管理控制软件', value: 93},
        {name: '卫星综合管理软件', value: 32},
        {name: '状态监测及告警软件', value: 65},
        {name: 'VLBI站控软件', value: 44},
        {name: '原子钟信号监测软件', value: 52},
        {name: 'GNSS时差数据处理软件', value: 22}
      ],
      configAllSystemInfo: {
        title: {
          text: '分系统数据占比饼状图',
          style: {
            fill: '#fff',
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'bottom'
          }
        },
        series: [
          {
            type: 'pie',
            data: [
              {name: '系统管理控制软件', value: 93},
              {name: '卫星综合管理软件', value: 32},
              {name: '状态监测及告警软件', value: 65},
              {name: 'VLBI站控软件', value: 44},
              {name: '原子钟信号监测软件', value: 52},
              {name: 'GNSS时差数据处理软件', value: 22}
            ],
            insideLabel: {
              show: true
            },
            roseType: true
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#DailyInfoPanelContent {
  .border-box-content {
    height: 100%;
  }
}

.nightingale-chart {
  height: 10%;
  width: 100%;
  flex: 3;
}

.dailyInfoBoard {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 20px 20px;
}

</style>
