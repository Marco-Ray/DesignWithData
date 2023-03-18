<template>
  <div class="Showcase">
    <nav-bar class="nav"></nav-bar>
    <showcase-carousel></showcase-carousel>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ShowcaseCarousel from '@/components/Showcase/ShowcaseCarousel';

export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseCarousel,
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.Showcase {
  background-color: black;
  height: 100vh;
  color: white;
}

.nav {
}
</style>
