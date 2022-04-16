<template>
  <div id="splash" ref="splash" :key="splashKey">
    <Header style="height: fit-content"></Header>
    <SystemPanel style="height: fit-content"></SystemPanel>
    <div id="splash-main-content">
      <!--      <div id="splash-software-info">-->
      <DailyInfoPanel id="system-info"
                      :daily-received-times="dailyReceivedTimes"
                      :daily-warning-times="dailyWarningTimes"
                      :all-system-info="AllSystemInfo"></DailyInfoPanel>
      <ScrollBoard style="height:100%;width:30%;flex: 20%" id="runtime-info"></ScrollBoard>
      <SplitSystemBoard id="detail-info"
                        :prop-system-manage-and-control-system-info-data="propSystemManageAndControlSystemInfoData"
                        :prop-sat-integrated-data-system-info-data="propSatIntegratedDataSystemInfoData"
                        :prop-atomic-clock-system-info-data="propAtomicClockSystemInfoData"
                        :prop-b-d-g-n-s-s-system-info-data="propBDGNSSSystemInfoData"
                        :prop-state-monitor-system-info-data="propStateMonitorSystemInfoData"
                        :prop-v-l-b-i-system-info-data="propVLBISystemInfoData"></SplitSystemBoard>
      <!--      </div>-->
      <!--      <div id="splash-hardware-info" ref="splash-hardware-info">-->
      <SystemInfoPanel id="server-info" :prop-cpu-data="cpuPropData"></SystemInfoPanel>
      <MemoryPanel id="memory-info" :prop-memory-data="MemoryUsage"></MemoryPanel>
      <DataBasePanel id="database-info" :prop-data="propMysqlServerInfo"></DataBasePanel>
      <FtpPanel id="ftp-info" :prop-data="FtpPropData"></FtpPanel>
    </div>
    <!--    </div>-->
  </div>
</template>

<script>
import ScrollBoard from '../charts/mid/ScrollBoard'
import SplitSystemBoard from '../charts/mid/SplitSystemPanel'
import Header from '../charts/top/SplashHeader'
import SystemPanel from '../charts/top/SplitSystemIconBar'
import DataBasePanel from '../charts/bottom/DataBasePanel'
import FtpPanel from '../charts/bottom/FtpPanel'
import SystemInfoPanel from '../charts/bottom/ServerInfoPanel'
import {SPLANSH_CPU_QUERY_PRIOID, SPLANSH_QUERY_PRIOID} from '@/config/display'
import DailyInfoPanel from '../charts/mid/DailyInfoPanel'
import MemoryPanel from "@/components/charts/bottom/MemoryPanel";
// import ECharts from 'vue-echarts'
export default {
  components: {
    MemoryPanel,
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
      splashKey: document.body.clientWidth,
      FtpPropData: 20,
      cpuPropData: [],
      MemoryUsage: [0.5, 1],
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
  mounted() {
    // 轮询定时器
    this.queryTimer = setInterval(this.updateCharts, 5000)
    this.cpuQueryTimer = setInterval(this.updateCpu, 2000)
    this.mysqlQueryTimer = setInterval(this.updateMysql, 10000)

    console.log('mount')
    this.$refs.splash.key = this.splashKey + 1;
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
  },
  methods: {
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
      if (indexI === 0 || indexI === undefined) {
        return newarray
      }
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
  //min-height: 100%;
  //height: 100%;
  overflow: hidden;
  padding: 20px 20px 20px 20px;
  width: 100%;
  //height: calc(100vh - 60px);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  background-image: url("../../../static/images/pageBgTiny.png");
  background-size: cover;

  #splash-main-content {
    overflow: scroll;
    height: 30%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    #system-info {
      width: 8%;
      height: 30%;
      min-width: 420px;
      max-width: 30%;
      //max-height: 400px;
      min-height: 400px;
      flex: 13%;
    }

    #runtime-info {
      flex: 43%;
      max-height: 400px;
      overflow: hidden;
    }

    #detail-info {
      display: flex;
      flex-direction: column;
      min-width: 620px;
      width: 40%;
      flex: 25%;
      //max-height: 60%;
      /*width: 400px;*/
    }

    #server-info {
      flex: 50%;;
      max-height: 40%;
      min-height: 200px;
      //min-width: 600px
    }

    #memory-info {
      min-height: 200px;
      min-width: 200px;
      max-height: 40%;
      max-width: 10%;
      flex: 10%;
    }

    #database-info {
      min-width: 400px;
      max-width: 20%;
      max-height: 40%;
      flex: 20%;
    }

    #ftp-info {
      min-height: 200px;
      min-width: 200px;
      max-height: 40%;
      max-width: 10%;
      flex: 10%;
    }
  }

  #splash-main-content::-webkit-scrollbar {
    display: none;
  }

  #splash-software-info {
    height: 30%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 3;
    align-items: baseline;

    /*align-items: stretch;*/

  }

  #splash-hardware-info {
    display: flex;
    height: 30%;
    flex-wrap: wrap;
    /*align-items: stretch;*/
  }


}
</style>
