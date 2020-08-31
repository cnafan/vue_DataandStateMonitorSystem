<template>
  <el-row id="app">
    <el-row>
      <el-col :span="23">
        <el-menu
          class="el-menu-demo" mode="horizontal"
          :default-active="activeIndex"
          text-color="#303133"
          active-text-color="#E6A23C"
          @select="handleSelect">
          <el-menu-item index="splash">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">空间信号质量监测</template>
            <el-menu-item index="SystemManageAndControl">系统管理控制软件</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">北斗/GNSS系统时间监测</template>
            <el-menu-item index="bdgnsssystemclock">GNSS（Galileo）时差数据综合处理软件</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">中科院在轨卫星地面数据</template>
            <el-menu-item index="satintegrated">卫星综合管理软件</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">高精度转发式卫星授时</template>
            <el-menu-item index="AtomicClockSignal">原子钟信号监测与自主切换软件</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">VLBI观测导航卫星及UT1测量</template>
            <el-menu-item index="VLBI">VLBI站控软件</el-menu-item>
          </el-submenu>
          <el-menu-item index="log">日志</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="1">
        <el-button class="header-button" icon="el-icon-s-tools" circle @click="settingOpen"></el-button>
      </el-col>
    </el-row>
    <el-row id="content">
      <keep-alive>
        <Splansh v-show="SplanshVisible"></Splansh>
      </keep-alive>
      <keep-alive>
        <SystemManageAndControl :nav-sat-signal-quality="NavSatSignalQuality"
                                :signal-component="SignalComponent"
                                v-show="SystemManageAndControlVisible"></SystemManageAndControl>
      </keep-alive>
      <keep-alive>
        <BDGNSSSystemClockMonitor :gnss-system-clock-difference="GnssSystemClockDifference"
                                  :working-state-info-b-d-g-n-s-s-system-clock="WorkingStateInfoBDGNSSSystemClock"
                                  v-show="BDGNSSSystemClockMonitorVisible"></BDGNSSSystemClockMonitor>
      </keep-alive>
      <keep-alive>
        <SatIntegratedDataManagement :b-d-s-broadcast-clock-difference="BDSBroadcastClockDifference"
                                     :b-d-s-clock-correction="BDSClockCorrection"
                                     :nav-sat-signal-quality="NavSatSignalQuality"
                                     :b-d-t-clock-difference="BDTClockDifference"
                                     :signal-component="SignalComponent"
                                     :b-d-s-sat-time-clock-difference="BDSSatTimeClockDifference"
                                     :broadcast-ephemeris-warning-info="BroadcastEphemerisWarningInfo"
                                     v-show="SatIntegratedDataManagementVisible"></SatIntegratedDataManagement>
      </keep-alive>
      <keep-alive>
        <AtomicClockSignal :n-t-s-c-time-difference-data="NTSCTimeDifferenceData"
                           :n-t-s-c-time-difference-model-para="NTSCTimeDifferenceModelPara"
                           :time-frequency-working-state="TimeFrequencyWorkingState"
                           v-show="AtomicClockSignalVisible"></AtomicClockSignal>
      </keep-alive>
      <keep-alive>
        <VLBI :v-l-b-i-work-state="VLBIWorkState" v-show="VLBIVisible"></VLBI>
      </keep-alive>
      <keep-alive>
        <Logger :datas="datas" v-show="LoggerVisible"></Logger>
      </keep-alive>

    </el-row>
    <el-backtop class="el-icon-top">
      <div></div>
    </el-backtop>
  </el-row>
</template>

<script>
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from '../config/mqtt'
import Stomp from 'stompjs'
import VLBI from './components/softwares/VLBI'
import SystemManageAndControl from './components/softwares/SystemManageAndControl'
import SatIntegratedDataManagement from './components/softwares/SatIntegratedDataManagement'
import BDGNSSSystemClockMonitor from './components/softwares/BDGNSSSystemClockMonitor'
import AtomicClockSignal from './components/softwares/AtomicClockSignal'
import Logger from './components/log/Logger'
import Splansh from './components/Splansh'
import loggerUtils from './utils/loggerUtils'
import storageUtils from './utils/storageUtils'

