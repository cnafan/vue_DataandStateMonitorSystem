<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDT的钟差</p>
    <el-table
      id="table"
      :data="this.$store.state.BDTClockDifference"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据时标（UTC）">
      </el-table-column>
      <el-table-column
        prop="clockDifference"
        label="UTC(NTSC)与BDT的钟差">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'BDTClockDifference',
  methods: {
    datas () {
      return this.$store.getters.getData
    },
    getStationName (station) {
      switch (station) {
        case 0:
          return '西安站'
        case 1:
          return '海外站'
        default:
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
