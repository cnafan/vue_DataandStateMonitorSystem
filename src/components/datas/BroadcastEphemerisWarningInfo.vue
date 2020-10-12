<template>
  <div>
<!--    <p style="text-align: center">广播星历告警信息</p>-->
    <el-table
      class="table"
      id="table"
      :data="this.$store.state.BroadcastEphemerisWarningInfo"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        min-width="1"
        prop="week"
        label="week">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="sec"
        label="sec">
      </el-table-column>
      <el-table-column
        min-width="3"
        prop="warningInfo1"
        label="警告信息1">
      </el-table-column>
      <el-table-column
        min-width="3"
        prop="warningInfo2"
        label="警告信息2">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'BroadcastEphemerisWarningInfo',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
