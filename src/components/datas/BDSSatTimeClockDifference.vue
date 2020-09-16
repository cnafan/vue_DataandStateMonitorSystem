<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星时间的钟差</p>
    <el-table
      id="table"
      :data="this.$store.state.BDSSatTimeClockDifference"
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
        prop="packetAmount"
        label="总数据包数">
      </el-table-column>
      <el-table-column
        prop="packetNo"
        label="本包序号">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'BDSSatTimeClockDifference',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
