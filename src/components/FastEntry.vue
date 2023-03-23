<template>
  <div class="fast-entry">
    <router-link :to="{ path: '/showcase/Fashion-Informatics',
      query: { viewMode: viewMode }}"
    >
      FASHION INFORMATICS
    </router-link>
    <router-link :to="{ path: '/showcase/Design-Ecology',
      query: { viewMode: viewMode }}"
    >
      DESIGNING ECOLOGIES
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FastEntry',
  props: {
    viewMode: {
      type: String,
      default: 'carousel'
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.fast-entry {
  position: fixed;
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
    color: rgba(255, 255, 255, 0.85);
    &:hover {
      border-bottom: .5px solid white;
    }
  }
  .router-link-active {
    border-bottom: .5px solid white;
  }
}
</style>
