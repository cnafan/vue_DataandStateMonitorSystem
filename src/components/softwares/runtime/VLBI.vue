<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="工作状态" name="工作状态">
        <keep-alive>
          <VLBIWorkState :data="this.$store.state.VLBIWorkState"></VLBIWorkState>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VLBIWorkState from '../../datas/VLBIWorkState'

export default {
  name: 'VLBI',
  data () {
    return {
      activeName: '工作状态'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    VLBIWorkState
  }
}
</script>

<style scoped>

</style>
