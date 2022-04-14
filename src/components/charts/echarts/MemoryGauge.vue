<template>
  <div id="echart-Gauge-memory"></div>
</template>

<script>
let myChart;
export default {
  name: "echart-Gauge-memory",
  data(){
    return {
      option: {
        series: [
          {
            type: 'gauge',
            tooltip: {
              show: true,
              formatter: '{a} <br/>{b} : {c}%'
            },
            radius: '80%',
            center: ['50%', '50%'],
            progress: {
              show: true,
              width: 17
            },
            axisTick: {
              show: false
            },
            splitLine: {
              distance: 2,
              length: 5,
              lineStyle: {
                width: 2
              }
            },
            axisLabel: {
              show: false,
              color: '#999',
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 15
              }
            },
            title: {
              color: '#ffffff',
              offsetCenter: [0, '35%'],
              fontSize: 13,
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                fontSize: 20,
              },
              color: '#e08a5b',
              valueAnimation: true,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: 0,
                name:'内存使用率'
              }
            ],
            animationDuration: 5000,
            animationEasing: 'cubicInOut',
          }
        ]
      }
    }
  },
  props:{
    UsageData: {
      type: Number,
      default: 70
    }
  },
  watch:{
    UsageData:function (){
      this.option.series[0].data[0].value=100-this.UsageData;
      // myChart.clear();
      myChart.setOption(this.option,true);
    }
  },
  methods: {
    myEcharts() {
      myChart = this.$echarts.init(document.getElementById('echart-Gauge-memory'));
      myChart.setOption(this.option,true);
      myChart.resize();
      window.addEventListener("resize", () => {
        setTimeout(() => {
          myChart.resize();
        }, 500);
      })
    },
    beforeDestroy() {
      window.removeEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.myEcharts();
    this.beforeDestroy();
  }
}
</script>

<style scoped>
#echart-Gauge-memory {
  width: 100%;
  height: 100%;
}
</style>
