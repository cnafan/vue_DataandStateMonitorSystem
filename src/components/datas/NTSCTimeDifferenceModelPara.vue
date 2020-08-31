<template>
  <div>
    <p style="text-align: center">CAPST-UTC（NTSC）溯源时差模型参数</p>
    <el-table
      :data="fromdatas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="week"
        label="week">
      </el-table-column>
      <el-table-column
        prop="sec"
        label="sec">
      </el-table-column>
      <el-table-column
        prop="runningState"
        label="runningState">
      </el-table-column>
      <el-table-column
        prop="constantTerm"
        label="constantTerm">
      </el-table-column>
      <el-table-column
        prop="oneTimeTerm"
        label="oneTimeTerm">
      </el-table-column>
      <el-table-column
        prop="quadraticTerm"
        label="quadraticTerm">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'NTSCTimeDifferenceModelPara',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
