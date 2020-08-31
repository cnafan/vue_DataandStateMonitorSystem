<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDT的钟差</p>
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
        prop="clockDifference"
        label="clockDifference">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'BDTClockDifference',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
