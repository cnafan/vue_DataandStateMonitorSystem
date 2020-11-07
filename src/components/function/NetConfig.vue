<template>
  <div>

    <el-form :model="settingForm" :rules="rules" ref="NetConfigForm" label-position="top">
      <el-card class="el-card-netconfig">
        <div slot="header" class="clearfix">
          <span>接收端配置</span>
        </div>
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
      </el-card>
      <el-card class="el-card-netconfig">
        <div slot="header" class="clearfix">
          <span>发送端配置</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="DataServiceSoftwareSendIp" label="数据服务软件 IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.DataServiceSoftwareSendIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="数据服务软件 Port" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.DataServiceSoftwareSendPort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="SystemManageAndControlSendIp" label="系统管理控制软件 IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.SystemManageAndControlSendIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="系统管理控制软件 Port" :label-width="settingFormLabelWidth">
              <el-input-number v-model="settingForm.SystemManageAndControlSendPort" controls-position="right"
                               placeholder="port" :min="1"
                               :max="99999"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="el-card-netconfig">
        <div slot="header" class="clearfix">
          <span>监控配置</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="MonitorServerIp" label="监控服务器 IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.MonitorServerIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="MonitorClientIp" label="监控客户端 IP" :label-width="settingFormLabelWidth">
              <el-input v-model="settingForm.MonitorClientIp" autocomplete="off"
                        placeholder="ip"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
    <div style="float: right">
      <!--      <el-button @click="editorDialogSubmit('NetConfigForm')" type="primary">提 交</el-button>-->
      <!--      <vs-button class="submit-button" icon="done" color="primary" type="filled" @click="editorDialogSubmit('NetConfigForm')">提 交</vs-button>-->
      <el-popover
          placement="top"
          width="160"
          v-model="editorConfirmvisible">
        <p>是否提交 ?</p>
        <div style="text-align: right; margin: 5px 0 0 0">
          <el-button size="mini" type="text" @click="editorDialogCancel">取消</el-button>
          <el-button type="primary" size="mini" @click="editorDialogSubmit('NetConfigForm')">确定</el-button>
        </div>
        <el-button slot="reference">提交</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import {NOTIFICATION_OFFSET} from '../../../config/display'
export default {
  name: 'NetConfig',
  data () {
    let checkIp = (rule, value, callback) => {
      if ((/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value))) {
        callback()
      } else {
        callback(new Error('IP地址格式错误'))
      }
    }
    return {
      editorConfirmvisible: false,
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
  methods: {
    editorDialogCancel () {
      this.editorConfirmvisible = false
    },
    editorDialogSubmit (formName) {
      console.log('formName', this.$refs[formName])
      this.editorConfirmvisible = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$vs.loading()
          // console.log('into true')
          this.EditorDialogVisible = false
          // this.$store.commit('setDialog', false)
          // console.log(JSON.stringify(this.settingFormItems))
          this.$postStandard('api/netconfig', this.$store.state.NetConfig
            // data: JSON.stringify(this.settingFormItems)
          ).then(response => {
            this.$vs.loading.close()
            this.$store.commit('change', {'data': this.settingForm, 'software': 'NetConfig'})
            // console.log('net config response:')
            // console.log(response)
            switch (response.status) {
              case 200:
                this.$notify.success({
                  title: '成功',
                  message: '配置更新成功! ',
                  offset: NOTIFICATION_OFFSET,
                  duration: 2000
                })
                break
              default:
                this.$notify.error({
                  title: '错误',
                  message: '配置更新失败! 错误代码:' + response.status,
                  offset: NOTIFICATION_OFFSET,
                  duration: 0
                })
                break
            }
            // storageUtils.saveNetConfig(this.settingFormItems)
          })
            .catch(error => {
              this.$vs.loading.close()
              // console.log(error)
              this.$notify.error({
                title: '异常',
                message: '配置更新异常! ' + error,
                offset: NOTIFICATION_OFFSET,
                duration: 0
              })
            })
        } else {
          console.log('未通过验证！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-card-netconfig {
  margin-bottom: 20px;
}

.submit-button {
  margin-bottom: 20px;
}
</style>
