import Vue from 'vue'
import Router from 'vue-router'
import AtomicClockSignal from '../components/softwares/runtime/AtomicClockSignal'
import BDGNSSSystemClockMonitor from '../components/softwares/runtime/BDGNSSSystemClockMonitor'
import StateMonitorAndWarning from '../components/softwares/runtime/StateMonitorAndWarning'
import SystemManageAndControl from '../components/softwares/runtime/SystemManageAndControl'
import VLBI from '../components/softwares/runtime/VLBI'
import Main from '../components/page/Main'
import SatIntegratedDataManagement from '../components/softwares/runtime/SatIntegratedDataManagement'
import Splansh from '../components/page/Splansh'
import Test from '../components/Test'
import Log from '../components/page/Log'
import SearchSystemManageAndControl from '../components/softwares/retrieve/SearchSystemManageAndControl'
import SearchSatIntegratedDataManagement from '../components/softwares/retrieve/SearchSatIntegratedDataManagement'
import SearchVLBI from '../components/softwares/retrieve/SearchVLBI'
import SearchStateMonitorAndWarning from '../components/softwares/retrieve/SearchStateMonitorAndWarning'
import SearchBDGNSSSystemClockMonitor from '../components/softwares/retrieve/SearchBDGNSSSystemClockMonitor'
import SearchAtomicClockSignal from '../components/softwares/retrieve/SearchAtomicClockSignal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/splansh'
    },
    {
      path: '/splansh',
      component: Splansh
    },
    {
      path: '/index',
      component: Main
    },
    {
      path: '/AtomicClockSignal',
      component: AtomicClockSignal
    },
    {
      path: '/BDGNSSSystemClockMonitor',
      component: BDGNSSSystemClockMonitor
    },
    {
      path: '/StateMonitorAndWarning',
      component: StateMonitorAndWarning
    },
    {
      path: '/SystemManageAndControl',
      component: SystemManageAndControl
    },
    {
      path: '/SatIntegratedDataManagement',
      component: SatIntegratedDataManagement
    },
    {
      path: '/VLBI',
      component: VLBI
    },
    {
      path: '/log',
      component: Log
    },
    {
      path: '/SearchAtomicClockSignal',
      component: SearchAtomicClockSignal
    },
    {
      path: '/SearchBDGNSSSystemClockMonitor',
      component: SearchBDGNSSSystemClockMonitor
    },
    {
      path: '/SearchStateMonitorAndWarning',
      component: SearchStateMonitorAndWarning
    },
    {
      path: '/SearchSystemManageAndControl',
      component: SearchSystemManageAndControl
    },
    {
      path: '/SearchSatIntegratedDataManagement',
      component: SearchSatIntegratedDataManagement
    },
    {
      path: '/SearchVLBI',
      component: SearchVLBI
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
