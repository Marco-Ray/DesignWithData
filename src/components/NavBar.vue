<template>
  <div id="nav-bar">
    <router-link to="About">About</router-link>
    <router-link to="Visit">Visit</router-link>
    <router-link to="Catalogue">Exhibition Catalogue</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped lang="scss">
#nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  column-gap: 35px;
  width: 100%;
  height: 100px;
  a {
    text-decoration: none;
    font-family: Poppins;
    // todo too small
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    color: white;
  }
}
</style>
