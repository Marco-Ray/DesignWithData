<template>
  <router-view
    v-slot="{ Component, route }"
  >
    <transition
      :name="route.meta.transitionName"
      mode="out-in"
    >
      <component
        :is="Component"
        :key="route.path"
      />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import '@/styles/mixin.scss';

html, body {
  margin: 0;
  user-select: none;
  font-size: wCalc(16);
  background-color: black;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

// 禁止拖动
img {
  -webkit-user-drag: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

// fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// slide-up transition
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.75s ease-out;
}

.slide-up-enter-to {
  position: absolute;
  bottom: 0;
}

.slide-up-enter-from {
  position: absolute;
  bottom: -100%;
}

.slide-up-leave-to {
  position: absolute;
  top: -100%;
}

.slide-up-leave-from {
  position: absolute;
  top: 0;
}

@media screen and (max-width: 414px) {
  html, body {
   font-size: 16px;
  }
}
</style>
