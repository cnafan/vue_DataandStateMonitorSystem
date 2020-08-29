<template>
  <div id="main">
    <el-timeline :reverse="false">
      <transition-group name="list">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="activity+index"
          :timestamp="activity.timestamp">
          {{ activity.software }} | {{ activity.content }}
        </el-timeline-item>
      </transition-group>
    </el-timeline>
  </div>
</template>

<script>
import loggerUtils from "../utils/loggerUtils";

export default {
  name: "Logger",
  created() {
    window.addEventListener('setItem', () => {
      this.activities = loggerUtils.getLog();
    });
  },
  data() {
    return {
      activities: loggerUtils.getLog()
    };
  }
};
</script>
<style>
#main {
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


