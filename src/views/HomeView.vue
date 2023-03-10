<template>
  <div class="home">
    <el-scrollbar>
      <particle-p5 id="animation-canvas" @scrollDown="scrollDown"></particle-p5>
      <welcome-view id="main"></welcome-view>
    </el-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import ParticleP5 from '@/components/ParticleP5.vue';
import WelcomeView from '@/views/WelcomeView.vue';

export default {
  name: 'HomeView',
  components: {
    ParticleP5,
    WelcomeView,
  },
  data() {
    return {
    };
  },
  methods: {
    scrollDown() {
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  scroll-snap-type: y mandatory;
}

#animation-canvas, #main {
  height: 100vh;
  scroll-snap-align: center;
}

::v-deep .el-scrollbar__wrap {
  scroll-snap-type: y mandatory;
}
</style>
