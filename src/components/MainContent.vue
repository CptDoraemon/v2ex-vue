<template>
  <a-layout-content class="content">
    {{this.$route.params.tab}}
  </a-layout-content>
</template>

<script>
  export default {
    name: 'MainContent',
  }
</script>

<style scoped>
  .content {
    background: #fff;
    margin: 16px;
    padding: 16px;
  }
</style>
