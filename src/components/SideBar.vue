<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <h1 class="title">
      v2ex-vue
    </h1>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedTab" :defaultOpenKeys="['tabs']">

      <a-sub-menu title="Tabs" key="tabs">
        <router-link v-for="(obj, key) in menuItems" :to="obj.link" :key="key">
          <a-menu-item>
            <span class="menu-item">{{key}}</span>
          </a-menu-item>
        </router-link>
      </a-sub-menu>

      <router-link :to="routes.about">
        <a-menu-item>
          <span class="menu-item">About</span>
        </a-menu-item>
      </router-link>

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
  @import "~ant-design-vue/dist/antd.less";
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
