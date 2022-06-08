<template>
  <div class="main-page">
    <vs-tabs v-model="activeName" @tab-click="handleClick">
      <vs-tab label="工作状态" name="1">
        <keep-alive>
          <VLBIWorkState :data="this.$store.state.VLBIWorkState"></VLBIWorkState>
        </keep-alive>
      </vs-tab>
    </vs-tabs>
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
