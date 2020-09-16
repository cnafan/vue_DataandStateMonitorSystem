import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data: {},
    SignalComponent: [],
    BDSBroadcastClockDifference: [],
    BDSClockCorrection: [],
    BDSClockDifference: [],
    BDSSatTimeClockDifference: [],
    BDTClockDifference: [],
    BroadcastEphemerisWarningInfo: [],
    GnssSystemClockDifference: [],
    GroundStationWorkStateInfo: [],
    NavSatSignalQuality: [],
    NTSCTimeDifferenceData: [],
    NTSCTimeDifferenceModelPara: [],
    TimeFrequencyWorkingState: [],
    VLBIWorkState: [],
    WorkingStateInfo: [],
    WorkingStateInfoBDGNSSSystemClock: [],
    NavSatIrregularMonitor: [],
    NavSatSignalQualityAllDirection: [],
    FrequencyComponent: [],
    SatComponent: [],
    SignalComponentAllDirection: []
  },
  mutations: {
    modify (state, data) {
      state.data = data
    },
    change (state, payload) {
      switch (payload['software']) {
        case 'NavSatSignalQuality':
          state.NavSatSignalQuality = payload['data']
          break
        case 'SignalComponent':
          state.SignalComponent = payload['data']
          break
        case 'WorkingStateInfo':
          state.WorkingStateInfo = payload['data']
          break
        case 'VLBIWorkState':
          state.VLBIWorkState = payload['data']
          break
        case 'GnssSystemClockDifference':
          state.GnssSystemClockDifference = payload['data']
          break
        case 'BDSBroadcastClockDifference':
          state.BDSBroadcastClockDifference = payload['data']
          break
        case 'BDSClockCorrection':
          state.BDSClockCorrection = payload['data']
          break
        case 'BDSClockDifference':
          state.BDSClockDifference = payload['data']
          break
        case 'BDSSatTimeClockDifference':
          state.BDSSatTimeClockDifference = payload['data']
          break
        case 'BDTClockDifference':
          state.BDTClockDifference = payload['data']
          break
        case 'BroadcastEphemerisWarningInfo':
          state.BroadcastEphemerisWarningInfo = payload['data']
          break
        case 'GroundStationWorkStateInfo':
          state.GroundStationWorkStateInfo = payload['data']
          break
        case 'NTSCTimeDifferenceData':
          state.NTSCTimeDifferenceData = payload['data']
          break
        case 'NTSCTimeDifferenceModelPara':
          state.NTSCTimeDifferenceModelPara = payload['data']
          break
        case 'TimeFrequencyWorkingState':
          state.TimeFrequencyWorkingState = payload['data']
          break
        case 'WorkingStateInfoBDGNSSSystemClock':
          state.WorkingStateInfoBDGNSSSystemClock = payload['data']
          break
        case 'NavSatIrregularMonitor':
          state.NavSatIrregularMonitor = payload['data']
          break
        default:
          break
      }
    }
  },
  getters: {
    getData: state => {
      // eslint-disable-next-line no-undef
      return state.data
    }
  }
})
export default store// 用export default 封装代码，让外部可以引用`
