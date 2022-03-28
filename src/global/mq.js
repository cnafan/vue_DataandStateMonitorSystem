import Stomp from 'stompjs'
import store from '../vuex/store'
import {GNSS_SYSTEM_CLOCK_DIFFERENCE_LIST_COUNT, LIST_COUNT} from '/src/config/display'
import {EXCHANGE_PUSH, HEADERS} from '/src/config/mqtt'

let client = Stomp.client(process.env.VUE_APP_MQTT_SERVICE)
// console.log('process.env.VUE_APP_MQTT_SERVICE',process.env.VUE_APP_MQTT_SERVICE)
// eslint-disable-next-line no-unused-vars
client.debug = function (str) {
    // append the debug log to a #debug div somewhere in the page using JQuery:
    // console.log(str)
}

export default function connect() {
    client.connect(HEADERS, onConnected, onFailed)
}

function onConnected() {
    let queueName = ['BDSBroadcastClockDifference', 'BDSClockCorrection', 'BDSClockDifference', 'BDSSatTimeClockDifference', 'BDTClockDifference', 'BroadcastEphemerisWarningInfo', 'GnssSystemClockDifference', 'GroundStationWorkStateInfo', 'NavSatSignalQuality', 'SignalComponent', 'BDNavSatSignalQuality', 'BDSignalComponent', 'NTSCTimeDifferenceData', 'NTSCTimeDifferenceModelPara', 'TimeFrequencyWorkingState', 'VLBIWorkState', 'WorkingStateInfo', 'WorkingStateInfoBDGNSSSystemClock', 'NavSatIrregularMonitor', 'BDNavAll', 'NavAll', 'WorkingStateOrientationAntenna', 'sending info', 'receiving info', 'connect info', 'alert notify'
        // 'realTimeView',
    ]
    for (let i = 0; i < queueName.length; i++) {
        let header = {
            'ack': 'client'
            // 'durable': false
            // 'auto-delete': false
        }
        let exchange = EXCHANGE_PUSH + queueName[i]
        client.subscribe(exchange, responseCallback, header)
    }
}

function responseCallback(frame) {
    frame.ack()
    // client.send('/exchange/exchange_pushmsg/recivemsg', {'content-type': 'text/plain'}, frame.body)
    queuePush(getSoftware(frame.headers.destination), JSON.parse(frame.body))
}

function onFailed(frame) {
    console.log('Failed: ' + frame)
}

function getSoftware(destination) {
    return destination.substring(21)
}

// function getSoftwareChineseName (name) {
//   switch (name) {
//     case 'NavSatSignalQuality':
//       return '定向天线导航卫星信号质量'
//     case 'BDNavSatSignalQuality':
//       return '定向天线BDS-3空间信号质量'
//     case 'BDNavAll':
//       return '全向天线BDS-3空间信号质量'
//     case 'NavAll':
//       return '全向天线导航卫星信号质量'
//     case 'WorkingStateInfo':
//       return '空间信号质量监测系统工作状态'
//     case 'VLBIWorkState':
//       return 'VLBI工作状态'
//     case 'BDSClockCorrection':
//       return 'BDS3每颗卫星的星钟改正数'
//     case 'GroundStationWorkStateInfo':
//       return '地面站工作状态信息'
//     case 'BDSBroadcastClockDifference':
//       return 'UTC与BDS3每颗卫星广播钟差'
//     case 'BDSSatTimeClockDifference':
//       return 'UTC与BDS3每颗卫星时间的钟差'
//     case 'GnssSystemClockDifference':
//       return 'GNSS系统时差数据'
//     case 'BDTClockDifference':
//       return 'UTC与BDT的钟差'
//     case 'BroadcastEphemerisWarningInfo':
//       return ''
//     case 'NTSCTimeDifferenceData':
//       return 'NTSC溯源时差数据'
//     case 'NTSCTimeDifferenceModelPara':
//       return 'NTSC溯源时差模型参数'
//     case 'TimeFrequencyWorkingState':
//       return '时频工作状态'
//     case 'WorkingStateInfoBDGNSSSystemClock':
//       return 'GNSS系统工作状态'
//     case 'NavSatIrregularMonitor':
//       return '导航卫星异常监测结果'
//     default:
//       return name
//   }
// }
//

