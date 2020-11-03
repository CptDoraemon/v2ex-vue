<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <h1 class="title">
      v2ex-vue
    </h1>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedTab" :defaultOpenKeys="collapsed ? null : ['tabs']">

      <a-sub-menu key="tabs">
        <span slot="title">
          <a-icon type="appstore" />
          <span class="menu-item">Tabs</span>
        </span>
        <a-menu-item v-for="(obj, key) in menuItems" :key="key">
          <router-link :to="obj.link">
            <span class="menu-item">{{key}}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item>
        <router-link :to="routes.about">
          <a-icon type="team" />
          <span class="menu-item">About</span>
        </router-link>
      </a-menu-item>

    </a-menu>
  </a-layout-sider>
</template>

<script>
import routes from "../routes";

export default {
  name: 'SideBar',
  components: {},
  data: function() {
    return {
      routes,
      menuItems: {
        new: {
          link: routes.new
        },
        popular: {
          link: routes.popular
        },
      }
    }
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    selectedTab: vm => vm.$route.params.tab === undefined ? [] : [vm.$route.params.tab.toString()]
  }
}
</script>

<style scoped lang="less">
  @import "../theme";
  .title {
    margin: 16px;
    color: @white;
    font-weight: 700;
    text-align: center;
    display: block;
  }
  .menu-item {
    text-transform: capitalize;
  }
</style>
