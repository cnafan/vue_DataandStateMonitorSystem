<template>
  <!--  <dv-border-box-5>-->
  <!--  :key="new Date().getUTCMilliseconds()"-->
  <div id="SplitSystemPanel" :key="SplitSystemPanelKey" ref="SplitSystemPanel">
    <!--    <div>-->
    <ChartHeader :title="'各分系统软件数据占比'" :icon="'el-icon-s-flag'"></ChartHeader>
    <Test :prop-system-manage-and-control-system-info-data="propSystemManageAndControlSystemInfoData"
          :propSatIntegratedDataSystemInfoData="propSatIntegratedDataSystemInfoData"
          :propStateMonitorSystemInfoData="propStateMonitorSystemInfoData"
          :propVLBISystemInfoData="propVLBISystemInfoData"
          :propBDGNSSSystemInfoData="propBDGNSSSystemInfoData"
          :propAtomicClockSystemInfoData="propAtomicClockSystemInfoData"
    ></Test>
    <!--    <div class="split-system-board">-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option1" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> 系统管理控制</div>-->
    <!--      </div>-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option2" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> 卫星综合管理</div>-->
    <!--      </div>-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option3" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> 状态监测及告警</div>-->
    <!--      </div>-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option4" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> VLBI站控</div>-->
    <!--      </div>-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option5" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> 原子钟信号监测</div>-->
    <!--      </div>-->
    <!--      <div class="each-system-graph">-->
    <!--        <dv-active-ring-chart :config="option6" class="ring-chart"/>-->
    <!--        <div class="each-system-info"> GNSS时差数据处理</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {EACH_SYSTEM_INFO_PIE_FONT_SIZE} from '@/config/display'
import ChartHeader from '../top/PanelHeader'
import Test from "@/components/charts/mid/SplitSystem";