export default {
  name: 'App',
  components: {
    Splansh,
    VLBI,
    SystemManageAndControl,
    SatIntegratedDataManagement,
    BDGNSSSystemClockMonitor,
    AtomicClockSignal,
    Logger
  },
  data () {
    return {
      activeIndex: 'splash',
      client: Stomp.client(MQTT_SERVICE),
      AtomicClockSignalVisible: false,
      BDGNSSSystemClockMonitorVisible: false,
      SatIntegratedDataManagementVisible: false,
      SystemManageAndControlVisible: false,
      VLBIVisible: false,
      LoggerVisible: false,
      SplanshVisible: true,
      datas: loggerUtils.getLog(),
      BDSBroadcastClockDifference: storageUtils.readData('BDSBroadcastClockDifference'),
      BDSClockCorrection: storageUtils.readData('BDSClockCorrection'),
      BDSClockDifference: storageUtils.readData('BDSClockDifference'),
      BDSSatTimeClockDifference: storageUtils.readData('BDSSatTimeClockDifference'),
      BDTClockDifference: storageUtils.readData('BDTClockDifference'),
      BroadcastEphemerisWarningInfo: storageUtils.readData('BroadcastEphemerisWarningInfo'),
      GnssSystemClockDifference: storageUtils.readData('GnssSystemClockDifference'),
      GroundStationWorkStateInfo: storageUtils.readData('GroundStationWorkStateInfo'),
      NavSatSignalQuality: storageUtils.readData('NavSatSignalQuality'),
      NTSCTimeDifferenceData: storageUtils.readData('NTSCTimeDifferenceData'),
      NTSCTimeDifferenceModelPara: storageUtils.readData('NTSCTimeDifferenceModelPara'),
      SignalComponent: storageUtils.readData('SignalComponent'),
      TimeFrequencyWorkingState: storageUtils.readData('TimeFrequencyWorkingState'),
      VLBIWorkState: storageUtils.readData('VLBIWorkState'),
      WorkingStateInfo: storageUtils.readData('WorkingStateInfo'),
      WorkingStateInfoBDGNSSSystemClock: storageUtils.readData('WorkingStateInfoBDGNSSSystemClock')
    }
  },
  created () {
    this.connect()
  },
  methods: {
    connect () {
      this.client.reconnect_delay = 5000
      this.client.connect(HEADERS, this.onConnected, this.onFailed)
    },
    onConnected (frame) {
      // console.log(frame)
      // eslint-disable-next-line no-unused-vars
      let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
        'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
        'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
        'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
        'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
        'WorkingStateInfoBDGNSSSystemClock']
      for (let i = 0; i < queueName.length; i++) {
        let exchange = EXCHANGE_PUSH + queueName[i]
        this.client.subscribe(exchange, this.responseCallback)
      }
    },
    onFailed (frame) {
      console.log('Failed: ' + frame)
    },
    responseCallback (frame) {
      this.queuePush(this.getsoftware(frame.headers.destination), JSON.parse(frame.body))
      // 接收到服务器推送消息，向服务器定义的接收消息routekey路由rk_recivemsg发送确认消息
      // this.client.send("/exchange/exchange_pushmsg/rk_recivemsg", {"content-type": "text/plain"}, frame.body);
    },
    getsoftware (destination) {
      // console.log(destination.substring(27))
      return destination.substring(27)
    },
    getLogData (software, data) {
      let logdata = {}
      logdata.timestamp = new Date().toJSON().substr(0, 19).replace('T', ' ')
      logdata.software = software
      logdata.data = data
      return logdata
    },
    queuePush (software, data) {
      // console.log(software + ':' + data)
      if (this.datas === null) {
        this.datas = []
      }
      let insertdata
      // eslint-disable-next-line no-unused-vars
      let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference',
        'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
        'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
        'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent',
        'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo',
        'WorkingStateInfoBDGNSSSystemClock']
      switch (software) {
        case 'SignalComponent':
          insertdata = {}
          insertdata.time = data['time']
          insertdata.sico = data['sico']
          insertdata.chpm = data['chpm']
          insertdata.chps = data['chps']
          insertdata.spsm = data['spsm']
          insertdata.spss = data['spss']
          insertdata.colm = data['colm']
          insertdata.scbm = data['scbm']
          insertdata.bswm = data['bswm']
          insertdata.bsws = data['bsws']
          insertdata.ccam = data['ccam']
          insertdata.ccsm = data['ccsm']
          insertdata.ccss = data['ccss']
          insertdata.prsm = data['prsm']
          insertdata.prss = data['prss']
          insertdata.cpsm = data['cpsm']
          insertdata.cpss = data['cpss']
          insertdata.dpsm = data['dpsm']
          insertdata.dpss = data['dpss']
          insertdata.cnsm = data['cnsm']
          insertdata.cnss = data['cnss']
          insertdata.ccdm = data['ccdm']
          insertdata.ccds = data['ccds']
          if (this.SignalComponent === null) {
            this.SignalComponent = []
          }
          this.SignalComponent.unshift(insertdata)
          this.datas.unshift(this.getLogData('SignalComponent', insertdata))
          storageUtils.saveData2('SignalComponent', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'WorkingStateInfo':
          insertdata = {}
          insertdata.MS01taskType = data['MS01taskType']
          insertdata.MS01startTime = data['MS01startTime']
          insertdata.MS01SatName = data['MS01SatName']
          insertdata.MS01endTime = data['MS01endTime']
          insertdata.MS01Result = data['MS01Result']

          insertdata.MS02taskType = data['MS02taskType']
          insertdata.MS02startTime = data['MS02startTime']
          insertdata.MS02SatName = data['MS02SatName']
          insertdata.MS02endTime = data['MS02endTime']
          insertdata.MS02Result = data['MS02Result']

          insertdata.MS03taskType = data['MS03taskType']
          insertdata.MS03startTime = data['MS03startTime']
          insertdata.MS03SatName = data['MS03SatName']
          insertdata.MS03endTime = data['MS03endTime']
          insertdata.MS03Result = data['MS03Result']

          insertdata.MS04taskType = data['MS04taskType']
          insertdata.MS04startTime = data['MS04startTime']
          insertdata.MS04SatName = data['MS04SatName']
          insertdata.MS04endTime = data['MS04endTime']
          insertdata.MS04Result = data['MS04Result']

          insertdata.MS05taskType = data['MS05taskType']
          insertdata.MS05startTime = data['MS05startTime']
          insertdata.MS05SatName = data['MS05SatName']
          insertdata.MS05endTime = data['MS05endTime']
          insertdata.MS05Result = data['MS05Result']

          insertdata.MS06taskType = data['MS06taskType']
          insertdata.MS06startTime = data['MS06startTime']
          insertdata.MS06SatName = data['MS06SatName']
          insertdata.MS06endTime = data['MS06endTime']
          insertdata.MS06Result = data['MS06Result']

          insertdata.MS07taskType = data['MS07taskType']
          insertdata.MS07startTime = data['MS07startTime']
          insertdata.MS07SatName = data['MS07SatName']
          insertdata.MS07endTime = data['MS07endTime']
          insertdata.MS07Result = data['MS07Result']

          insertdata.MS08taskType = data['MS08taskType']
          insertdata.MS08startTime = data['MS08startTime']
          insertdata.MS08SatName = data['MS08SatName']
          insertdata.MS08endTime = data['MS08endTime']
          insertdata.MS08Result = data['MS08Result']

          insertdata.MS09taskType = data['MS09taskType']
          insertdata.MS09startTime = data['MS09startTime']
          insertdata.MS09SatName = data['MS09SatName']
          insertdata.MS09endTime = data['MS09endTime']
          insertdata.MS09Result = data['MS09Result']

          insertdata.MS10taskType = data['MS10taskType']
          insertdata.MS10startTime = data['MS10startTime']
          insertdata.MS10SatName = data['MS10SatName']
          insertdata.MS10endTime = data['MS10endTime']
          insertdata.MS10Result = data['MS10Result']

          insertdata.MS11taskType = data['MS11taskType']
          insertdata.MS11startTime = data['MS11startTime']
          insertdata.MS11SatName = data['MS11SatName']
          insertdata.MS11endTime = data['MS11endTime']
          insertdata.MS11Result = data['MS11Result']

          if (this.WorkingStateInfo === null) {
            this.WorkingStateInfo = []
          }
          this.WorkingStateInfo.unshift(insertdata)
          this.datas.unshift(this.getLogData('WorkingStateInfo', insertdata))
          storageUtils.saveData2('WorkingStateInfo', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'NavSatSignalQuality':
          insertdata = {}
          insertdata.time = data['time']
          insertdata.said = data['said']
          insertdata.stid = data['stid']
          insertdata.sifr = data['sifr']
          insertdata.nuco = data['nuco']
          if (this.NavSatSignalQuality === null) {
            this.NavSatSignalQuality = []
          }
          this.NavSatSignalQuality.unshift(insertdata)
          this.datas.unshift(this.getLogData('NavSatSignalQuality', insertdata))
          storageUtils.saveData2('NavSatSignalQuality', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BDSBroadcastClockDifference':
          insertdata = {}
          insertdata.station = data['station']
          insertdata.time = data['time']
          insertdata.svid = data['svid']
          insertdata.b3I = data['b3I']
          insertdata.b1I = data['b1I']
          insertdata.b2A = data['b2A']
          if (this.BDSBroadcastClockDifference === null) {
            this.BDSBroadcastClockDifference = []
          }
          this.BDSBroadcastClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('BDSBroadcastClockDifference', insertdata))
          storageUtils.saveData2('BDSBroadcastClockDifference', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BDSClockCorrection':
          insertdata = {}
          insertdata.station = data['station']
          insertdata.time = data['time']
          insertdata.SVID = data['svid']
          insertdata.SVCLK = data['svclk']
          if (this.BDSClockCorrection === null) {
            this.BDSClockCorrection = []
          }
          this.BDSClockCorrection.unshift(insertdata)
          this.datas.unshift(this.getLogData('BDSClockCorrection', insertdata))
          storageUtils.saveData2('BDSClockCorrection', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BDSClockDifference':
          insertdata = {}
          insertdata.station = data['station']
          insertdata.time = data['time']
          insertdata.SVID = data['svid']
          insertdata.SVCLK = data['svclk']
          if (this.BDSClockDifference === null) {
            this.BDSClockDifference = []
          }
          this.BDSClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('BDSClockDifference', insertdata))
          storageUtils.saveData2('BDSClockDifference', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BDSSatTimeClockDifference':
          insertdata = {}
          insertdata.station = data['station']
          insertdata.time = data['time']
          insertdata.packetAmount = data['packetAmount']
          insertdata.packetNo = data['packetNo']
          if (this.BDSSatTimeClockDifference === null) {
            this.BDSSatTimeClockDifference = []
          }
          this.BDSSatTimeClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('BDSSatTimeClockDifference', insertdata))
          storageUtils.saveData2('BDSSatTimeClockDifference', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BDTClockDifference':
          insertdata = {}
          insertdata.station = data['station']
          insertdata.time = data['time']
          insertdata.clockDifference = data['clockDifference']
          if (this.BDSSatTimeClockDifference === null) {
            this.BDSSatTimeClockDifference = []
          }
          this.BDSSatTimeClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('BDTClockDifference', insertdata))
          storageUtils.saveData2('BDTClockDifference', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'BroadcastEphemerisWarningInfo':
          insertdata = {}
          insertdata.week = data['week']
          insertdata.sec = data['sec']
          insertdata.warningInfo1 = data['warningInfo1']
          insertdata.warningInfo2 = data['warningInfo2']
          if (this.BDSSatTimeClockDifference === null) {
            this.BDSSatTimeClockDifference = []
          }
          this.BDSSatTimeClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('BroadcastEphemerisWarningInfo', insertdata))
          storageUtils.saveData2('BroadcastEphemerisWarningInfo', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'GnssSystemClockDifference':
          insertdata = {}
          insertdata.MeasTimeUTCGPST = data['measTimeUTCGPST']
          insertdata.MeasValueUTCGPST = data['measValueUTCGPST']
          insertdata.MeasTimeUTCGLONASST = data['measTimeUTCGLONASST']
          insertdata.MeasValueUTCGLONASST = data['measValueUTCGLONASST']
          insertdata.MeasTimeUTCGST = data['measTimeUTCGST']
          insertdata.MeasValueUTCGST = data['measValueUTCGST']
          insertdata.MeasTimeUTCBDT = data['measTimeUTCBDT']
          insertdata.MeasValueUTCBDT = data['measValueUTCBDT']
          insertdata.MeasTimeUTCQZSST = data['measTimeUTCQZSST']
          insertdata.MeasValueUTCQZSST = data['measValueUTCQZSST']
          insertdata.MeasTimeUTCIRNSST = data['measTimeUTCIRNSST']
          insertdata.MeasValueUTCIRNSST = data['measValueUTCIRNSST']
          insertdata.MeasTimeUTCSBAST = data['measTimeUTCSBAST']
          insertdata.MeasValueUTCSBAST = data['measValueUTCSBAST']
          if (this.GnssSystemClockDifference === null) {
            this.GnssSystemClockDifference = []
          }
          this.GnssSystemClockDifference.unshift(insertdata)
          this.datas.unshift(this.getLogData('GnssSystemClockDifference', insertdata))
          storageUtils.saveData2('GnssSystemClockDifference', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'GroundStationWorkStateInfo':
          insertdata = {}
          insertdata.week = data['week']
          insertdata.sec = data['sec']
          insertdata.groundID1 = data['groundID1']
          insertdata.baseBandState1 = data['baseBandState1']
          insertdata.baseBandID1 = data['baseBandID1']
          insertdata.baseBandNo1 = data['baseBandNo1']
          insertdata.baseBandWorkState1 = data['baseBandWorkState1']
          insertdata.C1UPState1 = data['C1UPState1']
          insertdata.C1DOWNState1 = data['C1DOWNState1']
          insertdata.FreConverterID1 = data['FreConverterID1']
          insertdata.FreConverterWorkState1 = data['FreConverterWorkState1']
          insertdata.FreConverterBlockState1 = data['FreConverterBlockState1']
          insertdata.FreConverterOutput1 = data['FreConverterOutput1']

          insertdata.groundID1 = data['groundID']
          insertdata.baseBandState1 = data['baseBandState2']
          insertdata.baseBandID1 = data['baseBandID2']
          insertdata.baseBandNo1 = data['baseBandNo2']
          insertdata.baseBandWorkState1 = data['baseBandWorkState2']
          insertdata.C1UPState1 = data['C1UPState2']
          insertdata.C1DOWNState1 = data['C1DOWNState2']
          insertdata.FreConverterID1 = data['FreConverterID2']
          insertdata.FreConverterWorkState1 = data['FreConverterWorkState2']
          insertdata.FreConverterBlockState1 = data['FreConverterBlockState2']
          insertdata.FreConverterOutput1 = data['FreConverterOutput2']

          insertdata.groundID1 = data['groundID3']
          insertdata.baseBandState1 = data['baseBandState3']
          insertdata.baseBandID1 = data['baseBandID3']
          insertdata.baseBandNo1 = data['baseBandNo3']
          insertdata.baseBandWorkState1 = data['baseBandWorkState3']
          insertdata.C1UPState1 = data['C1UPState3']
          insertdata.C1DOWNState1 = data['C1DOWNState3']
          insertdata.FreConverterID1 = data['FreConverterID3']
          insertdata.FreConverterWorkState1 = data['FreConverterWorkState3']
          insertdata.FreConverterBlockState1 = data['FreConverterBlockState3']
          insertdata.FreConverterOutput1 = data['FreConverterOutput3']

          if (this.GroundStationWorkStateInfo === null) {
            this.GroundStationWorkStateInfo = []
          }
          this.GroundStationWorkStateInfo.unshift(insertdata)
          this.datas.unshift(this.getLogData('GroundStationWorkStateInfo', insertdata))
          storageUtils.saveData2('GroundStationWorkStateInfo', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'NTSCTimeDifferenceData':
          insertdata = {}
          insertdata.week = data['week']
          insertdata.sec = data['sec']
          insertdata.timeDifference = data['timeDifference']
          if (this.NTSCTimeDifferenceData === null) {
            this.NTSCTimeDifferenceData = []
          }
          this.NTSCTimeDifferenceData.unshift(insertdata)
          this.datas.unshift(this.getLogData('NTSCTimeDifferenceData', insertdata))
          storageUtils.saveData2('NTSCTimeDifferenceData', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'NTSCTimeDifferenceModelPara':
          insertdata = {}
          insertdata.week = data['week']
          insertdata.sec = data['sec']
          insertdata.runningState = data['runningState']
          insertdata.constantTerm = data['constantTerm']
          insertdata.oneTimeTerm = data['oneTimeTerm']
          insertdata.quadraticTerm = data['quadraticTerm']
          if (this.NTSCTimeDifferenceModelPara === null) {
            this.NTSCTimeDifferenceModelPara = []
          }
          this.NTSCTimeDifferenceModelPara.unshift(insertdata)
          this.datas.unshift(this.getLogData('NTSCTimeDifferenceModelPara', insertdata))
          storageUtils.saveData2('NTSCTimeDifferenceModelPara', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'TimeFrequencyWorkingState':
          insertdata = {}
          insertdata.timeFrequencySystem = data['timeFrequencySystem']
          insertdata.produceSystem = data['produceSystem']
          insertdata.timeServiceSystem = data['timeServiceSystem']
          insertdata.performanceEvaluationSystem = data['performanceEvaluationSystem']
          insertdata.deviationDetectionSystem = data['deviationDetectionSystem']
          insertdata.timeDeliverySystem = data['timeDeliverySystem']
          if (this.TimeFrequencyWorkingState === null) {
            this.TimeFrequencyWorkingState = []
          }
          this.TimeFrequencyWorkingState.unshift(insertdata)
          this.datas.unshift(this.getLogData('TimeFrequencyWorkingState', insertdata))
          storageUtils.saveData2('TimeFrequencyWorkingState', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'VLBIWorkState':
          insertdata = {}
          insertdata.start = data['start']
          insertdata.counter = data['counter']
          insertdata.hour = data['hour']
          insertdata.minute = data['minute']
          insertdata.second = data['second']
          insertdata.millisecond = data['millisecond']
          insertdata.kashiStart = data['kashiStart']
          insertdata.kashiCounter = data['kashiCounter']
          insertdata.kashiHour = data['kashiHour']
          insertdata.kashiMinute = data['kashiMinute']
          insertdata.kashiSecond = data['kashiSecond']
          insertdata.kashiMillisecond = data['kashiMillisecond']
          insertdata.kashiReverse = data['kashiReverse']
          insertdata.kashiAzimuth = data['kashiAzimuth']
          insertdata.kashiPitchAngle = data['kashiPitchAngle']
          insertdata.kashiReverse1 = data['kashiReverse1']
          insertdata.kashiTemperature = data['kashiTemperature']
          insertdata.kashiReverse2 = data['kashiReverse2']
          insertdata.kashiEnd = data['kashiEnd']

          insertdata.sanyaStart = data['sanyaStart']
          insertdata.sanyaCounter = data['sanyaCounter']
          insertdata.sanyaHour = data['sanyaHour']
          insertdata.sanyaMinute = data['sanyaMinute']
          insertdata.sanyaSecond = data['sanyaSecond']
          insertdata.sanyaiMillisecond = data['sanyaiMillisecond']
          insertdata.sanyaReverse = data['sanyaReverse']
          insertdata.sanyaAzimuth = data['sanyaAzimuth']
          insertdata.sanyaPitchAngle = data['sanyaPitchAngle']
          insertdata.sanyaReverse1 = data['sanyaReverse1']
          insertdata.sanyaTemperature = data['sanyaTemperature']
          insertdata.sanyaReverse2 = data['sanyaReverse2']
          insertdata.sanyaEnd = data['sanyaEnd']

          insertdata.jilinStart = data['jilinStart']
          insertdata.jilinCounter = data['jilinCounter']
          insertdata.jilinHour = data['jilinHour']
          insertdata.jilinMinute = data['jilinMinute']
          insertdata.jilinSecond = data['jilinSecond']
          insertdata.jilinMillisecond = data['jilinMillisecond']
          insertdata.jilinReverse = data['jilinReverse']
          insertdata.jilinAzimuth = data['jilinAzimuth']
          insertdata.jilinPitchAngle = data['jilinPitchAngle']
          insertdata.jilinReverse1 = data['jilinReverse1']
          insertdata.jilinTemperature = data['jilinTemperature']
          insertdata.jilinReverse2 = data['jilinReverse2']
          insertdata.jilinEnd = data['jilinEnd']
          insertdata.end = data['end']
          if (this.VLBIWorkState === null) {
            this.VLBIWorkState = []
          }
          this.VLBIWorkState.unshift(insertdata)
          this.datas.unshift(this.getLogData('VLBIWorkState', insertdata))
          storageUtils.saveData2('VLBIWorkState', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        case 'WorkingStateInfoBDGNSSSystemClock':
          insertdata = {}
          insertdata.measTime = data['measTime']
          insertdata.measValue = data['measValue']
          if (this.WorkingStateInfoBDGNSSSystemClock === null) {
            this.WorkingStateInfoBDGNSSSystemClock = []
          }
          this.WorkingStateInfoBDGNSSSystemClock.unshift(insertdata)
          this.datas.unshift(this.getLogData('WorkingStateInfoBDGNSSSystemClock', insertdata))
          storageUtils.saveData2('WorkingStateInfoBDGNSSSystemClock', insertdata)
          loggerUtils.saveLog2(this.datas)
          break
        default:
          break
      }
    },
    handleSelect (key, keyPath) {
      switch (key) {
        case 'SystemManageAndControl':
          this.SystemManageAndControlVisible = true
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
        case 'bdgnsssystemclock':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = true
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
        case 'satintegrated':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = true
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
        case 'AtomicClockSignal':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = true
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
        case 'VLBI':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = true
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
        case 'log':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = true
          this.SplanshVisible = false
          break
        case 'splash':
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = true
          break
        default:
          this.SystemManageAndControlVisible = false
          this.BDGNSSSystemClockMonitorVisible = false
          this.SatIntegratedDataManagementVisible = false
          this.AtomicClockSignalVisible = false
          this.VLBIVisible = false
          this.LoggerVisible = false
          this.SplanshVisible = false
          break
      }
    },
    settingOpen () {
      this.$notify.error({
        title: '错误',
        message: '此功能还未开发',
        offset: 60
      })
    }

  }
}
</script>

<style>
#table{
  transition: 0.5s;
  -webkit-transition:  0.5s;
}
#table:hover {
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.1);
}
#table2{
  transition:  0.5s;
  -webkit-transition:  0.5s;
}
#table2:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.header-button {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

#content {
  margin-left: 8px;
  margin-right: 8px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgba(0, 0, 0, .1)
}

.tableHeaderCell {
  background: #f3f2f2 !important;
  color: black;
  font-weight: bold;
}
</style>
