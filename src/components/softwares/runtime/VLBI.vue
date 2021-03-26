<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="工作状态" name="1">
        <keep-alive>
          <VLBIWorkState :data="this.$store.state.VLBIWorkState"></VLBIWorkState>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VLBIWorkState from '../../datas/VLBIWorkState'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'VLBI',
  mixins: [tabMixin],
  components: {
    VLBIWorkState
  }
}
</script>

<style scoped>

</style>
