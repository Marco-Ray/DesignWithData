<template>
  <div class="fast-entry">
    <router-link :to="{ name: 'showcase', params: { track: 'Fashion-Informatics' }, query: { viewMode: 'carousel' }}">FASHION INFORMATICS</router-link>
    <router-link :to="{ name: 'showcase', params: { track: 'Design-Ecology' }, query: { viewMode: 'carousel' }}">DESIGN ECOLOGIES</router-link>
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
