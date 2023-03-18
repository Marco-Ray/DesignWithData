<template>
  <div class="fast-entry">
    <router-link :to="{ path: '/showcase/Fashion-Informatics', query: { viewMode: 'carousel' }}">FASHION INFORMATICS</router-link>
    <router-link :to="{ path: '/showcase/Design-Ecology', query: { viewMode: 'carousel' }}">DESIGN ECOLOGY</router-link>
  </div>
</template>

<script>
export default {
  name: 'FastEntry',
}
</script>

<style scoped lang="scss">
.fast-entry {
  position: fixed;
  bottom: 17px;
  left: 32px;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  display: flex;
  column-gap: 13px;
  cursor: pointer;
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
</style>
