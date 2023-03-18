<template>
  <router-view/>
</template>

<style lang="scss">
@import '@/styles/mixin.scss';

html, body {
  margin: 0;
  user-select: none;
  font-size: wCalc(16);
}

// 禁止拖动
img {
  -webkit-user-drag: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
