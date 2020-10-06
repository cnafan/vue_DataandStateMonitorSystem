<template>
  <div>
<!--    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差</p>-->
<!--    :data="this.$store.state.BDSBroadcastClockDifference[0]"-->
    <el-table
      :data="this.data"
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
        prop="svid"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="b3I"
        label="UTC与卫星广播北斗时间B3I支路的钟差">
      </el-table-column>
      <el-table-column
        prop="b1I"
        label="UTC与卫星广播北斗时间B1I/B3I支路的钟差">
      </el-table-column>
      <el-table-column
        prop="b2A"
        label="UTC与卫星广播北斗时间B1C/B2A支路的钟差">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BDSBroadcastClockDifference',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
