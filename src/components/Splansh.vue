<template xmlns:sketch="http://java.sun.com/xml/ns/j2ee">
  <div>
    <!--  <div id="content">-->
    <!--    <el-card class="box-card" id="card">-->
    <!--      <div slot="header" class="clearfix">-->
    <!--        <span>卡片名称</span>-->
    <!--        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
    <!--      </div>-->
    <!--      <div v-for="o in 4" :key="o" class="text item">-->
    <!--        {{ '列表内容 ' + o }}-->
    <!--      </div>-->
    <!--    </el-card>-->
    <!--  </div>-->
    <!--  <div style="text-align:center;clear:both">-->
    <!--    <script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>-->
    <!--    <script src="/follow.js" type="text/javascript"></script>-->
    <!--  </div>-->

<!--    <div class="graph__wrapper" id="containerGF">-->
<!--      <div class="coordinates">-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--      </div>-->
<!--      <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1">-->
<!--        <defs>-->
<!--          <linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="linearGradient-1">-->
<!--            <stop stop-color="#2090F8" offset="0%"></stop>-->
<!--            <stop stop-color="#01FCE4" offset="41.7610013%"></stop>-->
<!--            <stop stop-color="#0BFF8C" offset="78.6870217%"></stop>-->
<!--            <stop stop-color="#51FF00" offset="100%"></stop>-->
<!--          </linearGradient>-->
<!--        </defs>-->
<!--        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">-->
<!--          <path-->
<!--            d="M2.10546875,95.75 L40.5546875,68.3476562 L55.2109375,81.1796875 L65.2148437,76.3945312 L96.1835937,86.8320312 L131.023438,19.9414062 L142.15625,23.7226562 L183.605469,2.1953125 L211.007812,22.3320312 L234.320312,71.5664062 L234.667969,83.0039062 L244.019531,83.0039062 L247.105469,88.8320312 L312.695312,104.839844"-->
<!--            id="Path-1" stroke="url(#linearGradient-1)" stroke-width="4" sketch:type="MSShapeGroup" class="path"></path>-->
<!--        </g>-->
<!--      </svg>-->
<!--    </div>-->

<!--    <div id="container"></div>-->

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
<!--        <h3 class="medium">{{ item }}</h3>-->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Splansh'
}
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
