<template>
  <div id="echart-Gauge-Ftp"></div>
</template>

<script>
let myChart;
export default {
  name: "echart-Gauge-Ftp",
  data() {
    return {
      option: {
        tooltip: {
          show: true,
          formatter: '{b}<br/> {c}%'
        },
        series: [
          {
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            progress: {
              show: true,
              width: 17,
              itemStyle: {//渐变颜色
                // gradient: ['#e7bcf3', '#e690d1', '#fb7293'],
                color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 1, [{
                  offset: 1,
                  color: '#e7bcf3'
                },
                  {
                    offset: 0,
                    color: '#fb7293'
                  }])
              }
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
                width: 15,
              },
              gradient: ['#e7bcf3', '#e690d1', '#fb7293'],
              localGradient: true
            },
            title: {
              color: '#ffffff',
              offsetCenter: [0, '40%'],
              fontSize: 13,
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                // color: '#5bdbff',
                fontSize: 20,
              },
              color: '#e08a5b',
              valueAnimation: true,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: Math.round(this.UsageData),
                name: 'FTP剩余空间',
              }
            ],
            // animationDuration: 2000,
            // animationCurve: 'easeOutBack',
            // animationEasing: 'cubicInOut'
          }
        ]
      }
    }
  },
  props: {
    UsageData: {
      type: Number,
      default: 70
    }
  },
  watch: {
    UsageData: function () {
      this.option.series[0].data[0].value = Math.round(this.UsageData);
      myChart.setOption(this.option, true);
    }
  },
  methods: {
    myEcharts() {
      myChart = this.$echarts.init(document.getElementById('echart-Gauge-Ftp'));
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
#echart-Gauge-Ftp {
  width: 100%;
  height: 100%;
}
</style>
