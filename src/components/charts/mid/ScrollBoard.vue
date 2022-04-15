<template>
  <div id="runtimeScrollBoard">
      <ChartHeader :title="'实时接收数据'" :icon="'el-icon-s-flag'"></ChartHeader>

    <div style="display:flex;flex-direction:row;height: 100%;width: 100%;">
      <dv-decoration-4 style="width:5px;height:80%;"/>
      <dv-scroll-board style="height:100%;overflow: hidden" :config="getScrollBoardConfig" :key=keySet
                       ref="scrollBoard"/>
      <dv-decoration-4 style="width:5px;height:80%;"/>
    </div>
  </div>
</template>
<script>
import store from '/src/vuex/store'
import {RUNTIME_SCROLL_BOARD_LIST_COUNT} from '/src/config/display'
import ChartHeader from '../top/PanelHeader'

export default {
  name: 'ScrollBoard',
  components: {ChartHeader},
  props: {
    scrollData: {
      type: Array
    }
  },
  computed: {
    getScrollBoardConfig: function () {
      return {
        data: store.state.runtimeScrollBoard,
        rowNum: RUNTIME_SCROLL_BOARD_LIST_COUNT,
        oddRowBGC: 'rgba(255, 255, 255, 0.1)',
        evenRowBGC: 'rgba(0, 0, 0, 0.3)',
        hoverPause: false
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.keySet = this.keySet + 1;
      }, 500);
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
    });
  },
  data() {
    return {
      keySet: new Date().getUTCMilliseconds(),
      config: {
        rowNum: RUNTIME_SCROLL_BOARD_LIST_COUNT,
        oddRowBGC: 'rgba(255, 255, 255, 0.1)',
        evenRowBGC: 'rgba(0, 0, 0, 0.3)',
        hoverPause: false,
        // align: ['center', 'center'],
        data: [
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' '],
          [' ', ' ']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

#runtimeScrollBoard {
  /*padding: 20px;*/
  /*width: 300px;*/
  /*height: 550px;*/
  .border-box-content {
    height: 100%;
    overflow: hidden;
  }
  .rows {
    /*height: 500px !important;*/
  }
}
</style>
