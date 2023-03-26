<template>
  <div class="home">
    <el-scrollbar ref="scroll" @scroll="scrollProxy">
<!--      <div id="animation-canvas">Hello</div>-->
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
      scrollDistance: 0,
    };
  },
  methods: {
    scrollDown() {
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
    },
    scrollProxy(scrollParams) {
      window.pageYOffset = scrollParams.scrollTop;
      window.scrollY = scrollParams.scrollTop;
      if (scrollParams.scrollTop>=document.documentElement.clientHeight) {
        this.$router.replace('/#main');
      } else {
        this.$router.replace('/');
      }
    },
  },
  mounted() {
    if (this.$route.hash === '#main') {
      document.getElementById('main').scrollIntoView();
      // this.$router.replace('/');
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  scroll-behavior: smooth;
}

#animation-canvas, #main {
  color: white;
  height: 100vh;
}


</style>
