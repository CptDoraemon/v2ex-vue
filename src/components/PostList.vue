<template>
  <main-content-wrapper>
    <div class="message-container" v-if="isLoading">
      <a-spin tip="Fetching Posts..." />
    </div>
    <div class="message-container" v-if="isError">
      <a-result status="error" title="Server Error" :sub-title="errorMessage">
        <template #extra>
          <a-button type="primary" @click="fetchData">
            Try Again
          </a-button>
        </template>
      </a-result>
    </div>
    <div class="posts-container" v-if="!isLoading && hasData">
      <div>
        <post-list-options/>
      </div>
      <post-card v-for="(item, index) in data" :key="index" :data="item"/>
    </div>
  </main-content-wrapper>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import PostCard from "./PostCard";
  import MainContentWrapper from "./MainContentWrapper";
  import PostListOptions from "./PostListOptions";

  export default {
    name: 'PostList',
    components: {PostListOptions, MainContentWrapper, PostCard},
    props: {
      tab: String
    },
    computed: {
      ...mapState('postData', ['errorMessage', 'isLoading', 'sortBy', 'data']),
      ...mapGetters('postData', ['isError', 'hasData'])
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
          this.fetchData()
        }
      }
    }
  }
</script>

<style scoped>
  .message-container {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .posts-container {
    width: 100%;
  }
</style>
