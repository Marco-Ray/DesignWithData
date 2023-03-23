<template>
  <div id="nav-bar">
    <div class="logo-container" @click="goHome">
      <img :src="LOGO" alt="logo" class="logo" />
    </div>
    <div class="router-container">
      <router-link :to="{ path: '/#main' }">About</router-link>
      <router-link :to="{ name: 'showcase', query: { viewMode: 'carousel' }}">Showcase</router-link>
    </div>
  </div>
</template>

<script>
import LOGO from '@/assets/img/dwd_logo.png';

export default {
  name: 'NavBar',
  data() {
    return {
      LOGO: LOGO,
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

#nav-bar {
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 64px);
  height: 118px;
}

.router-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: wCalc(140);
  height: 55px;
  a {
    font-family: Helvetica Light;
    text-decoration: none;
    font-size: fSizeCalc(16);
    font-weight: normal;
    line-height: fSizeCalc(28);
    text-align: left;
    color: white;
    &:hover {
      font-weight: bolder;
    }
  }
}

.logo-container {
  width: 160px*1.1;
  height: 54px*1.1;
  cursor: pointer;
  .logo {
    width: 100%;
  }
}
</style>
