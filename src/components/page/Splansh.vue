<template>
  <div id="splansh" ref="splansh">
    <Header id="splansh-header"></Header>
    <SystemPanel id="splansh-system-panel"></SystemPanel>
    <div id="splansh-software-info">
      <!--      <el-row>-->
      <div id="system-info">
        <!--        <el-col :span="2">-->
        <DailyInfoPanel :daily-received-times="dailyReceivedTimes"
                        :daily-warning-times="dailyWarningTimes"
                        :all-system-info="AllSystemInfo"></DailyInfoPanel>
        <!--        </el-col>-->
        <!--        <el-col :span="2">-->
      </div>
      <div id="runtime-info">
        <ScrollBoard></ScrollBoard>
        <!--        </el-col>-->
      </div>
      <div id="detail-info">
        <!--        <el-col :span="2">-->
        <SplitSystemBoard
            :prop-system-manage-and-control-system-info-data="propSystemManageAndControlSystemInfoData"
            :prop-sat-integrated-data-system-info-data="propSatIntegratedDataSystemInfoData"
            :prop-atomic-clock-system-info-data="propAtomicClockSystemInfoData"
            :prop-b-d-g-n-s-s-system-info-data="propBDGNSSSystemInfoData"
            :prop-state-monitor-system-info-data="propStateMonitorSystemInfoData"
            :prop-v-l-b-i-system-info-data="propVLBISystemInfoData"></SplitSystemBoard>
      </div>
      <!--        </el-col>-->
      <!--      </el-row>-->
    </div>
    <div id="splansh-handware-info">
      <div style="flex: 4">
        <SystemInfoPanel :prop-cpu-data="cpuPropData" :prop-memory-data="MemoryUsage"></SystemInfoPanel>
      </div>
      <dv-decoration-4 style="width:5px;height:80%;"/>
      <div style="flex: 2">
        <DataBasePanel :prop-data="propMysqlServerInfo"></DataBasePanel>
      </div>
      <dv-decoration-4 style="width:5px;height:80%;"/>
      <div style="flex: 1">
        <FtpPanel :prop-data="FtpPropData"></FtpPanel>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollBoard from '../charts/ScrollBoard'
