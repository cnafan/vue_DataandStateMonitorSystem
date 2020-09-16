<template>
  <div>
    <p style="text-align: center">BDS3每颗卫星的星钟改正数</p>
    <el-table
      id="table"
      :data="this.$store.state.BDSClockCorrection"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        label="station">
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据时标（UTC）">
      </el-table-column>
      <el-table-column
        prop="SVID"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="SVCLK"
        label="该颗卫星的星钟改正数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BDSClockCorrection',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
