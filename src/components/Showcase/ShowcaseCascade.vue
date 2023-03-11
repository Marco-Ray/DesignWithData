<template>
  <el-scrollbar>
    <div v-for="i in 5" :key="i" class="case">
      {{ i }}
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'ShowcaseCascade',
};
</script>

<style scoped lang="scss">
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
