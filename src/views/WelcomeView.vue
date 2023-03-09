<template>
  <div class="welcome">
<!--    Nav-->
    <nav-bar></nav-bar>

<!--    Content-->
<!--      Fashion-->
    <div class="fashion">
      <div class="title">Fashion <br/> Informatics</div>
      <div class="description">
        We made           and
        <br/>
        for Flocktory
        <br/>
        Space theme in it reflects the planetary scale of the business and its limitless possibilities
      </div>
    </div>
<!--      Ecology-->
    <div class="ecology">
      <div class="title">Design <br/> Ecology</div>
      <div class="description">
        We made           and
        <br/>
        for Flocktory
        <br/>
        Space theme in it reflects the planetary scale of the business and its limitless possibilities
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'WelcomeView',
  components: {
    NavBar,
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.welcome {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.fashion, .ecology {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  width: 50%;
  height: 100vh;
  // todo adjust layout
  justify-content: center;
  .title {
    font-family: 'Yeseva One';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    /* or 100% */

    display: flex;
    text-align: start;
    text-transform: uppercase;
  }
  .description {
    margin-top: hCalc(50);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: hCalc(42);
    /* or 175% */

    display: flex;
    text-align: start;
  }
}

.fashion {
  background-color: #6E5596;
  background-image: url("@/assets/img/WelcomeView/bg-fashion.png");
  background-size: cover;
  background-repeat: no-repeat;
  .title, .description {
    color: #9DFC4E;
  }
}
.ecology {
  background-color: #C6DE70;
  background-image: url("@/assets/img/WelcomeView/bg-ecology.png");
  background-size: cover;
  background-repeat: no-repeat;
  .title, .description {
    color: #AE62EA;
  }
}
</style>
