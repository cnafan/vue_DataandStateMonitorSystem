<template>
  <!--  text-color="#303133"-->
  <!--  active-text-color="#E6A23C"-->

  <!--  深色-->
  <!--  background-color="#545c64"-->
  <!--  text-color="#fff"-->
  <!--  active-text-color="#ffd04b"-->

  <el-menu
    id="navMenu"
    class="sidebar-el-menu"
    :default-active="$route.path"
    :collapse="menuIsCollapse"
    text-color="#303133"
    active-text-color="#fafafa"
    router
  >
    <el-menu-item index="/splansh">
      <i class="icon-home"></i>
      <!--            el-icon-s-home-->
      <span slot="title">处理中心</span>
    </el-menu-item>
    <el-submenu v-for="item in items" :index="item.index" :key="item.index">
      <template slot="title">
        <i :class="item.class"></i>
        <span slot="title">{{ item.title }}</span>
      </template>
      <el-menu-item v-for="subItem in item.subs" style="padding-left: 45px" :index="subItem.index"
                    :key="subItem.index">
        {{ subItem.title }}
      </el-menu-item>
    </el-submenu>
    <el-submenu v-for="item in SearchItems" :index="item.index" :key="item.index">
      <template slot="title">
        <i :class="item.class"></i>
        <span slot="title">{{ item.title }}</span>
      </template>
      <el-submenu v-for="eachItem in item.subs" :index="eachItem.index" :key="eachItem.index">
        <template slot="title">
          <i :class="eachItem.class"></i>
          <span slot="title">{{ eachItem.title }}</span>
        </template>
        <el-menu-item v-for="subItem in eachItem.subs" style="padding-left: 64px" :index="subItem.index"
                      :key="subItem.index">
          {{ subItem.title }}
        </el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="/log">
      <i class="icon-info-circled"></i>
      <!--            el-icon-info-->
      <span slot="title">运行状态</span>
    </el-menu-item>
    <el-menu-item index="/monitor">
      <i class="icon-chart-bar"></i>
      <!--            el-icon-info-->
      <span slot="title">监控中心</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: {
    'menuIsCollapse': {
      type: Boolean
    }
  },
  name: 'Menu',
  data () {
    return {
      // isCollapse: false,
      items: [
        {
          index: '2',
          title: '空间信号质量监测',
          class: 'icon-rss', // el-icon-s-promotion
          subs: [{
            index: '/SystemManageAndControl',
            title: '系统管理控制软件'
          }]
        },
        {
          index: '3',
          title: '北斗/GNSS系统时间监测',
          class: 'icon-clock', // el-icon-s-marketing
          subs: [{
            index: '/BDGNSSSystemClockMonitor',
            title: 'GNSS时差数据综合处理软件'
          }]
        },
        {
          index: '4',
          title: '中科院在轨卫星地面数据',
          class: 'icon-globe-1', // el-icon-s-data
          subs: [{
            index: '/SatIntegratedDataManagement',
            title: '卫星综合管理软件'
          }]
        },
        {
          index: '5',
          title: '高精度转发式卫星授时',
          class: 'icon-phone',
          // el-icon-phone
          subs: [{
            index: '/AtomicClockSignal',
            title: '原子钟信号监测与自主切换软件'
          }, {
            index: '/StateMonitorAndWarning',
            title: '状态监测及告警软件'
          }]
        },
        {
          index: '6',
          title: 'VLBI观测导航卫星',
          class: 'icon-location', // el-icon-s-promotion
          subs: [{
            index: '/VLBI',
            title: 'VLBI站控软件'
          }]
        }
      ],
      SearchItems: [
        {
          index: '7',
          title: '数据检索',
          class: 'icon-database',
          subs: [
            {
              index: '7-1',
              title: '空间信号质量监测',
              class: 'icon-rss', // el-icon-s-promotion
              subs: [{
                index: '/SearchSystemManageAndControl',
                title: '系统管理控制软件'
              }]
            },
            {
              index: '7-2',
              title: '北斗/GNSS系统时间监测',
              class: 'icon-clock', // el-icon-s-marketing
              subs: [{
                index: '/SearchBDGNSSSystemClockMonitor',
                title: 'GNSS时差数据综合处理软件'
              }]
            },
            {
              index: '7-3',
              title: '中科院在轨卫星地面数据',
              class: 'icon-globe-1', // el-icon-s-data
              subs: [{
                index: '/SearchSatIntegratedDataManagement',
                title: '卫星综合管理软件'
              }]
            },
            {
              index: '7-4',
              title: '高精度转发式卫星授时',
              class: 'icon-phone',
              // el-icon-phone
              subs: [{
                index: '/SearchAtomicClockSignal',
                title: '原子钟信号监测与自主切换软件'
              }, {
                index: '/SearchStateMonitorAndWarning',
                title: '状态监测及告警软件'
              }]
            },
            {
              index: '7-5',
              title: 'VLBI观测导航卫星',
              class: 'icon-location', // el-icon-s-promotion
              subs: [{
                index: '/SearchVLBI',
                title: 'VLBI站控软件'
              }]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    // console.log('initmenu:', document.getElementById('navMenu').offsetWidth)
    this.$store.commit('change', {software: 'menuWidth', 'data': document.getElementById('navMenu').offsetWidth})
  }
  // methods: {
  //   navModify () {
  //     this.isCollapse = !this.isCollapse
  //   },
  //   foldStatus () {
  //     if (this.isCollapse === true) {
  //       return 'el-icon-right'
  //     } else {
  //       return 'el-icon-back'
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>
