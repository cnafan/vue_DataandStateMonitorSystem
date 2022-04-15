<template>
  <div id="Nightingale"></div>
</template>
<script>
let myChart;
export default {
  name: "NightingaleChart",
  props: {
    UsageData: {
      type: Array
    }
  },
  watch: {
    UsageData() {
      this.option.series[0].data= this.UsageData;
      myChart.setOption(this.option, true);
    }
  },
  data(){
    return{
      option: {
        legend: {
          show:false,
          bottom: '5%',
          left: 'center',
          textStyle: {
            color: '#fcfcfc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '各个分系统数据占比饼图',
            type: 'pie',
            center: ['50%', '40%'],
            // radius: [70, 100],
            radius: [0, 100],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            // label: {
            //   show: false,
            //   position: 'center'
            // },
            // labelLine: {
            //   show: true
            // },
            // avoidLabelOverlap: true,
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '15',
            //     fontWeight: 'bold'
            //   }
            // },
            data: [
              {value: 40, name: '系统管理控制软件'},
              {value: 38, name: '卫星综合管理软件'},
              {value: 32, name: '状态监测及告警软件'},
              {value: 30, name: 'VLBI站控软件'},
              {value: 28, name: '原子钟信号监测软件'},
              {value: 26, name: 'GNSS时差数据处理软件'}
            ]
          }
        ]
      }
    }
  },
  methods: {
    myEcharts() {
      myChart = this.$echarts.init(document.getElementById('Nightingale'));
      //配置图表
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          myChart.resize();
        }, 500);
      })
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      myChart.resize();
    });
  },
  mounted() {
    this.myEcharts();
  }
}
</script>
<style scoped>
</style>

