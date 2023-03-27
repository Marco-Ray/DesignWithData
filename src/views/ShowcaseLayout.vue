<template>
  <div>
    <nav-bar class="nav"></nav-bar>
    <router-view class="showcase-viewer"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'ShowcaseLayout',
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
