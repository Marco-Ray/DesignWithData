<template>
  <div class="Showcase">
    <nav-bar class="nav"></nav-bar>
    <component :is="viewMode==='carousel' ? 'ShowcaseCarousel' : 'ShowcaseGallery'"
               @switchMode="switchMode"
               :Placeholder="Placeholder"
    >
    </component>
    <fast-entry></fast-entry>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ShowcaseCarousel from '@/components/Showcase/ShowcaseCarousel';
import ShowcaseGallery from '@/components/Showcase/ShowcaseGallery';
import FastEntry from '@/components/FastEntry';
import Placeholder from '@/assets/img/Showcase/placeholder.png';


export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseGallery,
    ShowcaseCarousel,
    FastEntry,
    NavBar,
  },
  data() {
    return {
      track: this.$route.meta.track,
      viewMode: this.$route.query.viewMode,
      Placeholder: Placeholder,
    };
  },
  methods: {
    switchMode(mode) {
      this.viewMode = mode;
      this.$router.push({ name: this.$route.meta.track, query: { viewMode: mode }});
    }
  }
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
