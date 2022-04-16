<template>
  <!--  <dv-border-box-7>-->
  <div style="display:flex;flex-direction:column;height: 100%;width: 100%">
    <ChartHeader :icon="'el-icon-coin'" :title="'数据库运行状态'"></ChartHeader>
    <div style="display:flex;flex-direction:row;height: 100%;width: 100%;">
      <MyDvDecoration4 style="width:5px;height:80%;"/>
      <div
          style="padding: 10px 20px 20px 20px;display: flex;flex-direction:column;justify-content: center;align-items: center;flex: 1">
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-between">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-coin"></i>
            <span class="database-each-title-span"> 数据库表单占用存储</span>
          </div>
          <span class="database-each-content-span">{{ getSchemaUsage }}</span>
        </div>
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-between">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-pie-chart"></i>
            <span class="database-each-title-span"> 服务器连接占用内存</span>
          </div>
          <span class="database-each-content-span">{{ getCurrentMemory }}</span>
        </div>
        <div style="width:100%;flex: 1;display: flex;align-items:center;justify-content: space-between">
          <div style="display: flex;align-items: center">
            <i style="font-size: 50px;color: white;margin-right: 10px" class="el-icon-connection"></i>
            <span class="database-each-title-span"> 当前服务器总连接数</span>
          </div>
          <span class="database-each-content-span">{{ getTotalConnections }}</span>
        </div>
      </div>
    </div>
  </div>
  <!--    </dv-border-box-7>-->
</template>

<script>
import ChartHeader from '../top/PanelHeader'
import MyDvDecoration4 from "@/components/datav/decoration4/src/main";

export default {
  name: 'DataBasePanel',
  components: {ChartHeader,MyDvDecoration4},
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
.database-each-title-span {
  color: white;
  font-size: 16px;
  min-width: 150px;
  max-height: 50px
}

.database-each-content-span {
  color: white;
  font-size: 16px;
}
</style>
