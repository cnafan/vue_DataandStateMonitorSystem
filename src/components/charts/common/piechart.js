// 这里2个参数，第一个参数是获取装图表盒子的节点，第二参数是配置项图表和数据
import * as echarts from 'echarts'
const myPieChart = (ref) => {
    // 初始化echarts示例对象
    return echarts.init(ref)
// 将配置好的option给echarts示例对象
//     pieViews.setOption(option)
}
export {myPieChart}
