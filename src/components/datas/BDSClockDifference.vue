<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      id="table"
      :data="fromdatas"
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
        label="time">
      </el-table-column>
      <el-table-column
        prop="SVID"
        label="svid">
      </el-table-column>
      <el-table-column
        prop="SVCLK"
        label="svclk">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['fromdatas'],
  name: 'BDSClockDifference',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
