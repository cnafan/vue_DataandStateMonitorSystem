<template>
  <!--  <dv-border-box-7>-->
  <div style="display:flex;flex-direction:column;height: 100%;width: 100%">
    <ChartHeader :icon="'el-icon-coin'" :title="'数据库运行状态'"></ChartHeader>
    <div style="display:flex;flex-direction:row;height: 100%;width: 100%">
      <div style="padding: 10px 20px 20px 20px;display: flex;flex-direction:column;justify-content: center;align-items: center;flex: 1">
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-around">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-coin"></i>
            <span style="color: white; font-size: 20px"> 数据库表单占用存储</span>
          </div>
          <span style="color: white; font-size: 20px">{{ getSchemaUsage }}</span>
        </div>
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-around">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-pie-chart"></i>
            <span style="color: white; font-size: 20px"> 服务器连接占用内存</span>
          </div>
          <span style="color: white; font-size: 20px">{{ getCurrentMemory }}</span>
        </div>
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-around">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-connection"></i>
            <span style="color: white; font-size: 20px"> 当前服务器总连接数</span>
          </div>
          <span style="color: white; font-size: 20px">{{ getTotalConnections }}</span>
        </div>
      </div>
      <dv-decoration-4 style="width:5px;height:80%;"/>
    </div>
  </div>
  <!--    </dv-border-box-7>-->
</template>

<script>
import ChartHeader from './ChartHeader'

export default {
  name: 'DataBasePanel',
  components: {ChartHeader},
  props: {
    propData: {
      type: Object
    }
  },
  computed: {
    getSchemaUsage: function () {
      if (this.propData === {} || this.propData['schemaUsage'] === undefined) {
        return ''
      }
      return this.propData['schemaUsage']
    },
    getCurrentMemory: function () {
      if (this.propData === {} || this.propData['currentMemory'] === undefined) {
        return ''
      }
      return this.propData['currentMemory']
    },
    getTotalConnections: function () {
      if (this.propData === {} || this.propData['totalConnections'] === undefined) {
        return ''
      }
      return this.propData['totalConnections']
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
