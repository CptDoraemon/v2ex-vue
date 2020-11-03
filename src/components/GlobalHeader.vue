<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="$emit('update:collapsed', !collapsed)"
    />
  </a-layout-header>
</template>

<script>
  export default {
    name: 'GlobalHeader',
    components: {},
    props: {
      collapsed: Boolean,
    },
  }
</script>

<style scoped lang="less">
  @import '../theme';

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: @primary-color;
  }
</style>