export default {
  name: 'SplitSystemBoard',
  components: {Test, ChartHeader},
  props: {
    propSystemManageAndControlSystemInfoData: {
      type: Object
    },
    propSatIntegratedDataSystemInfoData: {
      type: Object
    },
    propStateMonitorSystemInfoData: {
      type: Object
    },
    propVLBISystemInfoData: {
      type: Object
    },
    propAtomicClockSystemInfoData: {
      type: Object
    },
    propBDGNSSSystemInfoData: {
      type: Object
    }
  },
  // watch: {
  //   propSystemManageAndControlSystemInfoData: function () {
  //     if (this.propSystemManageAndControlSystemInfoData === null) {
  //       return
  //     }
  //     this.option1.data[0].value = this.propSystemManageAndControlSystemInfoData['workingStateInfoRows']
  //     this.option1.data[1].value = this.propSystemManageAndControlSystemInfoData['navSatSignalRows']
  //     this.option1.data[2].value = this.propSystemManageAndControlSystemInfoData['navSatSignalAllDirectionRows']
  //     // 避免分母为0
  //     if (this.propSystemManageAndControlSystemInfoData['workingStateInfoRows'] === 0 &&
  //         this.propSystemManageAndControlSystemInfoData['navSatSignalRows'] === 0 &&
  //         this.propSystemManageAndControlSystemInfoData['navSatSignalAllDirectionRows'] === 0) {
  //       this.option1.data[0].value = 1
  //     }
  //     this.option1 = {...this.option1}
  //   },
  //   propSatIntegratedDataSystemInfoData: function () {
  //     if (this.propSatIntegratedDataSystemInfoData === null) {
  //       return
  //     }
  //     // this.option2.data[0].value = this.propSatIntegratedDataSystemInfoData['broadcastEphemerisWarningInfoRows']
  //     this.option2.data[0].value = this.propSatIntegratedDataSystemInfoData['spaceSatSignalRows']
  //     this.option2.data[1].value = this.propSatIntegratedDataSystemInfoData['spaceSatSignalAllDirectionRows']
  //     this.option2.data[2].value = this.propSatIntegratedDataSystemInfoData['bdsClockDifference']
  //     this.option2.data[3].value = this.propSatIntegratedDataSystemInfoData['bdsClockCorrection']
  //     this.option2.data[4].value = this.propSatIntegratedDataSystemInfoData['bdsBroadcastClockDifference']
  //     this.option2.data[5].value = this.propSatIntegratedDataSystemInfoData['bdtClockDifference']
  //     // 避免分母为0
  //     if (this.propSatIntegratedDataSystemInfoData['spaceSatSignalRows'] === 0 &&
  //         this.propSatIntegratedDataSystemInfoData['spaceSatSignalAllDirectionRows'] === 0 &&
  //         this.propSatIntegratedDataSystemInfoData['bdsClockDifference'] === 0 &&
  //         this.propSatIntegratedDataSystemInfoData['bdsClockCorrection'] === 0 &&
  //         this.propSatIntegratedDataSystemInfoData['bdsBroadcastClockDifference'] === 0 &&
  //         this.propSatIntegratedDataSystemInfoData['bdtClockDifference'] === 0) {
  //       this.option2.data[0].value = 1
  //     }
  //     this.option2 = {...this.option2}
  //   },
  //   propStateMonitorSystemInfoData: function () {
  //     if (this.propStateMonitorSystemInfoData === null) {
  //       return
  //     }
  //     this.option3.data[0].value = this.propStateMonitorSystemInfoData['groundStationWorkStateInfo']
  //     // 避免分母为0
  //     if (this.propStateMonitorSystemInfoData['groundStationWorkStateInfo'] === 0) {
  //       this.option3.data[0].value = 1
  //     }
  //
  //     this.option3 = {...this.option3}
  //   },
  //   propVLBISystemInfoData: function () {
  //     if (this.propVLBISystemInfoData === null) {
  //       return
  //     }
  //     this.option4.data[0].value = this.propVLBISystemInfoData['vlbiWorkState']
  //     // 避免分母为0
  //     if (this.propVLBISystemInfoData['vlbiWorkState'] === 0) {
  //       this.option4.data[0].value = 1
  //     }
  //     this.option4 = {...this.option4}
  //   },
  //   propAtomicClockSystemInfoData: function () {
  //     if (this.propAtomicClockSystemInfoData === null) {
  //       return
  //     }
  //     this.option5.data[0].value = this.propAtomicClockSystemInfoData['ntscTimeDifferenceData']
  //     this.option5.data[1].value = this.propAtomicClockSystemInfoData['ntscTimeDifferenceModelPara']
  //     this.option5.data[2].value = this.propAtomicClockSystemInfoData['timeFrequencyWorkingState']
  //     // 避免分母为0
  //     if (this.propAtomicClockSystemInfoData['ntscTimeDifferenceData'] === 0 &&
  //         this.propAtomicClockSystemInfoData['ntscTimeDifferenceModelPara'] === 0 &&
  //         this.propAtomicClockSystemInfoData['timeFrequencyWorkingState'] === 0) {
  //       this.option5.data[0].value = 1
  //     }
  //     this.option5 = {...this.option5}
  //   },
  //   propBDGNSSSystemInfoData: function () {
  //     if (this.propBDGNSSSystemInfoData === null) {
  //       return
  //     }
  //     this.option6.data[0].value = this.propBDGNSSSystemInfoData['GPST']
  //     this.option6.data[1].value = this.propBDGNSSSystemInfoData['GLONASST']
  //     this.option6.data[2].value = this.propBDGNSSSystemInfoData['GST']
  //     this.option6.data[3].value = this.propBDGNSSSystemInfoData['BDT']
  //     this.option6.data[4].value = this.propBDGNSSSystemInfoData['QZSST']
  //     this.option6.data[5].value = this.propBDGNSSSystemInfoData['IRNSST']
  //     this.option6.data[6].value = this.propBDGNSSSystemInfoData['SBAST']
  //     this.option6.data[7].value = this.propBDGNSSSystemInfoData['workingStateInfoBDGNSSSystemClock']
  //     // 避免分母为0
  //     if (this.propBDGNSSSystemInfoData['GPST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['GLONASST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['GST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['BDT'] === 0 &&
  //         this.propBDGNSSSystemInfoData['QZSST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['IRNSST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['SBAST'] === 0 &&
  //         this.propBDGNSSSystemInfoData['workingStateInfoBDGNSSSystemClock'] === 0) {
  //       this.option6.data[0].value = 1
  //     }
  //     this.option6 = {...this.option6}
  //   }
  // },
  data() {
    return {
      SplitSystemPanelKey: document.body.clientWidth,
      option1: {
        // radius: '80%',
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: '工作状态信息',
            value: 33
          },
          {
            name: '定向天线信号质量监测结果',
            value: 22
          },
          {
            name: '全向天线信号质量监测结果',
            value: 55
          }
          // ,
          // {
          //   name: '导航卫星异常监测结果',
          //   value: 78
          // }
        ]
      },
      option2: {
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: '定向BDS3空间信号质量监测',
            value: 55
          },
          {
            name: '全向BDS3空间信号质量监测',
            value: 55
          },
          {
            name: 'UTC与BDS3卫星时间钟差',
            value: 120
          },
          {
            name: 'BDS3卫星星钟改正数',
            value: 78
          },
          {
            name: 'UTC与BDS3卫星广播北斗钟差',
            value: 66
          },
          {
            name: 'UTC与BDT钟差',
            value: 80
          }
        ]
      },
      option3: {
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: '地面站工作状态信息',
            value: 1
          }
        ]
      },
      option4: {
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: '工作状态',
            value: 1
          }
        ]
      },
      option5: {
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: '溯源时差数据',
            value: 55
          },
          {
            name: '溯源时差模型参数',
            value: 120
          },
          {
            name: '时频工作状态',
            value: 78
          }
        ]
      },
      option6: {
        digitalFlopStyle: {
          fontSize: EACH_SYSTEM_INFO_PIE_FONT_SIZE,
          fill: '#fff'
        },
        activeTimeGap: 3000,
        data: [
          {
            name: 'GPST',
            value: 55
          },
          {
            name: 'GLONASST',
            value: 55
          },
          {
            name: 'GST',
            value: 55
          },
          {
            name: 'BDT',
            value: 55
          },
          {
            name: 'QZSST',
            value: 55
          },
          {
            name: 'IRNSST',
            value: 55
          },
          {
            name: 'SBAST',
            value: 55
          },
          {
            name: '工作状态',
            value: 120
          }
        ]
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.SplitSystemPanelKey = this.SplitSystemPanelKey + 1;
      }, 500);
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
    });
  },
}
</script>

<style lang="scss" scoped>

#SplitSystemPanel {
  .border-box-content {
    height: 100%
  }
}

.split-system-board {
  //height: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  .each-system-graph {
    flex: 33%;

    .each-system-info {
      justify-content: center;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 0.8rem;
      /*style=""*/
    }

    .ring-chart {
      justify-content: center;
      /*min-width: 150px;*/
      /*min-height: 150px;*/
      //width: 10vw;
      height: 15vh;
    }
  }
}

</style>
