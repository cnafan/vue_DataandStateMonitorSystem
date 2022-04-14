import Vue from 'vue'
import Vuex from 'vuex'
// import {RUNTIME_SCROLL_BOARD_LIST_COUNT} from '@/config/display'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        data: {},
        NavSatSignalQualityAllDirection: [],
        SatComponent: [],
        FrequencyComponent: [],
        SignalComponentAllDirection: [],

        NavSatSignalQuality: [],
        SignalComponent: [],

        BDNavSatSignalQualityAllDirection: [],
        BDSatComponent: [],
        BDFrequencyComponent: [],
        BDSignalComponentAllDirection: [],

        BDNavSatSignalQuality: [],
        BDSignalComponent: [],

        BDSBroadcastClockDifference: [],
        BDSClockCorrection: [],
        BDSClockDifference: [],
        BDSSatTimeClockDifference: [],
        BDTClockDifference: [],
        BroadcastEphemerisWarningInfo: [],
        GnssSystemClockDifference: [],
        GroundStationWorkStateInfo: [],
        NTSCTimeDifferenceData: [],
        NTSCTimeDifferenceModelPara: [],
        TimeFrequencyWorkingState: [],
        VLBIWorkState: [],
        WorkingStateInfo: [],
        WorkingStateInfoBDGNSSSystemClock: [],
        NavSatIrregularMonitor: [],
        workingStateDirection: [],
        workingStateAllDirection: [],
        workingStateInfoSat: [],

        LabelSignalComponent: [],
        LabelBDSBroadcastClockDifference: [
            {
                'item': 'station',
                'label': '站编号'
            },
            {
                'item': 'time',
                'label': '数据时标（UTC）'
            },
            {
                'item': 'svid',
                'label': '卫星号'
            },
            {
                'item': 'b3I',
                'label': 'UTC与卫星广播北斗时间B3I支路的钟差'
            },
            {
                'item': 'b1I',
                'label': 'UTC与卫星广播北斗时间B1I/B3I支路的钟差'
            },
            {
                'item': 'b2A',
                'label': 'UTC与卫星广播北斗时间B1C/B2A支路的钟差'
            }
        ],
        LabelBDSClockCorrection: [
            {
                'item': 'station',
                'label': '站编号'
            },
            {
                'item': 'time',
                'label': '数据时标（UTC）'
            },
            {
                'item': 'svid',
                'label': '卫星号'
            },
            {
                'item': 'SVCLK',
                'label': '该颗卫星的星钟改正数'
            }],
        LabelBDSClockDifference: [
            {
                'item': 'svid',
                'label': '卫星号'
            },
            {
                'item': 'b3I',
                'label': 'UTC(NTSC)与该颗卫星时间B3I支路的钟差'
            },
            {
                'item': 'b1I',
                'label': 'UTC(NTSC)与该颗卫星时间B1I/B3I支路的钟差'
            },
            {
                'item': 'b2A',
                'label': 'UTC(NTSC)与该颗卫星时间B1C/B2A支路的钟差'
            }
        ],
        LabelBDSSatTimeClockDifference: [
            {
                'item': 'station',
                'label': '站编号'
            },
            {
                'item': 'time',
                'label': '数据时标（UTC）'
            },
            {
                'item': 'packetAmount',
                'label': '总数据包数'
            },
            {
                'item': 'packetNo',
                'label': '本包序号'
            }
        ],
        LabelBDTClockDifference: [
            {
                'item': 'station',
                'label': '站编号'
            },
            {
                'item': 'time',
                'label': '数据时标（UTC）'
            },
            {
                'item': 'clockDifference',
                'label': 'UTC(NTSC)与BDT的钟差'
            }
        ],
        LabelBroadcastEphemerisWarningInfo: [],
        LabelGnssSystemClockDifference: [
            {
                'item': 'name',
                'label': '数据类型'
            },
            {
                'item': 'time',
                'label': '数据产生时间'
            },
            {
                'item': 'value',
                'label': '数据值'
            }
        ],
        LabelGroundStationWorkStateInfo: [],
        LabelNavSatIrregularMonitor: [
            {
                'item': 'time',
                'label': '数据时标（UTC）'
            },
            {
                'item': 'svid',
                'label': '卫星号'
            },
            {
                'item': 'station',
                'label': '站编号'
            },
            {
                'item': 'daty',
                'label': '数据分类'
            },
            {
                'item': 'ercd',
                'label': '异常编码'
            },
            {
                'item': 'emln',
                'label': '异常内容长度'
            },
            {
                'item': 'ermg',
                'label': '异常内容'
            }
        ],
        LabelNavSatSignalQuality: [],
        LabelNTSCTimeDifferenceData: [
            {
                'item': 'week',
                'label': '数据时标-周'
            },
            {
                'item': 'sec',
                'label': '数据时标-周内秒'
            },
            {
                'item': 'data',
                'label': '溯源时差数据'
            }
        ],
        LabelNTSCTimeDifferenceModelPara: [
            {
                'item': 'week',
                'label': '数据时标-周'
            },
            {
                'item': 'sec',
                'label': '数据时标-周内秒'
            }
            // ,
            // {
            //   'item': 'runningState',
            //   'label': '单元运行状态'
            // },
            // {
            //   'item': 'constantTerm',
            //   'label': '模型常数项'
            // },
            // {
            //   'item': 'oneTimeTerm',
            //   'label': '模型一次项'
            // },
            // {
            //   'item': 'quadraticTerm',
            //   'label': '模型二次项'
            // }
        ],
        LabelTimeFrequencyWorkingState: [
            {
                'item': 'timeFrequencySystem',
                'label': '时间频率分系统整体'
            },
            {
                'item': 'produceSystem',
                'label': '系统时间频率产生子系统'
            },
            {
                'item': 'timeServiceSystem',
                'label': '转发式共视授时子系统'
            },
            {
                'item': 'performanceEvaluationSystem',
                'label': '北斗授时性能评估子系统'
            },
            {
                'item': 'deviationDetectionSystem',
                'label': 'GNSS系统时间偏差监测子系统'
            },
            {
                'item': 'timeDeliverySystem',
                'label': '高精度远程时间配送子系统'
            }
        ],
        LabelVLBIWorkState: [],
        LabelWorkingStateInfo: [],
        LabelWorkingStateInfoBDGNSSSystemClock: [
            {
                'item': 'time',
                'label': '数据产生时间'
            },
            {
                'item': 'value',
                'label': '数据值'
            }
        ],
        LabelNavSatSignalQualityAllDirection: [],
        LabelFrequencyComponent: [],
        LabelSatComponent: [],
        LabelSignalComponentAllDirection: [],
        LabelCommon: [
            {
                'item': 'time',
                'label': '时标'
            }
        ],
        NetConfig: {
            BDGNSSSystemClockMonitorReceivePort: 0,
            SatIntegratedDataManagementReceivePort: 0,
            AtomicClockSignalReceivePort: 0,
            StateMonitorAndWarningPort: 0,
            SystemManageAndControlReceivePort: 0,
            VLBIReceivePort: 0,
            DataServiceSoftwareSendIp: '',
            DataServiceSoftwareSendPort: 0,
            SystemManageAndControlSendIp: '',
            SystemManageAndControlSendPort: 0,
            MonitorServerIp: '',
            MonitorClientIp: ''
            // 'SystemManageAndControlIp': '0.0.0.0',
            // 'BDGNSSSystemClockMonitorIp': '0.0.0.0',
            // 'SatIntegratedDataManagementIp': '0.0.0.0',
            // 'AtomicClockSignalIp': '0.0.0.0',
            // 'StateMonitorAndWarningIp': '0.0.0.0',
            // 'VLBIIp': '0.0.0.0',
        },
        EditorDialogVisible: false,
        SearchInput: '',
        SearchItem: '',
        MenuIsCollapse: false,
        menuWidth: 0,
        ColorSystemManageAndControl: 'blue',
        ColorAtomicClockSignal: 'blue',
        ColorBDGNSSSystemClockMonitor: 'blue',
        ColorSatIntegratedDataManagement: 'blue',
        ColorStateMonitorAndWarning: 'red',
        ColorDateAndStateMonitor: 'orange',
        // ColorDateAndStateMonitorReceive: 'blue',
        ColorVLBI: 'blue',
        ColorDataService: 'blue',
        SystemInfo: [],
        SendInfo: [],
        ReceiveInfo: [],
        DiagramChange: false,

        NotifyDataSystemManageAndControl: '',
        NotifyDataAtomicClockSignal: '',
        NotifyDataBDGNSSSystemClockMonitor: '',
        NotifyDataSatIntegratedDataManagement: '',
        NotifyDataStateMonitorAndWarning: '',
        NotifyDataVLBI: '',

        NotifyComponentSystemManageAndControl: [],
        NotifyComponentAtomicClockSignal: [],
        NotifyComponentBDGNSSSystemClockMonitor: [],
        NotifyComponentSatIntegratedDataManagement: [],
        NotifyComponentStateMonitorAndWarning: [],
        NotifyComponentVLBI: [],

        runtimeScrollBoard: [
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' '],
            [' ', ' ']
        ]
    },
    mutations: {
        addRuntimeScrollBoard(state, payload) {
            // state.runtimeScrollBoard = [payload.time, payload.name]
            // console.log('before ', state.runtimeScrollBoard)

            // if (state.runtimeScrollBoard.length >= RUNTIME_SCROLL_BOARD_LIST_COUNT + 2) {
            // state.runtimeScrollBoard = state.runtimeScrollBoard.slice(1, RUNTIME_SCROLL_BOARD_LIST_COUNT + 2)
            // }
            // console.log(state.runtimeScrollBoard)
            state.runtimeScrollBoard.shift()
            state.runtimeScrollBoard.push([payload.time + '   ' + payload.name, payload.info])
            // state.runtimeScrollBoard = [payload.time, payload.name]
            // state.runtimeScrollBoard.push({'time': payload.time, 'name': payload.name, 'timestamp': new Date().valueOf()})
            // console.log('after ', state.runtimeScrollBoard)
        },
        resetNotify(state) {
            state.NotifyDataAtomicClockSignal = ''
            state.NotifyDataAtomicClockSignal = ''
            state.NotifyDataBDGNSSSystemClockMonitor = ''
            state.NotifyDataSatIntegratedDataManagement = ''
            state.NotifyDataStateMonitorAndWarning = ''
            state.NotifyDataVLBI = ''
            state.NotifyComponentSystemManageAndControl = []
            state.NotifyComponentAtomicClockSignal = []
            state.NotifyComponentBDGNSSSystemClockMonitor = []
            state.NotifyComponentSatIntegratedDataManagement = []
            state.NotifyComponentStateMonitorAndWarning = []
            state.NotifyComponentVLBI = []
        },
        notifyDataChange(state, payload) {
            state[payload['software']] = payload['notifyData']
        },
        notifyComponentChange(state, payload) {
            state[payload['software']] = payload['notifyComponent']
        },
        initNetConfig(state, payload) {
            state.NetConfig.systemManageAndControlReceivePort = payload.systemManageAndControlReceivePort
            state.NetConfig.vlbiReceivePort = payload.vlbiReceivePort
            state.NetConfig.dataServiceSoftwareSendIp = payload.dataServiceSoftwareSendIp
            state.NetConfig.systemManageAndControlSendPort = payload.systemManageAndControlSendPort
            state.NetConfig.bdgnssSystemClockMonitorReceivePort = payload.bdgnssSystemClockMonitorReceivePort
            state.NetConfig.satIntegratedDataManagementReceivePort = payload.satIntegratedDataManagementReceivePort
            state.NetConfig.dataServiceSoftwareSendPort = payload.dataServiceSoftwareSendPort
            state.NetConfig.atomicClockSignalReceivePort = payload.atomicClockSignalReceivePort
            state.NetConfig.stateMonitorAndWarningPort = payload.stateMonitorAndWarningPort
            state.NetConfig.systemManageAndControlSendIp = payload.systemManageAndControlSendIp
            state.NetConfig.monitorServerIp = payload.monitorServerIp
            state.NetConfig.monitorClientIp = payload.monitorClientIp
        },
        initData(state, data) {
            state.VLBIWorkState = data.VLBIWorkState
            state.GroundStationWorkStateInfo = data.GroundStationWorkStateInfo
            state.GnssSystemClockDifference = data.GnssSystemClockDifference
            state.WorkingStateInfoBDGNSSSystemClock = data.WorkingStateInfoBDGNSSSystemClock
            state.NTSCTimeDifferenceData = data.NTSCTimeDifferenceData
            state.NTSCTimeDifferenceModelPara = data.NTSCTimeDifferenceModelPara
            state.TimeFrequencyWorkingState = data.TimeFrequencyWorkingState
            state.BDSSatTimeClockDifference = data.BDSSatTimeClockDifference
            state.BDSClockDifference = data.BDSClockDifference
            state.BDSClockCorrection = data.BDSClockCorrection
            state.BDSBroadcastClockDifference = data.BDSBroadcastClockDifference
            state.BDTClockDifference = data.BDTClockDifference
            state.NavSatIrregularMonitor = data.NavSatIrregularMonitor
            state.WorkingStateInfo = data.WorkingStateInfo

            state.NavSatSignalQuality = data.NavSatSignalQuality
            state.SignalComponent = data.SignalComponent

            state.BDNavSatSignalQuality = data.BDNavSatSignalQuality
            state.BDSignalComponent = data.BDSignalComponent

            state.NavSatSignalQualityAllDirection = data.NavSatSignalQualityAllDirection
            state.SatComponent = data.SatComponent
            state.FrequencyComponent = data.FrequencyComponent
            state.SignalComponentAllDirection = data.SignalComponentAllDirection

            state.BDNavSatSignalQualityAllDirection = data.BDNavSatSignalQualityAllDirection
            state.BDSatComponent = data.BDSatComponent
            state.BDFrequencyComponent = data.BDFrequencyComponent
            state.BDSignalComponentAllDirection = data.BDSignalComponentAllDirection
        },
        modify(state, data) {
            state.data = data
        },
        modifyColor(state, data) {
            // console.log(state[data.name])
            // console.log(color)
            state[data.name] = Object.assign({}, state[data.name], data.color)
        },
        reverse(state) {
            state.DiagramChange = !state.DiagramChange
        },
        addNotify(state, notify) {
            state.Notify.push(notify)
        },
        changeAlert(state, alert) {
            state.Alert = alert
        },
        change(state, payload) {
            switch (payload['software']) {
                case 'WorkingStateOrientationAntenna':
                    state.workingStateInfoSat = [payload['data'].workingStateInfoSat]
                    state.workingStateDirection = payload['data'].workingStateDirection
                    state.workingStateAllDirection = payload['data'].workingStateAllDirection
                    // console.log(JSON.parse(payload['data']))
                    // console.log(JSON.parse(JSON.stringify(payload['data'])))
                    break
                case 'NavSatSignalQualityAllDirection':
                    state.NavSatSignalQualityAllDirection = payload['data']
                    break
                case 'SatComponent':
                    state.SatComponent = payload['data']
                    break
                case 'FrequencyComponent':
                    state.FrequencyComponent = payload['data']
                    break
                case 'SignalComponentAllDirection':
                    state.SignalComponentAllDirection = payload['data']
                    break
                case 'NavSatSignalQuality':
                    state.NavSatSignalQuality = Object.assign([], state.NavSatSignalQuality, payload['data'])
                    break
                case 'SignalComponent':
                    state.SignalComponent = payload['data']
                    break
                case 'BDNavSatSignalQualityAllDirection':
                    state.BDNavSatSignalQualityAllDirection = payload['data']
                    break
                case 'BDSatComponent':
                    state.BDSatComponent = payload['data']
                    break
                case 'BDFrequencyComponent':
                    state.BDFrequencyComponent = payload['data']
                    break
                case 'BDSignalComponentAllDirection':
                    state.BDSignalComponentAllDirection = payload['data']
                    break
                case 'BDNavSatSignalQuality':
                    state.BDNavSatSignalQuality = payload['data']
                    break
                case 'BDSignalComponent':
                    state.BDSignalComponent = payload['data']
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
                case 'SystemInfo':
                    state.SystemInfo = payload['data']
                    break
                case 'SendInfo':
                    state.SendInfo = payload['data']
                    break
                case 'ReceiveInfo':
                    state.ReceiveInfo = payload['data']
                    break
                case 'NetConfig':
                    state.NetConfig = Object.assign({}, state.NetConfig, payload['data'])
                    break
                case 'SearchInput':
                    state.SearchInput = payload['data']
                    break
                case 'SearchItem':
                    state.SearchItem = payload['data']
                    break
                case 'MenuIsCollapse':
                    state.MenuIsCollapse = payload['data']
                    break
                case 'ColorSystemManageAndControl':
                    state.ColorSystemManageAndControl = payload['data']
                    break
                case 'ColorAtomicClockSignal':
                    state.ColorAtomicClockSignal = payload['data']
                    break
                case 'ColorBDGNSSSystemClockMonitor':
                    state.ColorBDGNSSSystemClockMonitor = payload['data']
                    break
                case 'ColorSatIntegratedDataManagement':
                    state.ColorSatIntegratedDataManagement = payload['data']
                    break
                case 'ColorStateMonitorAndWarning':
                    state.ColorStateMonitorAndWarning = payload['data']
                    break
                case 'ColorDateAndStateMonitor':
                    state.ColorDateAndStateMonitor = payload['data']
                    break
                // case 'ColorDateAndStateMonitorReceive':
                //   state.ColorDateAndStateMonitorReceive = payload['data']
                //   break
                case 'ColorVLBI':
                    state.ColorVLBI = payload['data']
                    break
                case 'ColorDataService':
                    state.ColorDataService = payload['data']
                    break
                case 'menuWidth':
                    state.menuWidth = payload['data'] - 30
                    break
                default:
                    break
            }
        },
        setDialog(state, data) {
            state.EditorDialogVisible = data
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
