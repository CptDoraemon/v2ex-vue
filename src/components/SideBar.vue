<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <h1 class="title">
      v2ex-vue
    </h1>
    <a-menu theme="dark" mode="inline" :selectedKeys="selected">
      <router-link v-for="(obj, key) in menuItems" :to="obj.link" :key="key">
        <a-menu-item>
          <a-icon type="user" />
          <span class="menu-item">{{key}}</span>
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
    selected: vm => [vm.$route.params.tab]
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
