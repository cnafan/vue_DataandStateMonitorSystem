import Vue from 'vue'
import Router from 'vue-router'
import AtomicClockSignal from '../components/softwares/AtomicClockSignal'
import BDGNSSSystemClockMonitor from '../components/softwares/BDGNSSSystemClockMonitor'
import StateMonitorAndWarning from '../components/softwares/StateMonitorAndWarning'
import SystemManageAndControl from '../components/softwares/SystemManageAndControl'
import VLBI from '../components/softwares/VLBI'
import Main from '../components/Main'
import SatIntegratedDataManagement from '../components/softwares/SatIntegratedDataManagement'
import Splansh from '../components/Splansh'
import Test from '../components/Test'
import Log from '../components/Log'

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
      path: '/vlbi',
      component: VLBI
    },
    {
      path: '/log',
      component: Log
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
