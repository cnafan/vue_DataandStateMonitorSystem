<template>
  <div>
    <p style="text-align: center">地面站工作状态信息</p>
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
        prop="groundID1"
        label="groundID1">
      </el-table-column>
      <el-table-column
        prop="baseBandState1"
        label="baseBandState1">
      </el-table-column>
      <el-table-column
        prop="baseBandNo1"
        label="baseBandNo1">
      </el-table-column>
      <el-table-column
        prop="baseBandWorkState1"
        label="baseBandWorkState1">
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
  props: ['fromdatas'],
  name: 'GroundStationWorkStateInfo',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
