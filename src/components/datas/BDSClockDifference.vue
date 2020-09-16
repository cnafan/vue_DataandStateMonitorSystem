<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      id="table"
      :data="this.$store.state.BDSClockDifference"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="svid"
        label="SVID">
      </el-table-column>
      <el-table-column
        prop="b3I"
        label="B3I">
      </el-table-column>
      <el-table-column
        prop="b1I"
        label="B1I">
      </el-table-column>
      <el-table-column
        prop="b2A"
        label="B2A">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BDSClockDifference',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
