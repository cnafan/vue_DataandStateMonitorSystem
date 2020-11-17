<template>
  <div id="main-app">
    <el-header id="header" style="box-shadow:rgba(52, 56, 85, 0.25) 0 2px 3px 0;">
      <Header @menuCollapse="menuCollapseFunc"></Header>
    </el-header>
    <el-container id="el-container-header">
      <!--      <el-scrollbar id="el-scrollbar-menu" style="height: 100%">-->
      <Menu class="nav-menu" :menu-is-collapse="isCollapse"></Menu>
      <!--      </el-scrollbar>-->
      <el-main id="el-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <!--        <el-row id="el-row-main">-->
        <!--        </el-row>-->
        <!--        <el-backtop></el-backtop>-->
      </el-main>

    </el-container>
  </div>
</template>

<script>

import Menu from '../common/Menu'
import storageUtils from '../../utils/storageUtils'
import {NOTIFICATION_OFFSET} from '../../../config/display'
import Header from '../common/Header'

export default {
  name: 'Main',
  components: {
    Header,
    Menu
  },
  data () {
    let checkIp = (rule, value, callback) => {
      if ((/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value))) {
        callback()
      } else {
        callback(new Error('IP地址格式错误'))
      }
    }
    return {
      headerName: '数据与状态监控软件',
      isCollapse: storageUtils.readData('MenuIsCollapse'),
      // isCollapse: this.$store.state.MenuIsCollapse,
      EditorDialogTitle: '修改配置',
      EditorDialogVisible: false,
      settingFormLabelWidth: '120px',
      rules: {
        DataServiceSoftwareSendIp: [{
          validator: checkIp,
          trigger: 'blur'
        }],
        SystemManageAndControlSendIp: [{
          validator: checkIp,
          trigger: 'blur'
        }],
        MonitorServerIp: [{
          validator: checkIp,
          trigger: 'blur'
        }],
        MonitorClientIp: [{
          validator: checkIp,
          trigger: 'blur'
        }]
      },
      settingForm: this.$store.state.NetConfig
    }
  },
  created () {
    this.$store.commit('resetNotify')
  },
  computed: {
    defaultOpens: function () {
      let arr = new Set()
      for (let i = 0; i < this.items.length; i++) {
        arr.add(this.items[i].index)
      }
      return Array.from(arr)
    },
    NotifyDataSystemManageAndControlChange: function () {
      return this.$store.state.NotifyDataSystemManageAndControl.result
    },
    NotifyDataAtomicClockSignalChange: function () {
      return this.$store.state.NotifyDataAtomicClockSignal.result
    },
    NotifyDataBDGNSSSystemClockMonitorChange: function () {
      return this.$store.state.NotifyDataBDGNSSSystemClockMonitor.result
    },
    NotifyDataSatIntegratedDataManagementChange: function () {
      return this.$store.state.NotifyDataSatIntegratedDataManagement.result
    },
    NotifyDataStateMonitorAndWarningChange: function () {
      return this.$store.state.NotifyDataStateMonitorAndWarning.result
    },
    NotifyDataVLBIChange: function () {
      return this.$store.state.NotifyDataVLBI.result
    }
  },
  watch: {
    NotifyDataSystemManageAndControlChange () {
      if (this.$store.state.NotifyComponentSystemManageAndControl.length === 0) {
        if (this.$store.state.NotifyDataSystemManageAndControl.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataSystemManageAndControl.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentSystemManageAndControl.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentSystemManageAndControl.pop().close()
      }
    },
    NotifyDataAtomicClockSignalChange () {
      if (this.$store.state.NotifyComponentAtomicClockSignal.length === 0) {
        if (this.$store.state.NotifyDataAtomicClockSignal.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataAtomicClockSignal.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentAtomicClockSignal.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentAtomicClockSignal.pop().close()
      }
    },
    NotifyDataBDGNSSSystemClockMonitorChange () {
      if (this.$store.state.NotifyComponentBDGNSSSystemClockMonitor.length === 0) {
        if (this.$store.state.NotifyDataBDGNSSSystemClockMonitor.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataBDGNSSSystemClockMonitor.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentBDGNSSSystemClockMonitor.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentBDGNSSSystemClockMonitor.pop().close()
      }
    },
    NotifyDataSatIntegratedDataManagementChange () {
      if (this.$store.state.NotifyComponentSatIntegratedDataManagement.length === 0) {
        if (this.$store.state.NotifyDataSatIntegratedDataManagement.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataSatIntegratedDataManagement.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentSatIntegratedDataManagement.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentSatIntegratedDataManagement.pop().close()
      }
    },
    NotifyDataStateMonitorAndWarningChange () {
      if (this.$store.state.NotifyComponentStateMonitorAndWarning.length === 0) {
        if (this.$store.state.NotifyDataStateMonitorAndWarning.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataStateMonitorAndWarning.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentStateMonitorAndWarning.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentStateMonitorAndWarning.pop().close()
      }
    },
    NotifyDataVLBIChange () {
      if (this.$store.state.NotifyComponentVLBI.length === 0) {
        if (this.$store.state.NotifyDataVLBI.result === 0) {
          let notifyError = this.$notify({
            title: '警告',
            message: this.$store.state.NotifyDataVLBI.software + ' 出现故障！',
            offset: NOTIFICATION_OFFSET,
            type: 'error',
            duration: 0
          })
          this.$store.state.NotifyComponentVLBI.push(notifyError)
        }
      } else {
        this.$store.state.NotifyComponentVLBI.pop().close()
      }
    }
  },
  methods: {
    menuCollapseFunc (isCollapse) {
      this.isCollapse = isCollapse
      // this.$store.commit('change', {software: 'menuWidth', 'data': document.getElementById('navMenu').offsetWidth})
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style scoped>
</style>
