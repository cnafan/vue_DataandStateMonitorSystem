<template>
  <div>
    <p style="text-align: center">工作状态</p>
    <el-table
      :data="fromdatas"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="measTime"
        label="measTime">
      </el-table-column>
      <el-table-column
        prop="measValue"
        label="measValue">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['fromdatas'],
  name: 'WorkingStateInfoBDGNSSSystemClock',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
