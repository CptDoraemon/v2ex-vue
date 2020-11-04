<template>
  <div class="root">
    <div class="select-group">
      <span>
        Sort by:
      </span>
      <a-select :value="sortBy" @change="(value) => changeSort({sortBy: value})" :style="selectStyle" :dropdownStyle="optionStyle">
        <a-select-option v-for="option in sortByOptions" :value="option" :key="option">
          {{option}}
        </a-select-option>
      </a-select>
    </div>
    <div class="select-group">
      <span>
        Sort order:
      </span>
      <a-select :value="sortOrder" @change="(value) => changeSort({sortOrder: value})" :style="selectStyle" :dropdownStyle="optionStyle">
        <a-select-option v-for="option in sortOrderOptions" :value="option" :key="option">
          {{option}}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from "vuex";

  export default {
    name: 'PostListOptions',
    data: function() {
      return {
        selectStyle: {
          minWidth: '150px',
          textTransform: 'capitalize'
        },
        optionStyle: {
          textTransform: 'capitalize'
        }
      }
    },
    computed: {
      ...mapState('postData', ['sortBy', 'sortByOptions', 'sortOrder', 'sortOrderOptions']),
    },
    methods: {
      ...mapActions('postData', ['changeSort']),
    }
  }
</script>

<style scoped lang="less">
  @import "../theme.less";

  .root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 16px;
    width: calc(100% - 32px);
  }
  .select-group {
    margin: 0 16px 0 0;
  }
  .select-group span {
    margin: 0 8px 0 0;
    text-transform: capitalize;
  }
  @media only screen and (max-width: @screen-md) {
    .root {
      flex-direction: column;
      align-items: flex-start;
      margin: 8px 16px;
    }
    .select-group {
      margin: 4px 0;
    }
  }
</style>
