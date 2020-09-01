<template>
  <div id="block">
    <el-timeline :reverse="false">
      <el-timeline-item
        v-for="(activity, index) in datas"
        :timestamp="activity.timestamp"
        :key="activity+index" placement="top">
        <el-card>
          <h4>{{ activity.software }}</h4>
          <p> {{ activity.data }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  props: {
    datas: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  name: 'Logger'
}
</script>
<style>
#block {
  margin-top: 20px;
}

.flip-list-move {
  transition: transform 10ms;
}

.list-enter {
  opacity: 0;
  transform: translateY(100%);
}

.list-enter-active {
  transition: 1s;
}
</style>
