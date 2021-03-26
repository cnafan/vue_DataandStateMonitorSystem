<template>
  <div>
    <el-table
      class="table"
      :data="data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      style="width: 100%">
      <el-table-column
        prop="mysqlStatus"
        label="数据库状态">
      </el-table-column>
      <el-table-column
        prop="localFtpStatus"
        label='本地FTP状态'>
      </el-table-column>
      <el-table-column
        prop="remoteFtpStatus"
        label="远程FTP状态">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Server',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
