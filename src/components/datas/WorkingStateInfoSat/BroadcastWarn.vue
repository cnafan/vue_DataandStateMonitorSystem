<template>
  <div>
    <el-table
      class="table"
      :data="data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="gWeek"
        label="时标周">
      </el-table-column>
      <el-table-column
        prop="gSecond"
        label="时标周内秒">
      </el-table-column>
      <el-table-column
        prop="gFirstInfo"
        label="信息1">
      </el-table-column>
      <el-table-column
        prop="gSecondInfo"
        label="信息2">
      </el-table-column>
      <el-table-column
        prop="gThirdInfo"
        label="信息3">
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
  name: 'BroadcastWarn',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
