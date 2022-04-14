<template>
  <el-row id="el_row_header">
    <el-col :span="1">
      <i :class="foldStatus()" style="font-size: 24px;" @click="navModify"></i>
    </el-col>
    <el-col :span="20">
      <div>{{ this.$route.name }}</div>
    </el-col>
    <el-col :span="1">
      <el-link id="zabbix-link" href='' target="_blank"
               :underline="false" icon="el-icon-video-camera"
               style="font-size: 25px;"></el-link>
      <!--      <i class="el-icon-camera" style="font-size: 25px;" ></i>-->
    </el-col>
    <el-col :span="1">
      <el-popover
          placement="bottom"
          width="400"
          content="this is content, this is content, this is content"
          trigger="click">
        <i class="el-icon-bell" slot="reference" style="font-size: 25px;" @click="notificationOpen"></i>
        <!--        <el-button slot="reference">Click to activate</el-button>-->
      </el-popover>
    </el-col>
    <el-col :span="1">
      <i class="el-icon-setting" style="font-size: 25px;" @click="settingOpen"></i>
    </el-col>
  </el-row>
</template>

<script>
import storageUtils from '../../utils/storageUtils'
import {GET_NET_CONFIG} from "@/api/api";
// import store from '../../vuex/store'

export default {
  name: 'Header',
  data() {
    return {
      isCollapse: storageUtils.readData('MenuIsCollapse'),
    }
  },
  methods: {
    ChangeHref() {
      this.$get(GET_NET_CONFIG).then(response => {
        let v = document.getElementById("zabbix-link");//获取html的el-link标签
        let monitorServerIp = response.data.monitorServerIp
        v.href = 'http://' + monitorServerIp + '/zabbix'
      })
    },
    notificationOpen() {

    },
    settingOpen() {
      this.$router.push({path: '/setting'})
      // this.$notify({
      //   title: '成功',
      //   message: '这是一条成功的提示消息',
      //   offset: NOTIFICATION_OFFSET,
      //   type: 'success'
      // })
    },
    foldStatus() {
      if (this.isCollapse === true) {
        return 'el-icon-right'
      } else {
        return 'el-icon-back'
      }
    },
    navModify() {
      this.isCollapse = !this.isCollapse
      storageUtils.saveData('MenuIsCollapse', this.isCollapse)
      // this.$store.commit('change', {'software': 'MenuIsCollapse', 'data': this.isCollapse})
      // console.log('观察width：', document.getElementById('navMenu').offsetWidth)
      this.$emit('menuCollapse', this.isCollapse)
    }
  },
  mounted() {
    this.ChangeHref()
  }
}
</script>

<style scoped>

</style>
