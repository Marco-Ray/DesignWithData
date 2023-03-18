<template>
  <div class="showcase-gallery-container">
    <div class="title">Student Project</div>
    <div class="project__view">
      <el-scrollbar>
        <div class="project__grid">
          <div v-for="item in 26" :key="item" class="project">
            <div class="project__mask">
              <div class="project-name">Dynamic Moth</div>
              <div class="project-member">Teammate, Teammate, Teammate</div>
            </div>
            <img :src="Placeholder" alt="student project image" class="project-img">
          </div>
        </div>
      </el-scrollbar>
      <div class="description">
        It makes use of its location to focus on how the nature,
        quality and potential of the interior can be developed.
        The Studio is central to such considerations.
        It is a place where we discuss, develop and define that which surrounds us.
        It is a place where we talk, make, draw and show.
        It is a place where we reveal how the world we hope to inhabit might appear,
        how it might feel and how it might be.
      </div>
    </div>

    <div class="mode-icon-box" @click="switchMode">
      <img :src="IconCarousel" alt="switch to gallery mode" class="mode-icon">
    </div>
  </div>
</template>

<script>
import IconCarousel from '@/assets/img/Showcase/icon-carousel.png';

export default {
  name: 'ShowcaseGallery',
  props: {
    Placeholder: String,
  },
  emits: ['switchMode'],
  data() {
    return {
      IconCarousel: IconCarousel,
    };
  },
  methods: {
    switchMode() {
      this.$emit('switchMode', 'carousel');
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-gallery-container {
  margin: 0 32px;
}

.title {
  margin: hCalc(32) 0;
  font-family: Helvetica;
  font-size: fSizeCalc(24);
  font-weight: normal;
  letter-spacing: fSizeCalc(-0.44);
  text-align: left;
}

.project__view {
  height: calc(100vh - 200px - hCalc(91));
  display: grid;
  grid-template-columns: 1fr wCalc(357);
  gap: wCalc(32);
}

.project__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: wCalc(24);
  justify-content: center;
  align-items: center;
  .project {
    position: relative;
    width: wCalc(169);
    height: wCalc(169);
    &:hover {
      .project__mask {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .project__mask {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #999999;

      font-family: Helvetica;
      font-weight: normal;
      line-height: fSizeCalc(23);
      letter-spacing: fSizeCalc(0.15);
      text-align: center;
      .project-name {
        font-size: fSizeCalc(16);
      }
      .project-member {
        font-size: fSizeCalc(12);
      }
    }
    .project-img {
      width: 100%;
      height: 100%;
    }
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