function queuePush(software, data) {
    let insertdata
    let currentData
    switch (software) {
        // 只显示一条
        case 'NavSatSignalQuality':
        case 'SignalComponent':
        case 'BDNavSatSignalQuality':
        case 'BDSignalComponent':
        case 'WorkingStateInfo':
        case 'VLBIWorkState':
        case 'BDSClockCorrection':
        case 'GroundStationWorkStateInfo':
        case 'BDSBroadcastClockDifference':
        case 'BDSClockDifference':
        case 'WorkingStateOrientationAntenna':
        case 'BDSSatTimeClockDifference':
            store.commit('change', {'data': data, 'software': software})
            break
        case 'BDNavAll':
            store.commit('change', {
                'data': data['BDNavSatSignalQualityAllDirection'], 'software': 'BDNavSatSignalQualityAllDirection'
            })
            store.commit('change', {'data': data['BDSatComponent'], 'software': 'BDSatComponent'})
            store.commit('change', {'data': data['BDFrequencyComponent'], 'software': 'BDFrequencyComponent'})
            store.commit('change', {
                'data': data['BDSignalComponentAllDirection'], 'software': 'BDSignalComponentAllDirection'
            })
            break
        case 'NavAll':
            store.commit('change', {
                'data': data['NavSatSignalQualityAllDirection'], 'software': 'NavSatSignalQualityAllDirection'
            })
            store.commit('change', {'data': data['SatComponent'], 'software': 'SatComponent'})
            store.commit('change', {'data': data['FrequencyComponent'], 'software': 'FrequencyComponent'})
            store.commit('change', {
                'data': data['SignalComponentAllDirection'], 'software': 'SignalComponentAllDirection'
            })
            break
        // 数量限制
        case 'GnssSystemClockDifference':
            currentData = store.state.GnssSystemClockDifference
            insertdata = {}
            insertdata.receiveTime = data['receiveTime']
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
            // store.commit('addRuntimeScrollBoard', {'name': getSoftwareChineseName(software), 'time': getCurrentTime()})
            break
        case 'BDTClockDifference':
            currentData = store.state.BDTClockDifference
            insertdata = {}
            insertdata.receiveTime = data['receiveTime']
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
            store.commit('change', {'data': currentData, 'software': software})
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
        case 'NTSCTimeDifferenceData':
            currentData = store.state.NTSCTimeDifferenceData
            insertdata = {}
            insertdata.receiveTime = data['receiveTime']
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
            insertdata.receiveTime = data['receiveTime']
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
            insertdata.receiveTime = data['receiveTime']
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
            insertdata.receiveTime = data['receiveTime']
            insertdata.measTime = data['measTime']
            insertdata.measValue = data['measValue']
            if (currentData === null || currentData === undefined) {
                currentData = []
            }
            if (currentData.length >= GNSS_SYSTEM_CLOCK_DIFFERENCE_LIST_COUNT) {
                currentData = currentData.slice(0, GNSS_SYSTEM_CLOCK_DIFFERENCE_LIST_COUNT - 1)
            }
            currentData.unshift(insertdata)
            store.commit('change', {'data': currentData, 'software': 'WorkingStateInfoBDGNSSSystemClock'})
            // store.commit('addRuntimeScrollBoard', {'name': getSoftwareChineseName(software), 'time': getCurrentTime()})
            break
        case 'NavSatIrregularMonitor':
            currentData = store.state.NavSatIrregularMonitor
            insertdata = {}
            insertdata.receiveTime = data['receiveTime']
            insertdata.time = data['time']
            insertdata.said = data['said']
            insertdata.stid = data['stid']
            insertdata.daty = data['daty']
            // let ercd = new Uint8Array(6)
            // ercd.toString()
            insertdata.ercd = data['ercd']
            insertdata.emln = data['emln']
            insertdata.ermg = data['ermg']
            if (currentData === null || currentData === undefined) {
                currentData = []
            }
            if (currentData.length >= LIST_COUNT) {
                currentData.pop()
                // currentData = currentData.slice(0, LIST_COUNT - 1)
            }
            currentData.unshift(insertdata)
            store.commit('change', {'data': currentData, 'software': 'NavSatIrregularMonitor'})
            break
        case 'connect info':
            currentData = store.state.SystemInfo
            insertdata = {}
            insertdata.time = data.timestamp
            insertdata.name = data.software
            insertdata.info = data.dataType
            insertdata.result = data.info
            // if (currentData === null || currentData === undefined) {
            //     currentData = []
            // }
            if (currentData.length >= LIST_COUNT) {
                currentData.pop()
            }
            currentData.unshift(insertdata)
            store.commit('change', {'data': currentData, 'software': 'SystemInfo'})
            break
        case 'sending info': {
            currentData = store.state.SendInfo
            let sendResult = data.match(/(.*):(.*):(.*):(.*)/)
            insertdata = {}
            if (sendResult !== null && sendResult !== undefined && sendResult.length === 5) {
                insertdata.time = sendResult[1]
                insertdata.name = sendResult[2]
                insertdata.info = sendResult[3]
                insertdata.result = sendResult[4]
                if (currentData === null || currentData === undefined) {
                    currentData = []
                }
                if (currentData.length >= LIST_COUNT) {
                    currentData = currentData.slice(0, LIST_COUNT - 1)
                }
                currentData.unshift(insertdata)
                store.commit('change', {'data': currentData, 'software': 'SendInfo'})
                store.commit('addRuntimeScrollBoard', {
                    'time': sendResult[1], 'name': sendResult[2], 'info': sendResult[3], 'result': sendResult[4]
                })
            }
            break
        }
        case 'receiving info': {
            currentData = store.state.ReceiveInfo
            let receiveResult = data.match(/(.*):(.*):(.*):(.*)/)
            insertdata = {}
            if (receiveResult !== null && receiveResult !== undefined && receiveResult.length === 5) {
                insertdata.time = receiveResult[1]
                insertdata.name = receiveResult[2]
                insertdata.info = receiveResult[3]
                insertdata.result = receiveResult[4]
                if (currentData === null || currentData === undefined) {
                    currentData = []
                }
                if (currentData.length >= LIST_COUNT) {
                    currentData = currentData.slice(0, LIST_COUNT - 1)
                }
                currentData.unshift(insertdata)
                store.commit('change', {'data': currentData, 'software': 'ReceiveInfo'})
                store.commit('addRuntimeScrollBoard', {
                    'time': receiveResult[1],
                    'name': receiveResult[2],
                    'info': receiveResult[3],
                    'result': receiveResult[4]
                })
            }
            break
        }
        case 'realTimeView':
            if (data.result) {
                if (store.state['Color' + data.software] === 'red') {
                    store.state['Color' + data.software] = 'blue'
                    store.state.DiagramChange = !store.state.DiagramChange
                }
            } else {
                if (store.state['Color' + data.software] === 'blue') {
                    store.state['Color' + data.software] = 'red'
                    store.state.DiagramChange = !store.state.DiagramChange
                }
            }
            break
        case 'alert notify':
            switch (data.software) {
                case '卫星综合数据管理软件':
                    store.commit('notifyDataChange', {
                        'software': 'NotifyDataSatIntegratedDataManagement', 'notifyData': data
                    })
                    break
                case '原子钟信号监测与自主切换控制软件':
                    store.commit('notifyDataChange', {
                        'software': 'NotifyDataAtomicClockSignal', 'notifyData': data
                    })
                    break
                case 'GNSS时差数据综合处理软件':
                    store.commit('notifyDataChange', {
                        'software': 'NotifyDataBDGNSSSystemClockMonitor', 'notifyData': data
                    })
                    break
                case '状态监测与告警软件':
                    store.commit('notifyDataChange', {
                        'software': 'NotifyDataStateMonitorAndWarning', 'notifyData': data
                    })
                    break
                case 'VLBI站控软件':
                    store.commit('notifyDataChange', {
                        'software': 'NotifyDataVLBI', 'notifyData': data
                    })
                    break
                default:
                    break
            }
            break
        default:
            break
    }
}
