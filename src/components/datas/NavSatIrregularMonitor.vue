<template>
  <div>
<!--    <p style="text-align: center">导航卫星异常监测结果</p>-->
    <el-table
      class="table"
      id="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="time"
        min-width="2"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="said"
        min-width="1"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="stid"
        min-width="1"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="daty"
        min-width="1"
        label="数据分类">
      </el-table-column>
      <el-table-column
        prop="ercd"
        min-width="1"
        label="异常编码">
      </el-table-column>
      <el-table-column
        prop="emln"
        min-width="1"
        label="异常内容长度">
      </el-table-column>
      <el-table-column
        prop="ermg"
        min-width="3"
        label="异常内容">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NavSatIrregularMonitor',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
