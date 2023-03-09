<template>
  <div class="home">
    <el-scrollbar>
      <particle-p5 id="animation-canvas"></particle-p5>
      <welcome-view></welcome-view>
    </el-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import ParticleP5 from '@/components/ParticleP5';
import WelcomeView from '@/views/WelcomeView';

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
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
}

#animation-canvas {
  height: 100vh;
}
</style>
