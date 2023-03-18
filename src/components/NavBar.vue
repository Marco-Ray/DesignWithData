<template>
  <div id="nav-bar">
    <div class="logo-container" @click="goHome">
      <img :src="LOGO" alt="logo" class="logo" />
    </div>
    <div class="router-container">
      <router-link :to="{ path: '/' }">About</router-link>
      <router-link to="showcase">Showcase</router-link>
      <router-link to="visit">Visit</router-link>
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
  width: 326px;
  height: 55px;
  a {
    text-decoration: none;
    font-family: Helvetica;
    font-size: fSizeCalc(16);
    font-weight: 100;
    line-height: fSizeCalc(28);
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

.logo-container {
  width: 160px;
  height: 54px;
  cursor: pointer;
  .logo {
    width: 100%;
  }
}
</style>
