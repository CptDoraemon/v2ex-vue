<template>
  <div class="root">
    <div class="header">
      <h2 class="title">
        {{ data.title }}
      </h2>
    </div>
    <div class="content">
      {{ data.content }}
    </div>
    <div class="details">
      <div class="details-item">
        <tooltip-wrapper title="tag">
          <div class="tag" aria-label="tag">
            {{ data.node.title }}
          </div>
        </tooltip-wrapper>
      </div>
      <div class="details-item">
        <div class="avatar">
          <img :src="data.member.avatar_large"/>
          <tooltip-wrapper title="username">
            <span aria-label="username">
              {{ data.member.username }}
            </span>
          </tooltip-wrapper>
        </div>
      </div>
      <div class="details-item">
        <tooltip-wrapper title="created">
          <span aria-label="created"> {{ getTimeString(data.created) }} </span>
        </tooltip-wrapper>
      </div>
      <div class="details-item">
        <tooltip-wrapper title="replies">
          <a class="replies" aria-label="replies" :href="data.url" target="_blank" rel="noopener noreferrer">
            {{ data.replies }}
          </a>
        </tooltip-wrapper>
      </div>
    </div>
  </div>
</template>

<script>

  import TooltipWrapper from "./TooltipWrapper";
  export default {
    name: 'PostCard',
    components: {TooltipWrapper},
    props: {
      data: Object
    },
    methods: {
      getTimeString(seconds) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(seconds * 1000);
        const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} - ${hour}:${minute}`
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../theme";

  .root {
    background-color: #fff;
    margin: 16px;
    padding: 16px;
    width: calc(100% - 32px);
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .title {
    font-weight: 700;
  }
  .title, .content {
    display: inline-block;
    word-wrap: break-word;
    box-sizing: border-box;
    width: 100%;
  }
  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 8px 0;
  }
  .details-item {
    padding-right: 16px;
  }
  .avatar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .avatar img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .avatar span {
    font-weight: 700;
  }
  .tag {
    background-color: #eee;
    padding: 0 8px;
  }
  .replies {
    background-color: @primary-color;
    color: #fff;
    padding: 2px 12px;
    font-size: @font-size-sm;
    border-radius: 5px;
  }
  .replies:hover {
    background-color: @primary-color;
    color: #fff;
    opacity: 0.8;
  }
</style>
