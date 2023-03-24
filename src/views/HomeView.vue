<template>
  <div class="home">
    <el-scrollbar ref="scroll">
      <particle-p5 id="animation-canvas" @scrollDown="scrollDown"></particle-p5>
      <welcome-view id="main"></welcome-view>
    </el-scrollbar>
    <fast-entry></fast-entry>
  </div>
</template>

<script>
// @ is an alias to /src
import ParticleP5 from '@/components/ParticleP5.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import FastEntry from '@/components/FastEntry';

export default {
  name: 'HomeView',
  components: {
    FastEntry,
    ParticleP5,
    WelcomeView,
  },
  data() {
    return {
      scrollDistance: 0,
    };
  },
  methods: {
    scrollDown() {
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
    if (this.$route.hash === '#main') {
      document.getElementById('main').scrollIntoView();
      this.$router.replace('/');
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  scroll-snap-type: y mandatory;
}

#animation-canvas, #main {
  color: white;
  height: 100vh;
  scroll-snap-align: center;
}

::v-deep .el-scrollbar__wrap {
  scroll-snap-type: y mandatory;
}


</style>