import SplitSystemBoard from '../charts/SplitSystemBoard'
import Header from '../charts/Header'
import SystemPanel from '../charts/SystemIconPanel'
import DataBasePanel from '../charts/DataBasePanel'
import FtpPanel from '../charts/FtpPanel'
import SystemInfoPanel from '../charts/SystemInfoPanel'
import {SPLANSH_CPU_QUERY_PRIOID, SPLANSH_QUERY_PRIOID} from '../../../config/display'
import DailyInfoPanel from '../charts/DailyInfoPanel'
import {
  DAILY_RECEIVED_TIMES,
  DAILY_WARNING_TIMES, GET_ALL_SYSTEM_INFO, GET_ATOMIC_CLOCK_SYSTEM_INFO, GET_BDGNSS_SYSTEM_INFO, GET_CPU_USAGE,
  GET_FILE_SYSTEM,
  GET_MEMORY_USAGE,
  GET_MYSQL_SERVER_INFO,
  GET_SAT_INTEGRATED_DATA_SYSTEM_INFO,
  GET_STATE_MONITOR_SYSTEM_INFO,
  GET_SYSTEM_MANAGE_AND_CONTROL_SYSTEM_INFO, GET_VLBI_SYSTEM_INFO
} from "@/api/api";
// import ECharts from 'vue-echarts'
export default {
  components: {
    DailyInfoPanel,
    SystemInfoPanel,
    FtpPanel,
    DataBasePanel,
    SystemPanel,
    Header,
    SplitSystemBoard,
    ScrollBoard
    // chart: ECharts
  },
  name: 'Splansh',
  data() {
    return {
      FtpPropData: 0,
      cpuPropData: [],
      MemoryUsage: [],
      propSystemManageAndControlSystemInfoData: null,
      propSatIntegratedDataSystemInfoData: null,
      propStateMonitorSystemInfoData: null,
      propVLBISystemInfoData: null,
      propAtomicClockSystemInfoData: null,
      propBDGNSSSystemInfoData: null,
      propMysqlServerInfo: {
        'schemaUsage': 0,
        'currentMemory': 0,
        'totalConnections': 0
      },
      dailyReceivedTimes: 0,
      dailyWarningTimes: 0,
      AllSystemInfo: {},
      fullscreen: false
    }
  },
  created() {
    // this.updateCharts()
    // this.updateCpu()
    window.setInterval(() => {
      setTimeout(this.updateCharts, 0)
    }, SPLANSH_QUERY_PRIOID)
    window.setInterval(() => {
      setTimeout(this.updateCpu, 0)
    }, SPLANSH_CPU_QUERY_PRIOID)
  },
  methods: {
    toggle() {
      this.$refs['fullscreen'].toggle() // recommended
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen
    },
    updateCpu() {
      this.$post(GET_CPU_USAGE, null, 'CPU数据', false).then(response => {
        let CPUUsage = response.data
        this.cpuPropData = this.changeArray(CPUUsage)
      })
    },
    updateCharts() {
      this.$post(DAILY_RECEIVED_TIMES, null, '每日数据', false).then(response => {
        this.dailyReceivedTimes = response.data
      })
      this.$post(DAILY_WARNING_TIMES, null, '每日数据', false).then(response => {
        this.dailyWarningTimes = response.data
      })
      this.$post(GET_FILE_SYSTEM, null, '服务器信息', false).then(response => {
        let fileSystem = response.data[0]['usableSpace'] * 100 / response.data[0]['totalSpace']
        this.FtpPropData = fileSystem
      })
      this.$post(GET_MEMORY_USAGE, null, '服务器内存使用信息', false).then(response => {
        this.MemoryUsage = response.data
      })
      this.$post(GET_MYSQL_SERVER_INFO, null, '服务器数据库信息', false).then(response => {
        this.propMysqlServerInfo = response.data
      })
      this.$post(GET_SYSTEM_MANAGE_AND_CONTROL_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propSystemManageAndControlSystemInfoData = response.data
      })
      this.$post(GET_SAT_INTEGRATED_DATA_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propSatIntegratedDataSystemInfoData = response.data
      })
      this.$post(GET_STATE_MONITOR_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propStateMonitorSystemInfoData = response.data
      })
      this.$post(GET_VLBI_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propVLBISystemInfoData = response.data
      })
      this.$post(GET_ATOMIC_CLOCK_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propAtomicClockSystemInfoData = response.data
      })
      this.$post(GET_BDGNSS_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.propBDGNSSSystemInfoData = response.data
      })
      this.$post(GET_ALL_SYSTEM_INFO, null, '分系统信息', false).then(response => {
        this.AllSystemInfo = response.data
      })
    },
    changeArray(array) {
      let newarray = []
      let indexI = array.length
      let indexJ = array[0].length
      for (let i = 0; i < indexJ; i++) {
        let array1 = []
        for (let j = 0; j < indexI; j++) {
          array1.push(array[j][i])
        }
        newarray.push(array1)
      }
      return newarray
    }
  }
}
</script>
<style>
#splansh {
  padding: 20px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../../../static/images/pageBgTiny.png");
  background-size: auto;
  background-repeat: repeat;
}

#splansh-header {
  /*flex: 1;*/
}

#splansh-system-panel {
  /*flex: 1;*/
}

#splansh-software-info {
  padding-bottom: 10px;
  display: flex;
  flex: 3;
  /*align-items: stretch;*/
}

#splansh-handware-info {
  display: flex;
  flex: 2;
  /*align-items: stretch;*/

}

#runtime-info {
  flex: 3;
}

#detail-info {
  /*flex: 3;*/
  overflow-y: hidden;
  /*width: 400px;*/
  /*margin-left: 20px;*/
}

#splansh-card-title span {
  color: white;
}

</style>
