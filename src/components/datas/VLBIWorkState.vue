<template>
  <div>
<!--    <p style="text-align: center">工作状态</p>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="receiveTime"
        :label=receiveTimeTitle>
      </el-table-column>
      <el-table-column
        prop="start"
        label="帧始">
      </el-table-column>
    </el-table>
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="counter"
        label="计数器">
      </el-table-column>
      <el-table-column
        prop="hour"
        label="时">
      </el-table-column>
      <el-table-column
        prop="minute"
        label="分">
      </el-table-column>
      <el-table-column
        prop="second"
        label="秒">
      </el-table-column>
      <el-table-column
        prop="millisecond"
        label="毫秒">
      </el-table-column>
      <el-table-column
        prop="end"
        label="数据帧尾">
      </el-table-column>
    </el-table>

    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="kashiStart"
        label="喀什站帧始">
      </el-table-column>
      <el-table-column
        prop="kashiCounter"
        label="喀什站计数器">
      </el-table-column>
      <el-table-column
        prop="kashiHour"
        label="喀什站时">
      </el-table-column>
      <el-table-column
        prop="kashiMinute"
        label="喀什站分">
      </el-table-column>
      <el-table-column
        prop="kashiSecond"
        label="喀什站秒">
      </el-table-column>
      <el-table-column
        prop="kashiMillisecond"
        label="喀什站毫秒">
      </el-table-column>
    </el-table>

    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
<!--      <el-table-column-->
<!--        prop="kashiReverse"-->
<!--        label="喀什站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="kashiAzimuth"
        label="13米喀什站方位角">
      </el-table-column>
      <el-table-column
        prop="kashiPitchAngle"
        label="13米喀什站俯仰角">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="kashiReverse1"-->
<!--        label="喀什站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="kashiTemperature"
        label="13米喀什站制冷系统温度">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="kashiReverse2"-->
<!--        label="喀什站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="kashiEnd"
        label="喀什站帧尾">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>

    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="sanyaStart"
        label="三亚站帧始">
      </el-table-column>
      <el-table-column
        prop="sanyaCounter"
        label="三亚站计数器">
      </el-table-column>
      <el-table-column
        prop="sanyaHour"
        label="三亚站时">
      </el-table-column>
      <el-table-column
        prop="sanyaMinute"
        label="三亚站分">
      </el-table-column>
      <el-table-column
        prop="sanyaSecond"
        label="三亚站秒">
      </el-table-column>
      <el-table-column
        prop="sanyaiMillisecond"
        label="三亚站毫秒">
      </el-table-column>
    </el-table>

    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
<!--      <el-table-column-->
<!--        prop="sanyaReverse"-->
<!--        label="三亚站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="sanyaAzimuth"
        label="13米三亚站方位角">
      </el-table-column>
      <el-table-column
        prop="sanyaPitchAngle"
        label="13米三亚站俯仰角">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="sanyaReverse1"-->
<!--        label="三亚站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="sanyaTemperature"
        label="13米三亚站制冷系统温度">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="sanyaReverse2"-->
<!--        label="三亚站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="sanyaEnd"
        label="三亚站帧尾">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>

    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="jilinStart"
        label="吉林站帧始">
      </el-table-column>
      <el-table-column
        prop="jilinCounter"
        label="吉林站计数器">
      </el-table-column>
      <el-table-column
        prop="jilinHour"
        label="吉林站时">
      </el-table-column>
      <el-table-column
        prop="jilinMinute"
        label="吉林站分">
      </el-table-column>
      <el-table-column
        prop="jilinSecond"
        label="吉林站秒">
      </el-table-column>
      <el-table-column
        prop="jilinMillisecond"
        label="吉林站毫秒">
      </el-table-column>

    </el-table>
    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
<!--      <el-table-column-->
<!--        prop="jilinReverse"-->
<!--        label="吉林站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="jilinAzimuth"
        label="13米吉林站方位角">
      </el-table-column>
      <el-table-column
        prop="jilinPitchAngle"
        label="13米吉林站俯仰角">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="jilinReverse1"-->
<!--        label="吉林站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="jilinTemperature"
        label="13米吉林站制冷系统温度">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="jilinReverse2"-->
<!--        label="吉林站预留">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="jilinEnd"
        label="吉林站帧尾">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SatMixin from '../../mixins/satMixin'
export default {
  name: 'VLBIWorkState',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin]
}
</script>
<style scoped>

</style>
