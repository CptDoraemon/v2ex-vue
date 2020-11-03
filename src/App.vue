<template>
  <a-layout class="layout-root">
    <side-bar :collapsed="isMenuCollapsed"/>
    <a-layout>
      <global-header :collapsed.sync="isMenuCollapsed"/>
      <router-view/>
    </a-layout>
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
    }
  }
</script>

<style lang="less">
  @import "theme.less";
  .layout-root {
    min-height: 100vh;
  }
</style>
