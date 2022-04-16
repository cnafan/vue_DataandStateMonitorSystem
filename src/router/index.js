import Vue from 'vue'
import Router from 'vue-router'
import SplitSystem from "@/components/charts/mid/SplitSystem";
const AtomicClockSignal = () => import('../components/softwares/runtime/AtomicClockSignal')
const BDGNSSSystemClockMonitor = () => import('../components/softwares/runtime/BDGNSSSystemClockMonitor')
const SystemManageAndControl = () => import('../components/softwares/runtime/SystemManageAndControl')
const VLBI = () => import('../components/softwares/runtime/VLBI')
const SatIntegratedDataManagement = () => import('../components/softwares/runtime/SatIntegratedDataManagement')
const Log = () => import('../components/page/Log')
const SearchSystemManageAndControl = () => import('../components/softwares/retrieve/SearchSystemManageAndControl')
const SearchSatIntegratedDataManagement = () => import('../components/softwares/retrieve/SearchSatIntegratedDataManagement')
const SearchVLBI = () => import('../components/softwares/retrieve/SearchVLBI')
const SearchStateMonitorAndWarning = () => import('../components/softwares/retrieve/SearchStateMonitorAndWarning')
const SearchBDGNSSSystemClockMonitor = () => import('../components/softwares/retrieve/SearchBDGNSSSystemClockMonitor')
const SearchAtomicClockSignal = () => import('../components/softwares/retrieve/SearchAtomicClockSignal')
// const Monitor = () => import('../components/page/Monitor')
const Setting = () => import('../components/page/Setting')
const Splash2 = () => import('../components/page/SplashMain')
// const Test = () => import('../components/datas/WorkingStateInfoSat/WorkingStateInfos')
const Login = () => import("@/components/page/Login")

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // 数据与状态监控软件
      redirect: '/splash',
      meta: {keepAlive: false}
    },
    {
      path: '/splash',
      name: '总控与管理分系统',
      component: Splash2,
      meta: {keepAlive: false}
    },
    {
      path: '/AtomicClockSignal',
      name: '原子钟信号监测与自主切换软件',
      component: AtomicClockSignal,
      meta: {keepAlive: true}
    },
    {
      path: '/BDGNSSSystemClockMonitor',
      name: 'GNSS时差数据综合处理软件',
      component: BDGNSSSystemClockMonitor,
      meta: {keepAlive: true}
    },
    // {
    //   path: '/StateMonitorAndWarning',
    //   name: '状态检测及告警软件',
    //   component: StateMonitorAndWarning
    // },
    {
      path: '/SystemManageAndControl',
      name: '系统管理控制软件',
      component: SystemManageAndControl,
      meta: {keepAlive: true}
    },
    {
      path: '/SatIntegratedDataManagement',
      name: '卫星综合管理软件',
      component: SatIntegratedDataManagement,
      meta: {keepAlive: true}
    },
    {
      path: '/VLBI',
      name: 'VLBI站控软件',
      component: VLBI,
      meta: {keepAlive: true}
    },
    {
      path: '/log',
      name: '日志',
      component: Log,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchAtomicClockSignal',
      name: '查询 - 原子钟信号监测与自主切换软件',
      component: SearchAtomicClockSignal,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchBDGNSSSystemClockMonitor',
      name: '查询 - GNSS时差数据综合处理软件',
      component: SearchBDGNSSSystemClockMonitor,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchStateMonitorAndWarning',
      name: '查询 - 状态检测及告警软件',
      component: SearchStateMonitorAndWarning,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchSystemManageAndControl',
      name: '查询 - 系统管理控制软件',
      component: SearchSystemManageAndControl,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchSatIntegratedDataManagement',
      name: '查询 - 卫星综合管理软件',
      component: SearchSatIntegratedDataManagement,
      meta: {keepAlive: true}
    },
    {
      path: '/SearchVLBI',
      name: '查询 - VLBI站控软件',
      component: SearchVLBI,
      meta: {keepAlive: true}
    },
    {
      path: '/setting',
      name: '设置',
      component: Setting,
      meta: {keepAlive: true}
    },
    {
      path:'/login',
      name:'登录',
      component:Login,
      meta: {keepAlive: true}
    },
    {
      path:'/test',
      name:'test',
      component:SplitSystem,
      meta: {keepAlive: true}
    }
  ]
})
