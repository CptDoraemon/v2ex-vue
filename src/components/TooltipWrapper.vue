<template>
  <a-tooltip>
    <template slot="title">
      {{ title }}
    </template>
    <slot>{{'123'}}</slot>
  </a-tooltip>
</template>

<script>
  export default {
    name: 'TooltipWrapper',
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>
