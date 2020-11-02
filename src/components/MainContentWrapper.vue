<template>
  <a-layout-content class="content">
    <slot/>
  </a-layout-content>
</template>

<script>
  export default {
    name: 'MainContentWrapper',
  }
</script>

<style scoped>
  .content {
    margin: 8px;
    width: calc(100% - 16px);
  }
</style>
