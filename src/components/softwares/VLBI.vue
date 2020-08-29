<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="工作状态" name="1">
        <VLBIWorkState></VLBIWorkState>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VLBIWorkState from "../datas/VLBIWorkState";

export default {
  name: "VLBI",
  data() {
    return {
      activeName: '1'
    };
  },
  methods:{
    handleClick(tab, event){
      console.log(tab,event)
    }
  },
  components: {
    VLBIWorkState
  }
}
</script>

<style scoped>

</style>
