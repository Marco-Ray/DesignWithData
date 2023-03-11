<template>
  <div class="Showcase">
    <nav-bar class="nav"></nav-bar>
    <showcase-cascade></showcase-cascade>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ShowcaseCascade from '@/components/Showcase/ShowcaseCascade';

export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseCascade,
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
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  background-color: black;
}
</style>
