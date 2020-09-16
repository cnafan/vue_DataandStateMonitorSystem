<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      id="table"
      :data="this.$store.state.FrequencyComponent"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="sifr"
        label="信号频点">
      </el-table-column>
      <el-table-column
        prop="nuco"
        label="信号分量数">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'FrequencyComponent'
}
</script>

<style scoped>

</style>
