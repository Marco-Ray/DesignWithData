<template>
  <div class="showcase-gallery-container">
    <div class="title">{{ track === 'fashion' ? 'Fashion Informatics': 'Design Ecology'}} Student Project</div>
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
      <div class="description" v-if="info">
        {{ info.description }}
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
    info: Object,
  },
  emits: ['switchMode'],
  data() {
    return {
      track: this.$route.meta.track,
      IconCarousel: IconCarousel,
    };
  },
  methods: {
    switchMode() {
      this.$emit('switchMode', 'carousel');
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-gallery-container {
  margin: 0 32px;
}

.title {
  margin: hCalc(24) 0;
  font-family: Helvetica Light;
  font-size: fSizeCalc(24);
  font-weight: normal;
  letter-spacing: fSizeCalc(-0.44);
  text-align: left;
}

// todo
.description {
  width: wCalc(357);
  font-family: Helvetica Light;
  font-weight: 100;
  font-size: fSizeCalc(13);
  line-height: fSizeCalc(23);
}

.project__view {
  height: calc(100vh - 200px - hCalc(91));
  display: flex;
  flex-direction: row;
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
    // todo click event
    cursor: pointer;
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
      background-color: rgba(0, 0, 0, 0.7);

      font-family: Helvetica Light;
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
