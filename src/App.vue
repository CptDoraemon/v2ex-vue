<template>
  <a-layout class="layout-root">
    <side-bar :collapsed="isMenuCollapsed"/>
    <a-layout>
      <global-header :collapsed.sync="isMenuCollapsed"/>
      <router-view/>
    </a-layout>
    <a-back-top/>
  </a-layout>
</template>

<script>
  import SideBar from "./components/SideBar";
  import GlobalHeader from "./components/GlobalHeader";
  export default {
    name: 'App',
    components: {
      GlobalHeader,
      SideBar,
    },
    data() {
      return {
        isMenuCollapsed: false,
      };
    },
    created() {
      if (window.innerWidth < 800) {
        this.isMenuCollapsed = true
      }
    }
  }
</script>

<style lang="less">
  @import "theme.less";

  .layout-root {
    min-height: 100vh;
  }
  .ant-back-top {
    bottom: 50px;
    right: 50px;
  }
  @media only screen and (max-width: @screen-md) {
    .ant-back-top {
      bottom: 20px;
      right: 20px;
    }
  }
</style>
