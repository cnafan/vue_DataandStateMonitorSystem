<template>
  <div>
    <p style="text-align: center">地面站工作状态信息</p>
    <el-table
      id="table"
      :data="this.$store.state.GroundStationWorkStateInfo"
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
        prop="groundID1"
        label="地面站标识">
      </el-table-column>
      <el-table-column
        prop="baseBandState1"
        label="基带主备状态">
      </el-table-column>
      <el-table-column
        prop="baseBandNo1"
        label="基带编号">
      </el-table-column>
      <el-table-column
        prop="baseBandWorkState1"
        label="基带运行状态">
      </el-table-column>
      <el-table-column
        prop="C1UPState1"
        label="C1UPState1">
      </el-table-column>
      <el-table-column
        prop="C1DOWNState1"
        label="C1DOWNState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterID1"
        label="FreConverterID1">
      </el-table-column>
      <el-table-column
        prop="FreConverterWorkState1"
        label="FreConverterWorkState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterBlockState1"
        label="FreConverterBlockState1">
      </el-table-column>
      <el-table-column
        prop="FreConverterOutput1"
        label="FreConverterOutput1">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'GroundStationWorkStateInfo',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
