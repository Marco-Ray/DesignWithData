<template>
  <div id="nav-bar">
    <div class="logo-container" @click="goHome">
      <img :src="LOGO" alt="logo" class="logo" />
    </div>
<!--    <div class="router-container">-->
<!--      <router-link to="/#main">About</router-link>-->
<!--      <router-link :to="{ name: 'showcase', query: { viewMode: 'carousel' }}">Showcase</router-link>-->
<!--    </div>-->
    <el-menu class="el-menu-demo" mode="horizontal" router
             background-color="black"
             text-color="white"
             active-text-color="white"
    >
      <el-menu-item index="1" :route="{ path: '/', hash: '#main' }">About</el-menu-item>
      <el-sub-menu index="2" popper-class="submenu"
                   :teleported="false"
      >
        <template #title>Showcase</template>
        <el-menu-item index="2-1" :route="{ path: '/showcase/fashion', query: { viewMode: viewMode }}">Fashion Informatics</el-menu-item>
        <el-menu-item index="2-2" :route="{ path: '/showcase/ecology', query: { viewMode: viewMode }}">Designing Ecologies</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import LOGO from '@/assets/img/dwd_logo.png';

export default {
  name: 'NavBar',
  // props: {
  //   viewMode: {
  //     type: String,
  //     default: 'carousel'
  //   },
  // },
  data() {
    return {
      LOGO: LOGO,
    };
  },
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
  },
  methods: {
    goHome() {
      this.$router.push('/');
      this.$nextTick(()=>{
        if (document.getElementById('animation-canvas')) {
          document.getElementById('animation-canvas').scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

#nav-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 64px);
  height: 118px;
  z-index: 999;
}

.el-menu-demo {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: wCalc(300);
  border-bottom: unset;
  font-family: Helvetica Light;
  --el-menu-item-font-size: fSizeCalc(16);
  font-weight: normal;
  line-height: fSizeCalc(28);
}
.el-menu--popup {
  .el-menu-item {
    font-family: Helvetica Light;
    font-size: fSizeCalc(12);
    border-bottom: 1px solid white;
  }
}

.el-menu-item:hover {
  font-weight: 800;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: unset;
}

.logo-container {
  width: 160px*1.1;
  height: 54px*1.1;
  cursor: pointer;
  .logo {
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  #nav-bar {
    padding: 0 16px;
  }
  .logo-container {
    width: wCalcM(120);
    height: wCalcM(41);
  }
  .el-meno-demo {
    .mobile {
      display: block;
    }
  }
}
</style>

<style lang="scss">
.el-popper.is-light {
  border: unset !important;
}
.el-menu--popup {
  min-width: unset;
}
.el-menu--horizontal {
  border-bottom: unset !important;
}
</style>
