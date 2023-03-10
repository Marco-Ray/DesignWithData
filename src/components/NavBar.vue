<template>
  <div id="nav-bar">
    <div class="logo-container" @click="goHome">
      <img :src="LOGO" alt="logo" class="logo" />
    </div>
    <div class="router-container">
      <router-link to="About">About</router-link>
      <router-link to="Catalogue">Catalogue</router-link>
      <router-link to="Showcase">Showcase</router-link>
      <router-link to="Visit">Visit</router-link>
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
  padding: 10px 32px 0 32px;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 64px);
  height: 100px;
}

.router-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 326px;
  height: 55px;
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

.logo-container {
  width: 160px;
  height: 54px;
  cursor: pointer;
  .logo {
    width: 100%;
  }
}
</style>
