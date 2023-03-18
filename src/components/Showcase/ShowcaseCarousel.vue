<template>
  <div class="showcase-carousel-container">
    <div class="info">
      <div class="title">Dynamic Moth</div>
      <div class="members">Teammate, Teammate, Teammate</div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'ShowcaseCascade',
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.info {
  font-family: Helvetica;
  text-align: center;
  .title {
    font-size: fSizeCalc(32);
    font-weight: normal;
    line-height: 44px;
    letter-spacing: 0;
  }
  .members {
    font-size: fSizeCalc(14);
    font-weight: 100;
    line-height: 44px;
    letter-spacing: -0.4399999976158142px;
  }
}

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
