<template>
  <div>
<!--    <p style="text-align: center">时频工作状态</p>-->
    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="timeFrequencySystem"
        label="时间频率分系统整体">
      </el-table-column>
      <el-table-column
        prop="produceSystem"
        label="系统时间频率产生子系统">
      </el-table-column>
      <el-table-column
        prop="timeServiceSystem"
        label="转发式共视授时子系统">
      </el-table-column>
      <el-table-column
        prop="performanceEvaluationSystem"
        label="北斗授时性能评估子系统">
      </el-table-column>
      <el-table-column
        prop="deviationDetectionSystem"
        label="GNSS系统时间偏差监测子系统">
      </el-table-column>
      <el-table-column
        prop="timeDeliverySystem"
        label="高精度远程时间配送子系统">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TimeFrequencyWorkingState',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
