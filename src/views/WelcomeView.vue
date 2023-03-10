<template>
  <div class="welcome">
<!--    Nav-->
    <nav-bar class="nav"></nav-bar>

<!--    Content-->
<!--      Fashion-->
    <div class="fashion">
      <div class="title">Fashion <br/> Informatics</div>
    </div>
<!--      Ecology-->
    <div class="ecology">
      <div class="title">Design <br/> Ecology</div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'WelcomeView',
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.welcome {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.fashion, .ecology {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  width: 50%;
  height: 100vh;
  // todo adjust layout
  justify-content: center;
  .title {
    font-family: Yeseva One;
    font-size: 80px;
    font-weight: 400;
    line-height: 95px;

    display: flex;
    text-align: start;
    text-transform: uppercase;
  }
}

.fashion {
  background-color: black;
  //background-image: url("@/assets/img/HomeView/bg-fashion.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-right: 0.5px solid rgba(255, 255, 255, 0.3);
  .title, .description {
    color: white;
  }
}
.ecology {
  background-color: black;
  //background-image: url("@/assets/img/HomeView/bg-ecology.png");
  background-size: cover;
  background-repeat: no-repeat;
  .title, .description {
    color: white;
  }
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
