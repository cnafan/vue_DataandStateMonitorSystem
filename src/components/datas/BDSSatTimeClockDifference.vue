<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星时间的钟差</p>
    <el-table
      :data="fromdatas"
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
        prop="packetAmount"
        label="packetAmount">
      </el-table-column>
      <el-table-column
        prop="packetNo"
        label="packetNo">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props: ['fromdatas'],
  name: 'BDSSatTimeClockDifference',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
