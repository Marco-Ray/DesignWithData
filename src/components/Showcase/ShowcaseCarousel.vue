<template>
  <div class="showcase-carousel-container">
    <div class="info">
      <div class="title">Dynamic Moth</div>
      <div class="members">Teammate, Teammate, Teammate</div>
      <div class="description">It makes use of its location to focus on how the nature,
        quality and potential of the interior can be developed.
        The Studio is central to such considerations.
        It is a place where we discuss,
        develop and define that which surrounds us.
      </div>
    </div>
    <el-carousel :interval="4000" type="card" :autoplay="false" trigger="click">
      <el-carousel-item v-for="item in 6" :key="item">
        <div class="project-img-box">
          <img :src="Placeholder" alt="student project image" class="project-img">
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="mode-icon-box" @click="switchMode">
      <img :src="IconGallery" alt="switch to gallery mode" class="mode-icon">
    </div>
  </div>
</template>

<script>
import IconGallery from '@/assets/img/Showcase/icon-gallery.png';

export default {
  name: 'ShowcaseCarousel',
  props: {
    Placeholder: String,
  },
  emits: ['switchMode'],
  data() {
    return {
      // TODO load data
      IconGallery: IconGallery,
    };
  },
  methods: {
    switchMode() {
      this.$emit('switchMode', 'gallery');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  text-align: center;
  .title {
    font-size: fSizeCalc(32);
    font-weight: normal;
    letter-spacing: 0;
    margin-top: hCalc(28);
    margin-bottom: hCalc(15);
  }
  .members {
    font-size: fSizeCalc(14);
    font-weight: 100;
    line-height: fSizeCalc(24);
    letter-spacing: fSizeCalc(-0.44);
    margin-bottom: hCalc(26);
  }
  .description {
    width: wCalc(781);
    font-family: Helvetica;
    font-size: fSizeCalc(14);
    font-weight: 100;
    line-height: fSizeCalc(23);
    letter-spacing: fSizeCalc(0.15);
    text-align: center;
    margin-bottom: 44px;
  }
}

.el-carousel {
  ::v-deep .el-carousel__container {
    height: hCalc(285);
  }
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    .project-img-box {
      width: hCalc(506);
      height: hCalc(283);
      border: 1px solid white;
      .project-img {
        height: 100%;
        width: 100%;
      }
    }
    ::v-deep .el-carousel__mask {
      background-color: transparent;
    }
  }
  ::v-deep .el-carousel__arrow {
    background-color: rgb(31, 45, 61);
  }
}

.mode-icon-box {
  position: absolute;
  bottom: 22px;
  right: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  .mode-icon {
    width: 100%;
    height: 100%;
  }
}
</style>
