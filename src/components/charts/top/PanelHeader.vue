<template>
  <div style="padding:10px;display: flex;align-items: center">
    <i style="color: cornflowerblue" :class="icon"></i>
    <span style="color: #bbb8b8">{{ title }}</span>
    <MyDvDecoration3 v-if="SplashPanelHeaderDecorate" style="margin-left:10px;width:100px;height:25px;"/>
  </div>

</template>

<script>
import {SplashPanelHeaderDecorate} from '@/config/showConfig'
import MyDvDecoration3 from "@/components/datav/decoration3/src/main";
export default {
  name: 'ChartHeader',
  components:{MyDvDecoration3},
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data () {
    return {
      SplashPanelHeaderDecorate: SplashPanelHeaderDecorate
    }
  }
}
</script>

<style scoped>

</style>
