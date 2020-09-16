<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      id="table"
      :data="this.$store.state.SignalComponent[0]"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        min-width="3"
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="sico"
        label="sico">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="chpm"
        label="chpm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="chps"
        label="chps">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="spsm"
        label="spsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="spss"
        label="spss">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="colm"
        label="colm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb1"
        label="scb1">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb2"
        label="scb2">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb3"
        label="scb3">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb4"
        label="scb4">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="bswm"
        label="bswm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="bsws"
        label="bsws">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccam"
        label="ccam">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccsm"
        label="ccsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccss"
        label="ccss">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccdm"
        label="ccdm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccds"
        label="ccds">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prsm"
        label="prsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prss"
        label="prss">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cpsm"
        label="cpsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cpss"
        label="cpss">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="dpsm"
        label="dpsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="dpss"
        label="dpss">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnsm"
        label="cnsm">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnss"
        label="cnss">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'SignalComponent',
  methods: {
    getComponent () {
      if (this.$store.getters.getData['SignalComponent'] === undefined) {
        return []
      }
      let components = this.$store.getters.getData['SignalComponent']
      if (components.length < 1) {
        components = []
      } else {
        components = components[0]
      }
      return components
    }
  }
}
</script>

<style scoped>

</style>
