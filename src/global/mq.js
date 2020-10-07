import Stomp from 'stompjs'
import store from '../vuex/store'
import {
  LIST_COUNT,
  NAV_SAT_SIGNAL_QUALITY_LIST_COUNT,
  SPACE_SIGNAL_QUALITY_MONITOR_WORKSTATE_LIST_COUNT,
  VIBI_WORKSTATE_LIST_COUNT
} from '../../config/display'
import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from '../../config/mqtt'

let client = Stomp.client(MQTT_SERVICE)
client.debug = function (str) {
  // append the debug log to a #debug div somewhere in the page using JQuery:
  console.log(str)
}

export default function connect () {
  client.connect(HEADERS, onConnected, onFailed)
}

function onConnected () {
  let queueName = ['BDSBroadcastClockDifference[]', 'BDSClockCorrection[]', 'BDSClockDifference[]',
    'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo',
    'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality',
    'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'SignalComponent[]',
    'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo', 'satComponent',
    'WorkingStateInfoBDGNSSSystemClock', 'NavSatIrregularMonitor',
    'connect info', 'sending info', 'receiving info', 'realTimeViewTest', 'alert test']
  for (let i = 0; i < queueName.length; i++) {
    let header = {
      'ack': 'client',
      'durable': true,
      'auto-delete': false
    }
    let exchange = EXCHANGE_PUSH + queueName[i]
    client.subscribe(exchange, responseCallback, header)
  }
}

function responseCallback (frame) {
  frame.ack()
  // console.log(frame)
  // client.send('/exchange/exchange_pushmsg/recivemsg', {'content-type': 'text/plain'}, frame.body)
  queuePush(getSoftware(frame.headers.destination), JSON.parse(frame.body))
}

function onFailed (frame) {
  console.log('Failed: ' + frame)
}

function getSoftware (destination) {
  // console.log(destination.substring(27))
  return destination.substring(27)
}

