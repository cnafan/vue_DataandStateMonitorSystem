<template>
  <el-main>
    <NavSatSignalQuality></NavSatSignalQuality>
  </el-main>
</template>

<script>
import NavSatSignalQuality from "../components/datas/NavSatSignalQuality";

export default {
  name: "Content",
  components: {NavSatSignalQuality}
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

table {
  height: 100%;
  width: 100%;
  border: 1px solid #151515;
}

td {
  text-align: center;
  margin: auto;
}
</style>
