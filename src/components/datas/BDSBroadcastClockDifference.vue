<template>
  <div>
    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差</p>
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
        min-width="150"
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

  <!--  <div>-->
  <!--    <table>-->
  <!--      <thead>-->
  <!--      <tr>-->
  <!--        <th>station</th>-->
  <!--        <th>time</th>-->
  <!--        <th>SVID</th>-->
  <!--        <th>B3I</th>-->
  <!--        <th>B1I</th>-->
  <!--        <th>B2A</th>-->
  <!--      </tr>-->
  <!--      </thead>-->
  <!--      <tbody is="transition-group" name="flip-list">-->
  <!--      <tr v-for="item in datas" :key="item">-->
  <!--        <td>{{ item["station"] }}</td>-->
  <!--        <td>{{ item["time"] }}</td>-->
  <!--        <td>{{ item["svid"] }}</td>-->
  <!--        <td>{{ item["b3I"] }}</td>-->
  <!--        <td>{{ item["b1I"] }}</td>-->
  <!--        <td>{{ item["b2A"] }}</td>-->
  <!--      </tr>-->
  <!--      </tbody>-->
  <!--    </table>-->
  <!--  </div>-->

</template>

<script>
export default {
  name: 'BDSBroadcastClockDifference',
  props: ['fromdatas'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
