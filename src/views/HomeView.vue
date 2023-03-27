<template>
  <div class="home">
    <el-scrollbar ref="scroll" always @scroll="scrollProxy">
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
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      AOS.refresh();
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
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false,
    });
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

<style lang="scss">
.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-scrollbar__bar.is-horizontal {
  display: none;
}

@media screen and (max-width: 375px) {
}
</style>
