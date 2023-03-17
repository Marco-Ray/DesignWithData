<template>
  <div class="home">
    <el-scrollbar>
      <particle-p5 id="animation-canvas" @scrollDown="scrollDown"></particle-p5>
      <welcome-view id="main"></welcome-view>
    </el-scrollbar>
    <div class="fast-entry">
      <router-link :to="{ name: 'showcase', params: { track: 'Fashion-Informatics' } }">FASHION INFORMATICS</router-link>
      <router-link :to="{ name: 'showcase', params: { track: 'Design-Ecology' } }">DESIGN ECOLOGIES</router-link>
    </div>
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

.fast-entry {
  position: fixed;
  bottom: 17px;
  left: 32px;
  color: white;
  display: flex;
  column-gap: 13px;
  cursor: pointer;
  a {
    text-decoration: none;
    font-family: Poppins;
    // todo too small
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    color: white;
    &:hover {
      border-bottom: .5px solid white;
    }
  }
  .router-link-active {
    border-bottom: .5px solid white;
  }
}
</style>
