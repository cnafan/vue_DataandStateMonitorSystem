<template>
  <div>
    <p style="text-align: center">CAPST-UTC（NTSC）溯源时差数据</p>
    <el-table
      :data="fromdatas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="week"
        label="staweektion">
      </el-table-column>
      <el-table-column
        prop="sec"
        label="sec">
      </el-table-column>
      <el-table-column
        prop="timeDifference"
        label="timeDifference">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'NTSCTimeDifferenceData',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
