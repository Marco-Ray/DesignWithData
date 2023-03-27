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
      <el-carousel-item v-for="(item, index) in 10" :key="index">
        <div class="project-img-box">
          <div class="view-more" @click="viewMore(index)">
            <div>View work</div>
            <img :src="IconVector" alt="view more" class="view-more__icon" />
          </div>
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
import IconVector from '@/assets/img/Showcase/icon-vector.svg';
import {mapMutations} from "vuex";

export default {
  name: 'ShowcaseCarousel',
  props: {
    Placeholder: String,
  },
  emits: ['switchMode', 'viewMore'],
  data() {
    return {
      IconGallery: IconGallery,
      IconVector: IconVector,
    };
  },
  methods: {
    ...mapMutations([
      'switchViewMode',
    ]),
    switchMode() {
      this.$store.commit('switchViewMode', 'gallery');
    },
    viewMore(index) {
      this.$emit('viewMore', index);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.showcase-carousel-container {
  margin-top: -20px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Light;
  text-align: center;
  .title {
    font-size: fSizeCalc(36);
    font-weight: normal;
    letter-spacing: 0;
    margin-top: hCalc(28);
    margin-bottom: hCalc(15);
  }
  .members {
    font-size: fSizeCalc(12);
    font-weight: 100;
    line-height: fSizeCalc(24);
    letter-spacing: fSizeCalc(-0.44);
    margin-bottom: hCalc(26);
  }
  .description {
    width: wCalc(781);
    font-size: fSizeCalc(12);
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
      position: relative;
      width: hCalc(506);
      height: hCalc(283);
      .project-img {
        height: 100%;
        width: 100%;
      }
      .view-more {
        display: flex;
        opacity: 0;
        position: absolute;
        bottom: hCalc(30);
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        align-items: center;
        width: fSizeCalc(84);
        height: fSizeCalc(25);
        background-color: black;
        font-family: Helvetica Light;
        font-size: fSizeCalc(12);
        font-weight: 400;
        line-height: fSizeCalc(25);
        letter-spacing: fSizeCalc(-0.44);
        transition: all .5s ease-out;
        cursor: pointer;
        .view-more__icon {
          height: fSizeCalc(18);
          width: fSizeCalc(18);
        }
      }
    }
    ::v-deep .el-carousel__mask {
      z-index: 1;
      opacity: 0.8;
      background-color: rgba(0,0,0,0.8);
    }
  }
  ::v-deep .el-carousel__arrow {
    background-color: rgba(64, 67, 69, 0.7);
  }
}

.el-carousel__item.is-active {
  pointer-events: none;
  .project-img-box {
    pointer-events: auto;
    cursor: default;
  }
  &:hover {
    .view-more {
      opacity: 1;
    }
  }
}

.mode-icon-box {
  position: absolute;
  bottom: 17px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 68px;
  cursor: pointer;
  .mode-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
