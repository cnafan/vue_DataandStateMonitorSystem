<template>
  <div>
    <p style="text-align: center">时频工作状态</p>
    <el-table
      id="table"
      :data="fromdatas"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="timeFrequencySystem"
        label="timeFrequencySystem">
      </el-table-column>
      <el-table-column
        prop="produceSystem"
        label="produceSystem">
      </el-table-column>
      <el-table-column
        prop="timeServiceSystem"
        label="timeServiceSystem">
      </el-table-column>
      <el-table-column
        prop="performanceEvaluationSystem"
        label="performanceEvaluationSystem">
      </el-table-column>
      <el-table-column
        prop="deviationDetectionSystem"
        label="deviationDetectionSystem">
      </el-table-column>
      <el-table-column
        prop="timeDeliverySystem"
        label="timeDeliverySystem">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'TimeFrequencyWorkingState',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
