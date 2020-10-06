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
        <Menu :menu-is-collapse="isCollapse"></Menu>
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
      <el-form :model="settingForm" :rules="rules" ref="NetConfigForm" label-position="top">
        <p style="text-align: center">接收端配置</p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="8">
            <el-form-item label="系统管理控制软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.SystemManageAndControlReceivePort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="GNSS时差数据综合处理软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.BDGNSSSystemClockMonitorReceivePort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="原子钟信号监测与自主切换软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.AtomicClockSignalReceivePort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="卫星综合管理软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.SatIntegratedDataManagementReceivePort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态监测及告警软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.StateMonitorAndWarningPort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="VLBI站控软件" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.VLBIReceivePort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <p style="text-align: center">发送端配置</p>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="DataServiceSoftwareSendIp" label="数据服务软件IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.DataServiceSoftwareSendIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="数据服务软件Port" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.DataServiceSoftwareSendPort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="SystemManageAndControlSendIp" label="系统管理控制软件IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.SystemManageAndControlSendIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="系统管理控制软件Port" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.SystemManageAndControlSendPort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorDialogCancel">取 消</el-button>
        <el-button @click="editorDialogSubmit('NetConfigForm')" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import Menu from '../common/Menu'

export default {
  name: 'Main',
  components: {
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
      isCollapse: this.$store.state.MenuIsCollapse,
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
        }]
      },
      settingForm: this.$store.state.NetConfig
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
      // this.$store.commit('change', {'software': 'ColorStateMonitorAndWarning', 'data': 'red'})
      // this.$store.commit('change', {'software': 'ColorSatIntegratedDataManagement', 'data': 'blue'})
      // this.$store.commit('change', {'software': 'ColorBDGNSSSystemClockMonitor', 'data': 'blue'})
      // this.$store.commit('change', {'software': 'ColorSystemManageAndControl', 'data': 'blue'})
      // this.$store.commit('reverse')
      this.$notify.error({
        title: '错误',
        dangerouslyUseHTMLString: true,
        message: '2020-08-20 20:20:20 <br/> 系统管理与控制软件  导航卫星信号质量 接收错误',
        offset: 30
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    navModify () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('change', {'software': 'MenuIsCollapse', 'data': this.isCollapse})
    },
    foldStatus () {
      if (this.isCollapse === true) {
        return 'el-icon-right'
      } else {
        return 'el-icon-back'
      }
    },
    editorClick () {
      this.EditorDialogVisible = true
    },
    editorDialogSubmit (formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log('into true')
          this.EditorDialogVisible = false
          // this.$store.commit('setDialog', false)
          // console.log(JSON.stringify(this.settingFormItems))
          this.$post('api/netconfig', this.$store.state.NetConfig
            // data: JSON.stringify(this.settingFormItems)
          ).then(response => {
            this.$store.commit('change', {'data': this.settingForm, 'software': 'NetConfig'})
            // console.log('net config response:')
            // console.log(response)
            switch (response.status) {
              case 200:
                this.$notify.success({
                  title: '成功',
                  message: '配置更新成功! ',
                  offset: 30,
                  duration: 2000
                })
                break
              default:
                this.$notify.error({
                  title: '错误',
                  message: '配置更新失败! 错误代码:' + response.status,
                  offset: 30,
                  duration: 0
                })
                break
            }
            // storageUtils.saveNetConfig(this.settingFormItems)
          }).catch(error => {
            console.log(error)
            this.$notify.error({
              title: '异常',
              message: '配置更新异常! ' + error,
              offset: 30,
              duration: 0
            })
          })
        } else {
          console.log('未通过验证！')
          return false
        }
      })
    },
    editorDialogCancel () {
      this.EditorDialogVisible = false
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
