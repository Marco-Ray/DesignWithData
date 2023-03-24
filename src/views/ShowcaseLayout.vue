<template>
  <div>
    <nav-bar class="nav" :viewMode="viewMode"></nav-bar>
    <router-view class="showcase-viewer" @switchMode="switchMode" :viewMode="viewMode"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'ShowcaseLayout',
  components: {
    NavBar,
  },
  data() {
    return {
      viewMode: this.$route.query.viewMode,
    };
  },
  methods: {
    switchMode(mode) {
      this.viewMode = mode;
      this.$router.push({ path: this.$route.path, query: { viewMode: mode }});
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
