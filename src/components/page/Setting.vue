<template>
  <div class="main-page">
    <vs-tabs position="top" color="#8b9aec">
      <vs-tab label="网络配置" icon="wifi">
        <NetConfig></NetConfig>
      </vs-tab>
      <vs-tab label="通用设置" icon="settings">
        <General></General>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import NetConfig from '../function/NetConfig'
import General from '../function/General'

export default {
  name: 'Setting',
  components: {General, NetConfig}
}
</script>

<style scoped>

</style>