function queuePush (software, data) {
  // console.log(software)
  // console.log(data)
  // console.log(store)
  // console.log(store.getters)
  // console.log(store.getters.getData)
  let insertdata
  let currentData
  let insertList
  let datas = store.getters.getData

  switch (software) {
    case 'NavSatSignalQualityAllDirection':
      currentData = store.state.NavSatSignalQualityAllDirection
      insertdata = {}
      insertdata.time = data['time']
      insertdata.stid = data['stid']
      insertdata.nusa = data['nusa']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'NavSatSignalQualityAllDirection'})
      break
    case 'SatComponent':
      currentData = store.state.SatComponent
      insertdata = {}
      insertdata.time = data['time']
      insertdata.satID = data['satID']
      insertdata.nufr = data['nufr']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'SatComponent'})
      break
    case 'FrequencyComponent':
      currentData = store.state.FrequencyComponent
      insertdata = {}
      insertdata.time = data['time']
      insertdata.sifr = data['sifr']
      insertdata.nuco = data['nuco']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'FrequencyComponent'})
      break
    case 'SignalComponentAllDirection[]':
      currentData = store.state.SignalComponentAllDirection
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.time = data[i]['time']
        insertdata.sico = data[i]['sico']
        insertdata.chpm = data[i]['chpm']
        insertdata.chps = data[i]['chps']
        insertdata.spsm = data[i]['spsm']
        insertdata.spss = data[i]['spss']
        insertdata.colm = data[i]['colm']
        insertdata.scb1 = data[i]['scb1']
        insertdata.scb2 = data[i]['scb2']
        insertdata.scb3 = data[i]['scb3']
        insertdata.scb4 = data[i]['scb4']
        insertdata.bswm = data[i]['bswm']
        insertdata.bsws = data[i]['bsws']
        insertdata.ccam = data[i]['ccam']
        insertdata.ccsm = data[i]['ccsm']
        insertdata.ccss = data[i]['ccss']
        insertdata.prsm = data[i]['prsm']
        insertdata.prss = data[i]['prss']
        insertdata.cpsm = data[i]['cpsm']
        insertdata.cpss = data[i]['cpss']
        insertdata.dpsm = data[i]['dpsm']
        insertdata.dpss = data[i]['dpss']
        insertdata.cnsm = data[i]['cnsm']
        insertdata.cnss = data[i]['cnss']
        insertdata.ccdm = data[i]['ccdm']
        insertdata.ccds = data[i]['ccds']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'SignalComponentAllDirection'})
      break
    case 'NavSatSignalQuality':
      // currentData = store.state.NavSatSignalQuality
      insertdata = {}
      insertdata.time = data['time']
      insertdata.said = data['said']
      insertdata.stid = data['stid']
      insertdata.sifr = data['sifr']
      insertdata.nuco = data['nuco']
      // if (currentData === null || currentData === undefined) {
      //   currentData = []
      // }
      // if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
      //   // 只显示最新一条
      //   currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      // }
      // currentData.unshift(insertdata)
      currentData = []
      currentData.push(insertdata)
      store.commit('change', {'data': currentData, 'software': 'NavSatSignalQuality'})
      break
    case 'SignalComponent[]':
      currentData = store.state.SignalComponent
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.time = data[i]['time']
        insertdata.sico = data[i]['sico']
        insertdata.chpm = data[i]['chpm']
        insertdata.chps = data[i]['chps']
        insertdata.spsm = data[i]['spsm']
        insertdata.spss = data[i]['spss']
        insertdata.colm = data[i]['colm']
        insertdata.scb1 = data[i]['scb1']
        insertdata.scb2 = data[i]['scb2']
        insertdata.scb3 = data[i]['scb3']
        insertdata.scb4 = data[i]['scb4']
        insertdata.bswm = data[i]['bswm']
        insertdata.bsws = data[i]['bsws']
        insertdata.ccam = data[i]['ccam']
        insertdata.ccsm = data[i]['ccsm']
        insertdata.ccss = data[i]['ccss']
        insertdata.prsm = data[i]['prsm']
        insertdata.prss = data[i]['prss']
        insertdata.cpsm = data[i]['cpsm']
        insertdata.cpss = data[i]['cpss']
        insertdata.dpsm = data[i]['dpsm']
        insertdata.dpss = data[i]['dpss']
        insertdata.cnsm = data[i]['cnsm']
        insertdata.cnss = data[i]['cnss']
        insertdata.ccdm = data[i]['ccdm']
        insertdata.ccds = data[i]['ccds']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'SignalComponent'})
      break

    case 'BDNavSatSignalQualityAllDirection':
      currentData = store.state.BDNavSatSignalQualityAllDirection
      insertdata = {}
      insertdata.time = data['time']
      insertdata.stid = data['stid']
      insertdata.nusa = data['nusa']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDNavSatSignalQualityAllDirection'})
      break
    case 'BDSatComponent':
      currentData = store.state.BDSatComponent
      insertdata = {}
      insertdata.time = data['time']
      insertdata.satID = data['satID']
      insertdata.nufr = data['nufr']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDSatComponent'})
      break
    case 'BDFrequencyComponent':
      currentData = store.state.BDFrequencyComponent
      insertdata = {}
      insertdata.time = data['time']
      insertdata.sifr = data['sifr']
      insertdata.nuco = data['nuco']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
        // 只显示最新一条
        currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDFrequencyComponent'})
      break
    case 'BDSignalComponentAllDirection[]':
      currentData = store.state.BDSignalComponentAllDirection
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.time = data[i]['time']
        insertdata.sico = data[i]['sico']
        insertdata.chpm = data[i]['chpm']
        insertdata.chps = data[i]['chps']
        insertdata.spsm = data[i]['spsm']
        insertdata.spss = data[i]['spss']
        insertdata.colm = data[i]['colm']
        insertdata.scb1 = data[i]['scb1']
        insertdata.scb2 = data[i]['scb2']
        insertdata.scb3 = data[i]['scb3']
        insertdata.scb4 = data[i]['scb4']
        insertdata.bswm = data[i]['bswm']
        insertdata.bsws = data[i]['bsws']
        insertdata.ccam = data[i]['ccam']
        insertdata.ccsm = data[i]['ccsm']
        insertdata.ccss = data[i]['ccss']
        insertdata.prsm = data[i]['prsm']
        insertdata.prss = data[i]['prss']
        insertdata.cpsm = data[i]['cpsm']
        insertdata.cpss = data[i]['cpss']
        insertdata.dpsm = data[i]['dpsm']
        insertdata.dpss = data[i]['dpss']
        insertdata.cnsm = data[i]['cnsm']
        insertdata.cnss = data[i]['cnss']
        insertdata.ccdm = data[i]['ccdm']
        insertdata.ccds = data[i]['ccds']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'BDSignalComponentAllDirection'})
      break
    case 'BDNavSatSignalQuality':
      // currentData = store.state.BDNavSatSignalQuality
      insertdata = {}
      insertdata.time = data['time']
      insertdata.said = data['said']
      insertdata.stid = data['stid']
      insertdata.sifr = data['sifr']
      insertdata.nuco = data['nuco']
      // if (currentData === null || currentData === undefined) {
      //   currentData = []
      // }
      // if (currentData.length >= NAV_SAT_SIGNAL_QUALITY_LIST_COUNT) {
      //   // 只显示最新一条
      //   currentData = currentData.slice(0, NAV_SAT_SIGNAL_QUALITY_LIST_COUNT - 1)
      // }
      // currentData.unshift(insertdata)
      currentData = []
      currentData.push(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDNavSatSignalQuality'})
      break
    case 'BDSignalComponent[]':
      currentData = store.state.BDSignalComponent
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.time = data[i]['time']
        insertdata.sico = data[i]['sico']
        insertdata.chpm = data[i]['chpm']
        insertdata.chps = data[i]['chps']
        insertdata.spsm = data[i]['spsm']
        insertdata.spss = data[i]['spss']
        insertdata.colm = data[i]['colm']
        insertdata.scb1 = data[i]['scb1']
        insertdata.scb2 = data[i]['scb2']
        insertdata.scb3 = data[i]['scb3']
        insertdata.scb4 = data[i]['scb4']
        insertdata.bswm = data[i]['bswm']
        insertdata.bsws = data[i]['bsws']
        insertdata.ccam = data[i]['ccam']
        insertdata.ccsm = data[i]['ccsm']
        insertdata.ccss = data[i]['ccss']
        insertdata.prsm = data[i]['prsm']
        insertdata.prss = data[i]['prss']
        insertdata.cpsm = data[i]['cpsm']
        insertdata.cpss = data[i]['cpss']
        insertdata.dpsm = data[i]['dpsm']
        insertdata.dpss = data[i]['dpss']
        insertdata.cnsm = data[i]['cnsm']
        insertdata.cnss = data[i]['cnss']
        insertdata.ccdm = data[i]['ccdm']
        insertdata.ccds = data[i]['ccds']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'BDSignalComponent'})
      break

    case 'WorkingStateInfo':
      currentData = store.state.WorkingStateInfo
      insertdata = {}
      insertdata.ms01taskType = data['ms01taskType']
      insertdata.ms01startTime = data['ms01startTime']
      insertdata.ms01SatName = data['ms01SatName']
      insertdata.ms01endTime = data['ms01endTime']
      insertdata.ms01Result = data['ms01Result']

      insertdata.ms02taskType = data['ms02taskType']
      insertdata.ms02startTime = data['ms02startTime']
      insertdata.ms02SatName = data['ms02SatName']
      insertdata.ms02endTime = data['ms02endTime']
      insertdata.ms02Result = data['ms02Result']

      insertdata.ms03taskType = data['ms03taskType']
      insertdata.ms03startTime = data['ms03startTime']
      insertdata.ms03SatName = data['ms03SatName']
      insertdata.ms03endTime = data['ms03endTime']
      insertdata.ms03Result = data['ms03Result']

      insertdata.ms04taskType = data['ms04taskType']
      insertdata.ms04startTime = data['ms04startTime']
      insertdata.ms04SatName = data['ms04SatName']
      insertdata.ms04endTime = data['ms04endTime']
      insertdata.ms04Result = data['ms04Result']

      insertdata.ms05taskType = data['ms05taskType']
      insertdata.ms05startTime = data['ms05startTime']
      insertdata.ms05SatName = data['ms05SatName']
      insertdata.ms05endTime = data['ms05endTime']
      insertdata.ms05Result = data['ms05Result']

      insertdata.ms06taskType = data['ms06taskType']
      insertdata.ms06startTime = data['ms06startTime']
      insertdata.ms06SatName = data['ms06SatName']
      insertdata.ms06endTime = data['ms06endTime']
      insertdata.ms06Result = data['ms06Result']

      insertdata.ms07taskType = data['ms07taskType']
      insertdata.ms07startTime = data['ms07startTime']
      insertdata.ms07SatName = data['ms07SatName']
      insertdata.ms07endTime = data['ms07endTime']
      insertdata.ms07Result = data['ms07Result']

      insertdata.ms08taskType = data['ms08taskType']
      insertdata.ms08startTime = data['ms08startTime']
      insertdata.ms08SatName = data['ms08SatName']
      insertdata.ms08endTime = data['ms08endTime']
      insertdata.ms08Result = data['ms08Result']

      insertdata.ms09taskType = data['ms09taskType']
      insertdata.ms09startTime = data['ms09startTime']
      insertdata.ms09SatName = data['ms09SatName']
      insertdata.ms09endTime = data['ms09endTime']
      insertdata.ms09Result = data['ms09Result']

      insertdata.ms10taskType = data['ms10taskType']
      insertdata.ms10startTime = data['ms10startTime']
      insertdata.ms10SatName = data['ms10SatName']
      insertdata.ms10endTime = data['ms10endTime']
      insertdata.ms10Result = data['ms10Result']

      insertdata.ms11taskType = data['ms11taskType']
      insertdata.ms11startTime = data['ms11startTime']
      insertdata.ms11SatName = data['ms11SatName']
      insertdata.ms11endTime = data['ms11endTime']
      insertdata.ms11Result = data['ms11Result']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= SPACE_SIGNAL_QUALITY_MONITOR_WORKSTATE_LIST_COUNT) {
        currentData = currentData.slice(0, SPACE_SIGNAL_QUALITY_MONITOR_WORKSTATE_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'WorkingStateInfo'})
      break
    case 'VLBIWorkState':
      currentData = datas['VLBIWorkState']
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
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= VIBI_WORKSTATE_LIST_COUNT) {
        currentData = currentData.slice(0, VIBI_WORKSTATE_LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'VLBIWorkState'})
      break
    case 'GnssSystemClockDifference':
      currentData = store.state.GnssSystemClockDifference
      insertdata = {}
      insertdata.measName = data['measName']
      insertdata.measTime = data['measTime']
      insertdata.measValue = data['measValue']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'GnssSystemClockDifference'})
      break
    case 'BDSBroadcastClockDifference[]':
      currentData = store.state.BDSBroadcastClockDifference
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.station = data[i]['station']
        insertdata.time = data[i]['time']
        insertdata.svid = data[i]['svid']
        insertdata.b3I = data[i]['b3I']
        insertdata.b1I = data[i]['b1I']
        insertdata.b2A = data[i]['b2A']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'BDSBroadcastClockDifference'})
      break
    case 'BDSClockCorrection[]':
      currentData = store.state.BDSClockCorrection
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.station = data[i]['station']
        insertdata.time = data[i]['time']
        insertdata.SVID = data[i]['svid']
        insertdata.SVCLK = data[i]['svclk']
        insertList.push(insertdata)
      }
      console.log('insertList')
      console.log(insertList[0])
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'BDSClockCorrection'})
      break
    case 'BDSSatTimeClockDifference':
      // currentData = store.state.BDSSatTimeClockDifference
      insertdata = {}
      insertdata.station = data['station']
      insertdata.time = data['time']
      insertdata.packetAmount = data['packetAmount']
      insertdata.packetNo = data['packetNo']
      currentData = []
      currentData.push(insertdata)
      // if (currentData === null || currentData === undefined) {
      //   currentData = []
      //   currentData.push(insertdata)
      // } else {
      //   currentData[0] = insertdata
      // }
      // currentData.pop()
      // currentData.push(insertdata)
      // if (currentData.length >= BDS_CLOCK_DIFFERENCE_LIST_COUNT) {
      //   currentData = currentData.slice(0, BDS_CLOCK_DIFFERENCE_LIST_COUNT - 1)
      // }
      // currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDSSatTimeClockDifference'})
      break
    case 'BDSClockDifference[]':
      currentData = store.state.BDSClockDifference
      insertList = []
      currentData = []
      for (let i = 0; i < data.length; i++) {
        insertdata = {}
        insertdata.time = data[i]['time']
        insertdata.svid = data[i]['svid']
        insertdata.b3I = data[i]['b3I']
        insertdata.b1I = data[i]['b1I']
        insertdata.b2A = data[i]['b2A']
        insertList.push(insertdata)
      }
      currentData.unshift(insertList)
      store.commit('change', {'data': currentData, 'software': 'BDSClockDifference'})
      break
    case 'BDTClockDifference':
      currentData = store.state.BDTClockDifference
      insertdata = {}
      insertdata.station = data['station']
      insertdata.time = data['time']
      insertdata.clockDifference = data['clockDifference']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BDTClockDifference'})
      break
    case 'BroadcastEphemerisWarningInfo':
      currentData = store.state.BroadcastEphemerisWarningInfo
      insertdata = {}
      insertdata.week = data['week']
      insertdata.sec = data['sec']
      insertdata.warningInfo1 = data['warningInfo1']
      insertdata.warningInfo2 = data['warningInfo2']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'BroadcastEphemerisWarningInfo'})
      break
    case 'GroundStationWorkStateInfo':
      currentData = store.state.GroundStationWorkStateInfo
      insertdata = {}
      insertdata.week = data['week']
      insertdata.sec = data['sec']
      insertdata.groundID1 = data['groundID1']
      insertdata.baseBandState1 = data['baseBandState1']
      insertdata.baseBandID1 = data['baseBandID1']
      insertdata.baseBandWorkState1 = data['baseBandWorkState1']
      insertdata.c1UPBlockState1 = data['c1UPBlockState1']
      insertdata.c1UPWorkState1 = data['c1UPWorkState1']
      insertdata.c1DOWNBlockState1 = data['c1DOWNBlockState1']
      insertdata.c1UPFrequency1 = data['c1UPFrequency1']
      insertdata.c1DOWNFrequency1 = data['c1DOWNFrequency1']
      insertdata.c1DOWNWorkState1 = data['c1DOWNWorkState1']
      insertdata.c1DOWNState1 = data['c1DOWNState1']
      insertdata.c1UPState1 = data['c1UPState1']

      insertdata.groundID2 = data['groundID2']
      insertdata.baseBandState2 = data['baseBandState2']
      insertdata.baseBandID2 = data['baseBandID2']
      insertdata.baseBandWorkState2 = data['baseBandWorkState2']
      insertdata.c1DOWNFrequency2 = data['c1DOWNFrequency2']
      insertdata.c1DOWNBlockState2 = data['c1DOWNBlockState2']
      insertdata.c1UPFrequency2 = data['c1UPFrequency2']
      insertdata.c1UPWorkState2 = data['c1UPWorkState2']
      insertdata.c1UPBlockState2 = data['c1UPBlockState2']
      insertdata.c1DOWNWorkState2 = data['c1DOWNWorkState2']
      insertdata.c1UPState2 = data['c1UPState2']
      insertdata.c1DOWNState2 = data['c1DOWNState2']

      insertdata.groundID3 = data['groundID3']
      insertdata.baseBandState3 = data['baseBandState3']
      insertdata.baseBandID3 = data['baseBandID3']
      insertdata.baseBandWorkState3 = data['baseBandWorkState3']
      insertdata.c1UPFrequency3 = data['c1UPFrequency3']
      insertdata.c1DOWNWorkState3 = data['c1DOWNWorkState3']
      insertdata.c1UPWorkState3 = data['c1UPWorkState3']
      insertdata.c1DOWNBlockState3 = data['c1DOWNBlockState3']
      insertdata.c1DOWNFrequency3 = data['c1DOWNFrequency3']
      insertdata.c1DOWNState3 = data['c1DOWNState3']
      insertdata.c1UPState3 = data['c1UPState3']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'GroundStationWorkStateInfo'})
      break
    case 'NTSCTimeDifferenceData':
      currentData = store.state.NTSCTimeDifferenceData
      insertdata = {}
      insertdata.week = data['week']
      insertdata.sec = data['sec']
      insertdata.timeDifference = data['timeDifference']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'NTSCTimeDifferenceData'})
      break
    case 'NTSCTimeDifferenceModelPara':
      currentData = store.state.NTSCTimeDifferenceModelPara
      insertdata = {}
      insertdata.week = data['week']
      insertdata.sec = data['sec']
      insertdata.runningState = data['runningState']
      insertdata.constantTerm = data['constantTerm']
      insertdata.oneTimeTerm = data['oneTimeTerm']
      insertdata.quadraticTerm = data['quadraticTerm']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'NTSCTimeDifferenceModelPara'})
      break
    case 'TimeFrequencyWorkingState':
      currentData = store.state.TimeFrequencyWorkingState
      insertdata = {}
      insertdata.timeFrequencySystem = data['timeFrequencySystem']
      insertdata.produceSystem = data['produceSystem']
      insertdata.timeServiceSystem = data['timeServiceSystem']
      insertdata.performanceEvaluationSystem = data['performanceEvaluationSystem']
      insertdata.deviationDetectionSystem = data['deviationDetectionSystem']
      insertdata.timeDeliverySystem = data['timeDeliverySystem']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'TimeFrequencyWorkingState'})
      break
    case 'WorkingStateInfoBDGNSSSystemClock':
      currentData = store.state.WorkingStateInfoBDGNSSSystemClock
      insertdata = {}
      insertdata.measTime = data['measTime']
      insertdata.measValue = data['measValue']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'WorkingStateInfoBDGNSSSystemClock'})
      break
    case 'NavSatIrregularMonitor':
      currentData = store.state.NavSatIrregularMonitor
      insertdata = {}
      insertdata.time = data['time']
      insertdata.said = data['said']
      insertdata.stid = data['stid']
      insertdata.daty = data['daty']
      insertdata.ercd = data['ercd']
      insertdata.emln = data['emln']
      insertdata.ermg = data['ermg']
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'NavSatIrregularMonitor'})
      break
    case 'connect info':
      currentData = store.state.SystemInfo
      let result = data.match(/(.*):(.*):(.*):(.*)/)
      // console.log('result')
      // console.log(result)
      insertdata = {}
      insertdata.time = result[1]
      insertdata.name = result[2]
      insertdata.info = result[3]
      insertdata.result = result[4]
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'SystemInfo'})
      break
    case 'sending info':
      currentData = store.state.SendInfo
      let SendResult = data.match(/(.*):(.*):(.*):(.*)/)
      insertdata = {}
      insertdata.time = SendResult[1]
      insertdata.name = SendResult[2]
      insertdata.info = SendResult[3]
      insertdata.result = SendResult[4]
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'SendInfo'})
      break
    case 'receiving info':
      currentData = store.state.ReceiveInfo
      let ReceiveResult = data.match(/(.*):(.*):(.*):(.*)/)
      insertdata = {}
      insertdata.time = ReceiveResult[1]
      insertdata.name = ReceiveResult[2]
      insertdata.info = ReceiveResult[3]
      insertdata.result = ReceiveResult[4]
      if (currentData === null || currentData === undefined) {
        currentData = []
      }
      if (currentData.length >= LIST_COUNT) {
        currentData = currentData.slice(0, LIST_COUNT - 1)
      }
      currentData.unshift(insertdata)
      store.commit('change', {'data': currentData, 'software': 'ReceiveInfo'})
      break
    case 'realTimeViewTest':
      console.log('realTimeViewTest')
      console.log(data)
      switch (data.software) {
        case 'SatIntegratedDataManagement':
          if (data.result) {
            store.state['Color' + data.software] = 'blue'
          } else {
            store.state['Color' + data.software] = 'red'
          }
          break
      }
      store.state.DiagramChange = !store.state.DiagramChange
      break
    case 'alert test':
      console.log('alert test')
      console.log(data)
      store.state.Alert = data
      break
    default:
      break
  }
}
