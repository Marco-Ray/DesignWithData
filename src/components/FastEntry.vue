<template>
  <div class="fast-entry">
    <router-link :to="{ path: '/showcase/fashion',
      query: { viewMode: viewMode }}"
    >
      FASHION INFORMATICS
    </router-link>
    <router-link :to="{ path: '/showcase/ecology',
      query: { viewMode: viewMode }}"
    >
      DESIGNING ECOLOGIES
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FastEntry',
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.fast-entry {
  position: absolute;
  bottom: 17px;
  left: 32px;
  height: 68px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  display: flex;
  column-gap: 26px;
  cursor: pointer;
  a {
    text-decoration: none;
    font-family: Helvetica Light;
    font-size: fSizeCalc(12);
    font-weight: normal;
    line-height: fSizeCalc(28);
    text-align: left;
    color: rgb(255, 255, 255);
    &:hover {
      border-bottom: .5px solid white;
    }
  }
  .router-link-active {
    border-bottom: .5px solid white;
  }
}

@media screen and (max-width: 414px) {
  .fast-entry {
    left: wCalcM(16);
    width: wCalcM(100);
    a {
      font-family: Helvetica;
      font-size: fSizeCalc(14);
      font-weight: 400;
      line-height: fSizeCalc(16);
      letter-spacing: fSizeCalc(0.15);
      text-align: left;
      white-space: normal;
    }
  }
}
</style>
