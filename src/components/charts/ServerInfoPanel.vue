<template>
  <!--  <dv-border-box-7>-->
  <div style="display:flex;flex-direction:column;height: 100%;width: 100%">
    <ChartHeader :icon="'el-icon-s-platform'" :title="'服务器运行状态'"></ChartHeader>
    <div style="display: flex;flex: 1;height: 100%">
      <!--        <dv-charts style="flex: 3;height: 100%" :option="option1"/>-->
      <!--      <dv-charts style="flex: 1;height: 100%" :option="option2"/>-->
      <cpu-category :usage-data="propCpuData" style="flex: 3;height: 100%"></cpu-category>
      <echart-gauge-memory style="flex: 1;height: 100%" :usage-data="this.memoryUsage"></echart-gauge-memory>
      <dv-decoration-4 style="width:5px;height:80%;"/>
    </div>

  </div>
  <!--  </dv-border-box-7>-->
</template>

<script>
import ChartHeader from './PanelHeader'
import EchartGaugeMemory from "@/components/charts/echarts/MemoryGauge";
import CpuCategory from "@/components/charts/echarts/CpuCategory";

export default {
  name: 'SystemInfoPanel',
  components: {CpuCategory, EchartGaugeMemory, ChartHeader},
  props: {
    propCpuData: {
      type: Array,
      default: () => [[81.5, 82.8, 89.1, 92.2], [49.3, 43.1, 56.9, 70.8], [21.9, 40.6, 51.6, 46.8], [70.4, 59.4, 82.8, 92.2], [67.6, 64.6, 69.2, 89.2], [45.3, 43.7, 68.8, 71.9], [20.4, 34.4, 43.7, 54.7], [27.7, 58.5, 41.6, 52.3], [21.9, 28.0, 59.3, 67.2], [36.9, 41.6, 41.6, 58.5]]
    },
    propMemoryData: {
      type: Array,
      default: () => [0, 1]
    }
  },
  watch: {
    propCpuData: function () {
      if (this.propCpuData === undefined) {
        // console.log('this.propData', 'undefined')
        return this.option1
      }
      // console.log('this.propCpuData', this.propCpuData)
      this.option1.series = []
      for (let i = 0; i < this.propCpuData.length; i++) {
        let eachCpu = {
          // 1200, 2230, 1900, 2100, 3500, 4200, 3985
          data: this.propCpuData[i],
          type: 'line',
          smooth: true,
          lineStyle: {
            lineWidth: 3
          },
          linePoint: {
            show: false
          }
        }
        this.option1.series.push(eachCpu)
      }
      // this.option1.series[0].data = this.propCpuData[0]
      this.option1 = {...this.option1}
      // console.log('this.option1', this.option1)
    },
    propMemoryData: function () {
      if (this.propMemoryData === undefined) {
        // console.log('this.propData', 'undefined')
        // return this.option2
        return this.memoryUsage;
      }
      this.memoryUsage = Math.round(this.propMemoryData[0] * 100 / this.propMemoryData[1])
      this.option2.series[0].data[0].value = this.propMemoryData[0] * 100 / this.propMemoryData[1]
      this.option2 = {...this.option2}
      // console.log('this.option1', this.option1)
    }
  },
  data() {
    return {
      memoryUsage: 0,
      option1: {
        title: {
          text: '系统cpu使用率',
          style: {
            fill: '#fff',
            fontSize: 17
          }
        },
        xAxis: {
          // show: false,
          // name: '第一周',
          data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          axisLine: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          // show: false,
          name: '使用率',
          data: 'value',
          axisLine: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            show: false,
            style: {
              stroke: '#fff',
              lineWidth: 2
            }
          },
          axisLabel: {
            show: true,
            style: {
              fill: '#fff',
              fontSize: 10
            }
          },
          splitLine: {
            show: false
          },
          splitNumber: 3,
          min: 0,
          max: 100
        },
        series: [
          {
            // 1200, 2230, 1900, 2100, 3500, 4200, 3985
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            type: 'line',
            smooth: true,
            lineStyle: {
              lineWidth: 3
            },
            linePoint: {
              show: false
            }
          }
        ]
      },
      option2: {
        title: {
          text: '系统内存使用率',
          style: {
            fill: '#fff',
            fontSize: 17
          }
        },
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 15,
            data: [
              {
                name: 'itemA',
                value: 65,
                gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
              }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 25
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
