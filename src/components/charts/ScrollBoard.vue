<template>
  <!--  <dv-border-box-7>-->
  <div style="height:100%;display: flex;flex-direction: column;">
    <ChartHeader :title="'实时接收数据'" :icon="'el-icon-s-flag'"></ChartHeader>
    <!--    <el-button  @click="doUpdate">hi</el-button >-->
    <dv-scroll-board id="runtimeScrollBoard" :config="getScrollBoardConfig" ref="scrollBoard"/>
  </div>
  <!--  </dv-border-box-7>-->
</template>
<script>
import store from '/src/vuex/store'
import {RUNTIME_SCROLL_BOARD_LIST_COUNT} from '/src/config/display'
import ChartHeader from './ChartHeader'

export default {
  name: 'ScrollBoard',
  components: {ChartHeader},
  props: {
    scrollData: {
      type: Array
    }
  },
  watch: {
    changeScrollBoardData: function () {
      // console.log('runtimeScrollBoard:', store.state.runtimeScrollBoard)
      // this.doUpdate()
    }
  },
  computed: {
    changeScrollBoardData: function () {
      return store.state.runtimeScrollBoard
    },
    getScrollBoardConfig: function () {
      // let config = this.config
      // config.data = store.state.runtimeScrollBoard
      // config = {...config}
      // return config
      // console.log('getScrollBoardConfig', config)
      return {data:store.state.runtimeScrollBoard,
        rowNum: RUNTIME_SCROLL_BOARD_LIST_COUNT,
        oddRowBGC: 'rgba(255, 255, 255, 0.1)',
        evenRowBGC: 'rgba(0, 0, 0, 0.3)',
        hoverPause: false}
    }
  },
  data () {
    return {
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
  },
  methods: {
    /**
     * @param {string[][]} rows 更新后的行数据
     * @param {number} index 下次滚动的起始行 （可缺省）
     */
    updateRows (rows, index) {
      console.log(rows,index)
      // ...
    },
    doUpdate () {
      // console.log('runtimeScrollBoard', store.state.runtimeScrollBoard)
      if (store.state.runtimeScrollBoard.length > 0) {
        // console.log('更新scrollBoard', store.state.runtimeScrollBoard)
        this.$refs['scrollBoard'].updateRows(store.state.runtimeScrollBoard,-1)
      }
    }
  }
}
</script>
<style scoped>
#runtimeScrollBoard {
  /*padding: 20px;*/
  /*width: 300px;*/
  /*height: 550px;*/
}

#runtimeScrollBoard.rows {
  /*height: 500px !important;*/
}
</style>
