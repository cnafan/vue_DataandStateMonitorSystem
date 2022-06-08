<template>
  <div class="main-page">
    <vs-tabs position="top" color="#8b9aec">
      <vs-tab label="网络配置" icon="wifi">
        <NetConfig></NetConfig>
      </vs-tab>
      <vs-tab label="通用设置" icon="settings">
        <General></General>
      </vs-tab>
<!--      <vs-tab label="阈值设置" icon="settings">-->
<!--        <Limit></Limit>-->
<!--      </vs-tab>-->
    </vs-tabs>
  </div>
</template>

<script>
import NetConfig from '../function/NetConfig'
import General from '../function/General'
import Limit from "@/components/function/LimitConfig";

export default {
  name: 'Setting',
  // eslint-disable-next-line vue/no-unused-components
  components: {Limit, General, NetConfig}
}
</script>

<style scoped>

</style>
