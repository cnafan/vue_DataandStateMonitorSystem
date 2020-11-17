<template>
  <div id="splansh">
    <Header></Header>
    <SystemPanel></SystemPanel>
    <div class="all-info">
      <div id="system-info">
        <DailyInfoPanel :daily-received-times="dailyReceivedTimes"
                        :daily-warning-times="dailyWarningTimes"
        :all-system-info="AllSystemInfo"></DailyInfoPanel>
      </div>
      <div id="runtime-info">
        <ScrollBoard></ScrollBoard>
      </div>
      <div id="detail-info">
        <SplitSystemBoard
          :prop-system-manage-and-control-system-info-data="propSystemManageAndControlSystemInfoData"
          :prop-sat-integrated-data-system-info-data="propSatIntegratedDataSystemInfoData"
          :prop-atomic-clock-system-info-data="propAtomicClockSystemInfoData"
          :prop-b-d-g-n-s-s-system-info-data="propBDGNSSSystemInfoData"
          :prop-state-monitor-system-info-data="propStateMonitorSystemInfoData"
          :prop-v-l-b-i-system-info-data="propVLBISystemInfoData"></SplitSystemBoard>
      </div>
    </div>
    <div class="other-info">
      <div style="height:100%;display: flex;flex-direction: row;align-items: stretch">
        <div style="flex: 4">
            <SystemInfoPanel :prop-cpu-data="cpuPropData" :prop-memory-data="MemoryUsage"></SystemInfoPanel>
        </div>
        <div style="flex: 2">
            <DataBasePanel :prop-data="propMysqlServerInfo"></DataBasePanel>
        </div>
        <div style="flex: 1">
            <FtpPanel :prop-data="FtpPropData"></FtpPanel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollBoard from '../charts/ScrollBoard'
import SplitSystemBoard from '../charts/SplitSystemBoard'
import Header from '../charts/Header'
import SystemInfo from '../charts/SystemInfo'
import SystemPanel from '../charts/SystemPanel'
import DataBasePanel from '../charts/DataBasePanel'
import FtpPanel from '../charts/FtpPanel'
import SystemInfoPanel from '../charts/SystemInfoPanel'
import {SPLANSH_QUERY_PRIOID, SPLANSH_CPU_QUERY_PRIOID} from '../../../config/display'
import ScrollPanel from '../charts/ScrollPanel'
import DailyInfoPanel from '../charts/DailyInfoPanel'
// import ECharts from 'vue-echarts'
export default {
  components: {
    DailyInfoPanel,
    ScrollPanel,
    SystemInfoPanel,
    FtpPanel,
    DataBasePanel,
    SystemPanel,
    SystemInfo,
    Header,
    SplitSystemBoard,
    ScrollBoard
    // chart: ECharts
  },
  name: 'Splansh',
  data () {
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
  created () {
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
    toggle () {
      this.$refs['fullscreen'].toggle() // recommended
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    },
    updateCpu () {
      this.$post('getCPUUsage', null, '', false).then(response => {
        let CPUUsage = response.data
        this.cpuPropData = this.changeArray(CPUUsage)
      })
    },
    updateCharts () {
      this.$post('getFileSystem', null, '', false).then(response => {
        let fileSystem = response.data[0]['usableSpace'] * 100 / response.data[0]['totalSpace']
        // console.log('getFileSystem', fileSystem)
        this.FtpPropData = fileSystem
      })
      this.$post('getMemoryUsage', null, '', false).then(response => {
        this.MemoryUsage = response.data
      })
      this.$post('getMysqlServerInfo', null, '', false).then(response => {
        this.propMysqlServerInfo = response.data
      })
      this.$post('getSystemManageAndControlSystemInfo', null, '', false).then(response => {
        this.propSystemManageAndControlSystemInfoData = response.data
      })
      this.$post('getSatIntegratedDataSystemInfo', null, '', false).then(response => {
        this.propSatIntegratedDataSystemInfoData = response.data
      })
      this.$post('getStateMonitorSystemInfo', null, '', false).then(response => {
        this.propStateMonitorSystemInfoData = response.data
      })
      this.$post('getVLBISystemInfo', null, '', false).then(response => {
        this.propVLBISystemInfoData = response.data
      })
      this.$post('getAtomicClockSystemInfo', null, '', false).then(response => {
        this.propAtomicClockSystemInfoData = response.data
      })
      this.$post('getBDGNSSSystemInfo', null, '', false).then(response => {
        this.propBDGNSSSystemInfoData = response.data
      })
      this.$post('dailyReceivedTimes', null, '', false).then(response => {
        this.dailyReceivedTimes = response.data
      })
      this.$post('dailyWarningTimes', null, '', false).then(response => {
        this.dailyWarningTimes = response.data
      })
      this.$post('getAllSystemInfo', null, '', false).then(response => {
        this.AllSystemInfo = response.data
      })
    },
    changeArray (array) {
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
<style scoped>
#splansh {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../../../static/images/pageBg.png");
  background-size: cover;
  background-repeat: repeat;
}

#system-info {
  flex: 1;
}

#runtime-info {
  flex: 2;
  /*width: 200px;*/
}

#detail-info {
  flex: 2;
  overflow-y: hidden;
  /*width: 400px;*/
  /*margin-left: 20px;*/
}

#up-parent {
  /*height: 550px;*/
  height: 50%;
}

#splansh-card-title span {
  color: white;
}

.all-info {
  display: flex;
  flex: 2;
  align-items: stretch;
}

.other-info {
  flex: 1;
}

</style>
