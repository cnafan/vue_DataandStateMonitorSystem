<template>
  <div>
    <p style="text-align: center">导航卫星异常监测结果</p>
    <el-table
      id="table"
      :data="this.$store.state.NavSatIrregularMonitor"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="said"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="stid"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="daty"
        label="数据分类">
      </el-table-column>
      <el-table-column
        prop="ercd"
        label="异常编码">
      </el-table-column>
      <el-table-column
        prop="emln"
        label="异常内容长度">
      </el-table-column>
      <el-table-column
        prop="ermg"
        label="异常内容">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NavSatIrregularMonitor',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>

</style>
