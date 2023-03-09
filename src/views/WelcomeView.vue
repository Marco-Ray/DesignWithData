<template>
  <div class="welcome">
    <div class="fashion">Fashion</div>
    <div class="ecology">Ecology</div>
  </div>
</template>

<script>

export default {
  name: "WelcomeView"
}
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.fashion, .ecology {
  width: 50%;
  height: 100vh;
}

.fashion {
  background-color: #6E5596;
  background-image: url("@/assets/img/WelcomeView/bg-fashion.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.ecology {
  background-color: #C6DE70;
  background-image: url("@/assets/img/WelcomeView/bg-ecology.png");
  background-size: cover;
  background-repeat: no-repeat;

}
</style>
