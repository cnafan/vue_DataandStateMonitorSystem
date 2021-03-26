import Vue from 'vue'
import Router from 'vue-router'
import AtomicClockSignal from '../components/softwares/runtime/AtomicClockSignal'
import BDGNSSSystemClockMonitor from '../components/softwares/runtime/BDGNSSSystemClockMonitor'
import StateMonitorAndWarning from '../components/softwares/runtime/StateMonitorAndWarning'
import SystemManageAndControl from '../components/softwares/runtime/SystemManageAndControl'
import VLBI from '../components/softwares/runtime/VLBI'
// import Main from '../components/page/Main'
import SatIntegratedDataManagement from '../components/softwares/runtime/SatIntegratedDataManagement'
// import Test from '../components/Test'
import Log from '../components/page/Log'
import SearchSystemManageAndControl from '../components/softwares/retrieve/SearchSystemManageAndControl'
import SearchSatIntegratedDataManagement from '../components/softwares/retrieve/SearchSatIntegratedDataManagement'
import SearchVLBI from '../components/softwares/retrieve/SearchVLBI'
import SearchStateMonitorAndWarning from '../components/softwares/retrieve/SearchStateMonitorAndWarning'
import SearchBDGNSSSystemClockMonitor from '../components/softwares/retrieve/SearchBDGNSSSystemClockMonitor'
import SearchAtomicClockSignal from '../components/softwares/retrieve/SearchAtomicClockSignal'
import Monitor from '../components/page/Monitor'
import Setting from '../components/page/Setting'
// import Splansh from '../components/page/Splansh'
import Splansh2 from '../components/page/Splansh2'
// import WorkingStateInfoDirection from '../components/datas/WorkingStateInfoSat/WorkingStateInfoDirection'
import Test from '../components/datas/WorkingStateInfoSat/WorkingStateInfos'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // 数据与状态监控软件
      redirect: '/splansh'
    },
    {
      path: '/splansh',
      name: '总控与管理分系统',
      component: Splansh2
    },
    // {
    //   path: '/splansh',
    //   name: '数据与状态监控软件',
    //   component: Splansh2
    // },
    // {
    //   path: '/index',
    //   name: '首页',
    //   component: Main
    // },
    {
      path: '/AtomicClockSignal',
      name: '原子钟信号监测与自主切换软件',
      component: AtomicClockSignal
    },
    {
      path: '/BDGNSSSystemClockMonitor',
      name: 'GNSS时差数据综合处理软件',
      component: BDGNSSSystemClockMonitor
    },
    {
      path: '/StateMonitorAndWarning',
      name: '状态检测及告警软件',
      component: StateMonitorAndWarning
    },
    {
      path: '/SystemManageAndControl',
      name: '系统管理控制软件',
      component: SystemManageAndControl
    },
    {
      path: '/SatIntegratedDataManagement',
      name: '卫星综合管理软件',
      component: SatIntegratedDataManagement
    },
    {
      path: '/VLBI',
      name: 'VLBI站控软件',
      component: VLBI
    },
    {
      path: '/log',
      name: '日志',
      component: Log
    },
    {
      path: '/SearchAtomicClockSignal',
      name: '查询 - 原子钟信号监测与自主切换软件',
      component: SearchAtomicClockSignal
    },
    {
      path: '/SearchBDGNSSSystemClockMonitor',
      name: '查询 - GNSS时差数据综合处理软件',
      component: SearchBDGNSSSystemClockMonitor
    },
    {
      path: '/SearchStateMonitorAndWarning',
      name: '查询 - 状态检测及告警软件',
      component: SearchStateMonitorAndWarning
    },
    {
      path: '/SearchSystemManageAndControl',
      name: '查询 - 系统管理控制软件',
      component: SearchSystemManageAndControl
    },
    {
      path: '/SearchSatIntegratedDataManagement',
      name: '查询 - 卫星综合管理软件',
      component: SearchSatIntegratedDataManagement
    },
    {
      path: '/SearchVLBI',
      name: '查询 - VLBI站控软件',
      component: SearchVLBI
    },
    {
      path: '/monitor',
      name: '监控中心',
      component: Monitor
    },
    {
      path: '/setting',
      name: '设置',
      component: Setting
    },
    {
      path: '/test',
      name: '测试',
      component: Test
    }
  ]
})
