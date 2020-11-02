<template>
  <a-layout-content class="content">
    <div class="message-container" v-if="isLoading">
      <a-spin tip="Fetching Posts..." />
    </div>
    <div class="message-container" v-if="isError">
      <a-result status="error" title="Server Error" :sub-title="errorMessage" />
    </div>
    <post-card v-for="(item, index) in data" :key="index" :data="item"/>
  </a-layout-content>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import PostCard from "./PostCard";

  export default {
    name: 'MainContent',
    components: {PostCard},
    computed: {
      ...mapState('postData', ['data', 'errorMessage', 'isLoading']),
      ...mapGetters('postData', ['isError']),
      tab: vm => vm.$route.params.tab
    },
    methods: {
      fetchData() {
        this.$store.dispatch("postData/fetchData", this.tab);
      }
    },
    mounted() {
      this.fetchData();
    },
    watch: {
      tab: function(val, oldVal) {
        if (val !== oldVal) {
          this.fetchData();
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    background: #fff;
    margin: 16px;
    padding: 16px;
  }
  .message-container {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
