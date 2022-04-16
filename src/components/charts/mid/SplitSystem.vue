<template>
    <PieChart
              :title1=title1
              :title2=title2
              :title3=title3
              :title4=title4
              :title5=title5
              :title6=title6
              :usage-data1="data1"
              :usage-data2="data2"
              :usage-data3="data3"
              :usage-data4="data4"
              :usage-data5="data5"
              :usage-data6="data6"></PieChart>
</template>

<script>
import PieChart from "@/components/charts/mid/PieChart";

export default {
  name: "SplitSystem",
  components: {PieChart},
  data() {
    return {
      title1: '系统管理控制',
      title2: '卫星综合管理',
      title3: '状态监测及告警',
      title4: 'VLBI站控',
      title5: '原子钟信号监测',
      title6: 'GNSS时差数据处理',
      data1: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}],
      data2: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}],
      data3: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}],
      data4: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}],
      data5: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}],
      data6: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}]
    }
  },
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
  watch: {
    propSystemManageAndControlSystemInfoData: function () {
      if (this.propSystemManageAndControlSystemInfoData === null) {
        return
      }
      this.data1 = [
        {name: '工作状态信息', value: this.propSystemManageAndControlSystemInfoData['workingStateInfoRows']},
        {name: '定向天线信号质量监测结果', value: this.propSystemManageAndControlSystemInfoData['navSatSignalRows']},
        {name: '全向天线信号质量监测结果', value: this.propSystemManageAndControlSystemInfoData['navSatSignalAllDirectionRows']}
      ]
    },
    propSatIntegratedDataSystemInfoData: function () {
      if (this.propSatIntegratedDataSystemInfoData === null) {
        return
      }
      this.data2 = [
        {name: '定向BDS3空间信号质量监测', value: this.propSatIntegratedDataSystemInfoData['spaceSatSignalRows']},
        {
          name: '全向BDS3空间信号质量监测',
          value: this.propSatIntegratedDataSystemInfoData['spaceSatSignalAllDirectionRows']
        },
        {name: 'UTC与BDS3卫星时间钟差', value: this.propSatIntegratedDataSystemInfoData['bdsClockDifference']},
        {name: 'BDS3卫星星钟改正数', value: this.propSatIntegratedDataSystemInfoData['bdsClockCorrection']},
        {name: 'UTC与BDS3卫星广播北斗钟差', value: this.propSatIntegratedDataSystemInfoData['bdsBroadcastClockDifference']},
        {name: 'UTC与BDT钟差', value: this.propSatIntegratedDataSystemInfoData['bdtClockDifference']}
      ]
    }
    ,
    propStateMonitorSystemInfoData: function () {
      if (this.propStateMonitorSystemInfoData === null) {
        return
      }
      this.data3 = [
        {name: '地面站工作状态信息', value: this.propStateMonitorSystemInfoData['groundStationWorkStateInfo']},
      ]
    }
    ,
    propVLBISystemInfoData: function () {
      if (this.propVLBISystemInfoData === null) {
        return
      }
      this.data4 = [
        {name: '工作状态', value: this.propVLBISystemInfoData['vlbiWorkState']},
      ]
    }
    ,
    propAtomicClockSystemInfoData: function () {
      if (this.propAtomicClockSystemInfoData === null) {
        return
      }

      this.data5 = [
        {name: '溯源时差数据', value: this.propAtomicClockSystemInfoData['ntscTimeDifferenceData']},
        {name: '溯源时差模型参数', value: this.propAtomicClockSystemInfoData['ntscTimeDifferenceModelPara']},
        {name: '时频工作状态', value: this.propAtomicClockSystemInfoData['timeFrequencyWorkingState']}
      ]
    }
    ,
    propBDGNSSSystemInfoData: function () {
      if (this.propBDGNSSSystemInfoData === null) {
        return
      }
      this.data6 = [
        {name: 'GPST', value: this.propBDGNSSSystemInfoData['GPST']},
        {
          name: 'GLONASST',
          value: this.propSystemManageAndControlSystemInfoData['GLONASST']
        },
        {name: 'GST', value: this.propBDGNSSSystemInfoData['GST']},
        {name: 'BDT', value: this.propBDGNSSSystemInfoData['BDT']},
        {name: 'QZSST', value: this.propBDGNSSSystemInfoData['QZSST']},
        {name: 'IRNSST', value: this.propBDGNSSSystemInfoData['IRNSST']},
        {name: 'SBAST', value: this.propBDGNSSSystemInfoData['SBAST']},
        {name: '工作状态', value: this.propBDGNSSSystemInfoData['workingStateInfoBDGNSSSystemClock']}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>


</style>
