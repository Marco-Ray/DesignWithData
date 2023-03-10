<template>
  <div class="Showcase">
    <nav-bar class="nav"></nav-bar>
    <el-scrollbar>
        <div v-for="i in 5" :key="i" class="case">
          {{ i }}
        </div>
    </el-scrollbar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'ShowcaseView',
  components: {
    NavBar
  },
};
</script>

<style scoped lang="scss">
.Showcase {
  background-color: black;
  height: 100vh;
  color: white;
}

.nav {
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  background-color: black;
}

.el-scrollbar {
  height: calc(100vh - 120px);
}

.case {
  height: calc(100vh - 120px);
  scroll-snap-align: center;
}

::v-deep .el-scrollbar__wrap {
  scroll-snap-type: y mandatory;
}
</style>
