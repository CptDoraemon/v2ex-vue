<template>
  <a-layout class="layout-root">
    <side-bar :collapsed="collapsed"/>
    <a-layout>
      <global-header :collapsed="collapsed" @toggle-collapsed="toggleCollapsed"/>
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
        collapsed: false,
      };
    },
    methods: {
      toggleCollapsed: function () {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>

<style lang="less">
  @import "theme.less";
  .layout-root {
    min-height: 100vh;
  }
</style>
