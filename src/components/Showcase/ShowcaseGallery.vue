<template>
  <div class="showcase-gallery-container">

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
