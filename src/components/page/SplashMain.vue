<template>
  <div id="splash" ref="splash" :key=screenWidth>
    <Header id="splash-header"></Header>
    <SystemPanel id="splash-system-panel"></SystemPanel>
    <div id="splash-software-info">
        <DailyInfoPanel  id="system-info"
                         :daily-received-times="dailyReceivedTimes"
                        :daily-warning-times="dailyWarningTimes"
                        :all-system-info="AllSystemInfo"></DailyInfoPanel>
        <ScrollBoard  id="runtime-info"></ScrollBoard>
        <SplitSystemBoard id="detail-info"
            :prop-system-manage-and-control-system-info-data="propSystemManageAndControlSystemInfoData"
            :prop-sat-integrated-data-system-info-data="propSatIntegratedDataSystemInfoData"
            :prop-atomic-clock-system-info-data="propAtomicClockSystemInfoData"
            :prop-b-d-g-n-s-s-system-info-data="propBDGNSSSystemInfoData"
            :prop-state-monitor-system-info-data="propStateMonitorSystemInfoData"
            :prop-v-l-b-i-system-info-data="propVLBISystemInfoData"></SplitSystemBoard>
    </div>
    <div id="splash-handware-info" ref="splash-handware-info">
        <SystemInfoPanel  style="flex: 4" :prop-cpu-data="cpuPropData" :prop-memory-data="MemoryUsage"></SystemInfoPanel>
        <DataBasePanel style="flex: 2" :prop-data="propMysqlServerInfo"></DataBasePanel>
        <FtpPanel style="flex: 1" :prop-data="FtpPropData"></FtpPanel>
    </div>
  </div>
</template>

<script>
import ScrollBoard from '../charts/ScrollBoard'
import SplitSystemBoard from '../charts/SplitSystemBoard'
import Header from '../charts/SplashHeader'
import SystemPanel from '../charts/SplitSystemIconBar'
import DataBasePanel from '../charts/DataBasePanel'
import FtpPanel from '../charts/FtpPanel'
import SystemInfoPanel from '../charts/ServerInfoPanel'
import {SPLANSH_CPU_QUERY_PRIOID, SPLANSH_QUERY_PRIOID} from '@/config/display'
import DailyInfoPanel from '../charts/DailyInfoPanel'
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
  },
  name: 'SplashMain',
  data() {
    return {
      screenWidth: document.body.clientWidth,
      FtpPropData: 0,
      cpuPropData: [],
      MemoryUsage: [0,1],
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
      fullscreen: false,
      splashQueryPrioid: SPLANSH_QUERY_PRIOID,
      splashCpuQueryPrioid: SPLANSH_CPU_QUERY_PRIOID,
      queryTimer: null,
      cpuQueryTimer: null
    }
  },
  watch: {
    mainElementHeight: function () {
      // console.log('mainElementHeight 发生改变')
      // this.$refs['splash-handware-info'].key = new Date().getUTCMilliseconds()
    },
  },
  mounted() {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //   })()
    // }
    // 轮询定时器
    this.queryTimer = setInterval(this.updateCharts, 5000)
    this.cpuQueryTimer = setInterval(this.updateCpu, 2000)
    this.mysqlQueryTimer = setInterval(this.updateMysql, 10000)

  },
  beforeDestroy() {
    clearInterval(this.queryTimer)
    clearInterval(this.cpuQueryTimer)
    clearInterval(this.mysqlQueryTimer)
  },
  created() {
    this.updateCharts()
    this.updateCpu()
    this.updateMysql()
    // window.setInterval(() => {
    //   setTimeout(this.updateCharts, 0)
    // }, this.splashQueryPrioid)
    //
    // window.setInterval(() => {
    //   setTimeout(this.updateCpu, 0)
    // }, this.splashCpuQueryPrioid)
  },
  methods: {
    toggle() {
      this.$refs['fullscreen'].toggle() // recommended
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen
    },
    updateCpu() {
      this.$post('getMemoryUsage', null, '', false).then(response => {
        this.MemoryUsage = response.data
      })
      this.$post('getCPUUsage', null, '', false).then(response => {
        let CPUUsage = response.data
        this.cpuPropData = this.changeArray(CPUUsage)
      })
    },
    updateMysql() {
      this.$post('dailyReceivedTimes', null, '', false).then(response => {
        this.dailyReceivedTimes = response.data
      })
      this.$post('dailyWarningTimes', null, '', false).then(response => {
        this.dailyWarningTimes = response.data
      })
    },
    updateCharts() {
      this.$post('getFileSystem', null, '', false).then(response => {
        let fileSystem
        if (response.data.length !== 0) {
          fileSystem = response.data[0]['usableSpace'] * 100 / response.data[0]['totalSpace']
        } else {
          fileSystem = 0
        }
        this.FtpPropData = fileSystem
      })
      this.$get('getMysqlServerInfo').then(response => {
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
      this.$post('getAllSystemInfo', null, '', false).then(response => {
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
<style lang="scss" scoped>

#splash {
  height: 100%;
  //overflow: hidden;
  padding: 20px 20px 0 20px;
  /*width: 100%;*/
  //height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-image: url("../../../static/images/pageBgTiny.png");
  background-size: contain;
  background-repeat: repeat;
  background-attachment: scroll;
}

#splash-header {
  //flex: 1;
  height: auto;
}

#splash-system-panel {
  /*flex: 1;*/
  height: auto;
}

#splash-software-info {
  display: flex;
  height: 40%;
  flex: 3;
  /*align-items: stretch;*/
}

#system-info {
  flex: 1;
  width: fit-content;
}

#detail-info {
  flex: 1;
  width: fit-content;
}

#runtime-info {
  flex: 1;
  width: fit-content;
}

#splash-handware-info {
  display: flex;
  height: 30%;
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

#splash-card-title span {
  color: white;
}

</style>
