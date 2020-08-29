import VueRouter from "vue-router";
import SatIntegraterdDataManagement from "../components/softwares/SatIntegraterdDataManagement";
import BDGNSSSystemClockMonitor from "../components/softwares/BDGNSSSystemClockMonitor";
import AtomicClockSignal from "../components/softwares/AtomicClockSignal";
import SystemManageAndControl from "../components/softwares/SystemManageAndControl";
import VLBI from "../components/softwares/VLBI";
import Logger from "../components/Logger";


//配置导出
export default new VueRouter({
  routes: [
    {
      path: '/satintegrated',
      component: SatIntegraterdDataManagement
    },
    {
      path: '/bdgnsssystemclock',
      component: BDGNSSSystemClockMonitor
    },
    {
      path: '/SystemManageAndControl',
      component: SystemManageAndControl
    }, {
      path: '/AtomicClockSignal',
      component: AtomicClockSignal
    }, {
      path: '/VLBI',
      component: VLBI
    },
    {
      path: '/log',
      component: Logger
    }

  ]
})





















