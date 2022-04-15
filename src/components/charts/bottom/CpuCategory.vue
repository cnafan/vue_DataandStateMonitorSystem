<template>
  <div id="CpuCategory"></div>
</template>
<script>
let myChart;
export default {
  name: "CpuCategory",
  props: {
    UsageData: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    UsageData() {
      this.buildOption()
    }
  },
  data() {
    return {
      option: {
        xAxis: {
          show: true,
          axisLabel: {
            show: true
          },
          type: 'category',
          boundaryGap: true,
          data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        },
        yAxis: {
          show: true,
          axisLabel: {
            show: true
          },
          axisTick: {
            show: true
          },
          //网格样式
          splitLine: {
            show: false,
            lineStyle:{
              color: '#e4e4e4',
              width: 1,
              type: 'solid'
            }
          },
          type: 'value',
          min: 0, // 设置y轴刻度的最小值
          max: 100,  // 设置y轴刻度的最大值
          splitNumber:2
        },
        title: {
          text: 'CPU使用率',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          // formatter:'{b0}<br />{a0}:{c0}<br />{a1}:{c1}%'
        },
        // legend: {
        //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          top: '16%',
          containLabel: true
        },
        series: [
          // {
          //   showSymbol: false,
          //   smooth: true,
          //   name: 'Email',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [20, 32, 1, 34, 90, 30, 10, 32, 1, 34]
          // },
          // {
          //   showSymbol: false,
          //   smooth: true,
          //   name: 'Union Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [20, 82, 91, 34, 90, 30, 10, 91, 34, 90]
          // },
          // {
          //   showSymbol: false,
          //   smooth: true,
          //   name: 'Video Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [50, 32, 10, 54, 90, 30, 10,32, 10, 54]
          // },
          // {
          //   showSymbol: false,
          //   smooth: true,
          //   name: 'Direct',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [20, 32, 1, 34, 90, 30, 20, 10,32, 10]
          // }
        ]
      }
    }
  },
  methods: {
    buildOption() {
      for (let i = 0; i < this.UsageData.length; i++) {
        this.option.series[i] = {
          showSymbol: false,
          smooth: true,
          // radius: '80%',
          type: 'line',
          data: this.UsageData[i]
        }
      }
      myChart.setOption(this.option)
    },
    myEcharts() {
      myChart = this.$echarts.init(document.getElementById('CpuCategory'));
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          myChart.resize();
        }, 500);
      })
    }
  },
  mounted() {
    this.myEcharts();
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      myChart.resize();
    });
  }
}
</script>
<style scoped>
#CpuCategory {
  width: 100%;
  height: 100%;
}
</style>

