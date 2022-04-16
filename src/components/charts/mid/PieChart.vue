<template>
  <div class="split-system-board">
    <div ref="pie1" class="each-system-graph"></div>
    <div ref="pie2" class="each-system-graph"></div>
    <div ref="pie3" class="each-system-graph"></div>
    <div ref="pie4" class="each-system-graph"></div>
    <div ref="pie5" class="each-system-graph"></div>
    <div ref="pie6" class="each-system-graph"></div>
  </div>
</template>
<script>
import {myPieChart} from "@/components/charts/common/piechart";

let pie1;
let pie2;
let pie3;
let pie4;
let pie5;
let pie6;
export default {
  name: "PieChart",
  props: {
    UsageData1: {
      type: Array
    },
    UsageData2: {
      type: Array
    },
    UsageData3: {
      type: Array
    },
    UsageData4: {
      type: Array
    },
    UsageData5: {
      type: Array
    },
    UsageData6: {
      type: Array
    },
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    title3: {
      type: String,
      default: ''
    },
    title4: {
      type: String,
      default: ''
    },
    title5: {
      type: String,
      default: ''
    },
    title6: {
      type: String,
      default: ''
    },
  },
  watch: {
    UsageData1() {
      this.option1.series[0].data = this.UsageData1;
      pie1.setOption(this.option1, true);
    },
    UsageData2() {
      this.option2.series[0].data = this.UsageData2;
      pie2.setOption(this.option2, true);
    },
    UsageData3() {
      this.option3.series[0].data = this.UsageData3;
      pie3.setOption(this.option3, true);
    },
    UsageData4() {
      this.option4.series[0].data = this.UsageData4;
      pie4.setOption(this.option4, true);
    },
    UsageData5() {
      this.option5.series[0].data = this.UsageData5;
      pie5.setOption(this.option5, true);
    },
    UsageData6() {
      this.option6.series[0].data = this.UsageData6;
      pie6.setOption(this.option6, true);
    },
  },
  data() {
    return {
      option1: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title1,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
      option2: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title2,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
      option3: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title3,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
      option4: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title4,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
      option5: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title5,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
      option6: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.title6,
          x: 'center',
          y: '85%',
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 18,
            color: "#f5f5f5",
          },
        },
        legend: {
          show: false,
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      },
    }
  },
  methods: {
    myEcharts() {
      pie1 = myPieChart(this.$refs.pie1);
      pie2 = myPieChart(this.$refs.pie2);
      pie3 = myPieChart(this.$refs.pie3);
      pie4 = myPieChart(this.$refs.pie4);
      pie5 = myPieChart(this.$refs.pie5);
      pie6 = myPieChart(this.$refs.pie6);
      pie1.setOption(this.option1, true)
      pie2.setOption(this.option2, true)
      pie3.setOption(this.option3, true)
      pie4.setOption(this.option4, true)
      pie5.setOption(this.option5, true)
      pie6.setOption(this.option6, true)
      window.addEventListener("resize", () => {
        setTimeout(() => {
          pie1.resize();
          pie2.resize();
          pie3.resize();
          pie4.resize();
          pie5.resize();
          pie6.resize();
        }, 500);
      })
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      pie1.resize();
      pie2.resize();
      pie3.resize();
      pie4.resize();
      pie5.resize();
      pie6.resize();
    });
  },
  mounted() {
    this.myEcharts();
  }
}
</script>
<style lang="scss" scoped>

.split-system-board {
  width: 100%;
  height: 100%;
  min-height: 250px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  .each-system-graph {
    width: 33%;
    //min-width: 200px;
    flex: 33%;
    height:200px;
    //max-height: 200px;
  }

}

/*.pie-chart-item {*/
/*  height: 30%;*/
/*}*/
</style>

