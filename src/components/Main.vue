<template>
  <div id="main-app">
    <el-header id="header">
      <el-row id="el_row_header">
        <el-col :span="1">
          <i :class="foldStatus()" style="font-size: 24px;" @click="navModify"></i>
        </el-col>
        <el-col :span="21">
          <div>{{ headerName }}</div>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-edit" style="font-size: 25px;" @click="editorClick"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-setting" style="font-size: 25px;" @click="settingOpen"></i>
        </el-col>
      </el-row>
      <el-row>
        <el-divider id="header-divider"></el-divider>
      </el-row>
    </el-header>
    <el-container id="el-container-header">
      <!--      <el-aside style="overflow: hidden">-->
      <el-scrollbar id="el-scrollbar-menu">

        <el-menu
          class="sidebar-el-menu"
          :default-active="$route.path"
          :collapse="isCollapse"
          text-color="#303133"
          active-text-color="#E6A23C"
          router
        >
          <el-menu-item index="/splansh">
            <i class="el-icon-s-home"></i>
            <span slot="title">处理中心</span>
          </el-menu-item>
          <el-submenu v-for="item in items" :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.class"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="subItem in item.subs" style="padding-left: 54px" :index="subItem.index"
                          :key="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/log">
            <i class="el-icon-info"></i>
            <span slot="title">日志中心</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
      <!--      </el-aside>-->
      <el-main id="el-main">
        <el-row id="el-row-main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-row>
        <el-backtop></el-backtop>
      </el-main>
    </el-container>
    <el-dialog :title="EditorDialogTitle" :visible.sync="EditorDialogVisible">
      <el-form :model="settingForm" label-position="top">
        <el-form-item :key="item.name" v-for="item in settingFormItems" :label="item.name"
                      :label-width="settingFormLabelWidth">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="item.ip" autocomplete="off" placeholder="ip"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input-number v-model="item.port" controls-position="right" placeholder="port" :min="1"
                               :max="9999"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="EditorDialogVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import storageUtils from '../utils/storageUtils'

export default {
  name: 'Main',
  data () {
    return {
      headerName: '数据与状态监控软件',
      openeds: ['2', '3', '4', '5', '6'],
      isCollapse: false,
      EditorDialogTitle: '修改配置',
      EditorDialogVisible: false,
      settingForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      settingFormLabelWidth: '120px',
      settingFormItems: storageUtils.readNetConfig(),
      items: [
        {
          index: '2',
          title: '空间信号质量监测',
          class: 'el-icon-s-promotion',
          subs: [{
            index: '/SystemManageAndControl',
            title: '系统管理控制软件'
          }]
        },
        {
          index: '3',
          title: '北斗/GNSS系统时间监测',
          class: 'el-icon-s-marketing',
          subs: [{
            index: '/BDGNSSSystemClockMonitor',
            title: 'GNSS时差数据综合处理软件'
          }]
        },
        {
          index: '4',
          title: '中科院在轨卫星地面数据',
          class: 'el-icon-s-data',
          subs: [{
            index: '/SatIntegratedDataManagement',
            title: '卫星综合管理软件'
          }]
        },
        {
          index: '5',
          title: '高精度转发式卫星授时',
          class: 'el-icon-phone',
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
          class: 'el-icon-s-promotion',
          subs: [{
            index: '/VLBI',
            title: 'VLBI站控软件'
          }]
        }
      ]
    }
  },
  computed: {
    defaultOpens: function () {
      let arr = new Set()
      for (let i = 0; i < this.items.length; i++) {
        arr.add(this.items[i].index)
      }
      return Array.from(arr)
    }
  },
  methods: {
    settingOpen () {
      this.$notify.error({
        title: '错误',
        message: '此功能还未开发',
        offset: 30
      })
    },
    editorClick () {
      this.EditorDialogVisible = true
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    navModify () {
      this.isCollapse = !this.isCollapse
    },
    foldStatus () {
      if (this.isCollapse === true) {
        return 'el-icon-right'
      } else {
        return 'el-icon-back'
      }
    }
  }
}
</script>

<style scoped>
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
</style>
