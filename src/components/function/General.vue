<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>一般设置</span>
    </div>
    <div class="switch-box">
      <vs-switch color="#8b9aec" disabled="true" v-model="switch2"/>
      <span class="switch-text"> 启用告警 </span>
    </div>
  </el-card>

</template>
<script>
export default {
  name: 'General',
  data () {
    return {
      switch2: true
    }
  }
}
</script>

<style scoped>
.list-title{
  margin-bottom: 1rem;
}
.switch-text{
  margin-left: 20px;
  font-size: small;
}
.switch-box{
  display: flex;align-items: center
}
</style>
