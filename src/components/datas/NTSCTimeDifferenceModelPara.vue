<template>
  <div>
<!--    <p style="text-align: center">CAPST-UTC（NTSC）溯源时差模型参数</p>-->
    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="week"
        label="数据时标-周">
      </el-table-column>
      <el-table-column
        prop="sec"
        label="数据时标-周内秒">
      </el-table-column>
      <el-table-column
        prop="runningState"
        label="单元运行状态">
      </el-table-column>
      <el-table-column
        prop="constantTerm"
        label="模型常数项">
      </el-table-column>
      <el-table-column
        prop="oneTimeTerm"
        label="模型一次项">
      </el-table-column>
      <el-table-column
        prop="quadraticTerm"
        label="模型二次项">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'NTSCTimeDifferenceModelPara',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
