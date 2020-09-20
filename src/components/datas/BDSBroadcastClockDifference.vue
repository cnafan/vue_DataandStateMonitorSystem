<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差</p>
    <el-table
      id="table"
      :data="this.$store.state.BDSBroadcastClockDifference[0]"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        min-width="1"
        label="station">
      </el-table-column>
      <el-table-column
        min-width="2"
        prop="time"
        label="数据时标（UTC）">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="svid"
        label="卫星号">
      </el-table-column>
      <el-table-column
        min-width="2"
        prop="b3I"
        label="UTC(NTSC)与该颗卫星广播北斗时间B3I支路的钟差">
      </el-table-column>
      <el-table-column
        min-width="2"
        prop="b1I"
        label="UTC(NTSC)与该颗卫星广播北斗时间B1I/B3I支路的钟差">
      </el-table-column>
      <el-table-column
        min-width="2"
        prop="b2A"
        label="UTC(NTSC)与该颗卫星广播北斗时间B1C/B2A支路的钟差">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BDSBroadcastClockDifference',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
