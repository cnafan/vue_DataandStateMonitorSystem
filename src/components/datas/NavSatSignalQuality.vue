<template>
  <div>
    <p style="text-align: center">导航卫星信号质量监测结果</p>
    <el-table
      id="table"
      :data="fromdatas"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="said"
        label="said">
      </el-table-column>
      <el-table-column
        prop="stid"
        label="stid">
      </el-table-column>
      <el-table-column
        prop="sifr"
        label="sifr">
      </el-table-column>
      <el-table-column
        prop="nuco"
        label="nuco">
      </el-table-column>
    </el-table>
  </div>
  <!--    <table>-->
  <!--      <thead>-->
  <!--      <tr>-->
  <!--        <th>Time</th>-->
  <!--        <th>SAID</th>-->
  <!--        <th>STID</th>-->
  <!--        <th>SIFR</th>-->
  <!--        <th>NUCO</th>-->
  <!--      </tr>-->
  <!--      </thead>-->
  <!--      <tbody is="transition-group" name="flip-list">-->
  <!--      <tr v-for="item in datas" :key="item">-->
  <!--        <td>{{ item["time"] }}</td>-->
  <!--        <td>{{ item["said"] }}</td>-->
  <!--        <td>{{ item["stid"] }}</td>-->
  <!--        <td>{{ item["sifr"] }}</td>-->
  <!--        <td>{{ item["nuco"] }}</td>-->
  <!--      </tr>-->
  <!--      </tbody>-->

  <!--    </table>-->

</template>

<script>
export default {
  props: ['fromdatas'],
  name: 'NavSatSignalQuality'
}
</script>

<style scoped>

</style>
