import Vuex from 'vuex'
import {cloneDeep} from 'lodash';
import axios from 'axios';
import Vue from "vue";
import createLogger from 'vuex/dist/logger'

const postData = {
  namespaced: true,
  state: {
    rawData: [],
    isLoading: false,
    errorMessage: '',
    sortBy: 'created',
    sortByOptions: ['created', 'replies'],
    sortOrder: 'descending',
    sortOrderOptions: ['ascending', 'descending']
  },
  getters: {
    isError: state => state.errorMessage !== '',
    data: state => {
      const sortOrder = state.sortOrder === 'descending' ? -1 : 1;
      const sortBy = state.sortBy;
      const data = cloneDeep(state.rawData);
      data.sort((a, b) => (a[sortBy] - b[sortBy]) * sortOrder);
      return data
    },
    hasData: state => {
      return state.rawData.length > 0;
    }
  },
  mutations: {
    startFetching: state => {
      state.rawData = [];
      state.isLoading = true;
      state.errorMessage = ''
    },
    endFetchingWithData: (state, data) => {
      state.rawData = cloneDeep(data);
      state.isLoading = false;
    },
    endFetchingWithError: (state, errorMessage) => {
      state.errorMessage = errorMessage;
      state.isLoading = false;
    },
    changeSortBy: (state, newSortBy) => {
      console.log(newSortBy);
      state.sortBy = newSortBy;
    },
    changeSortOrder: (state, newSortOrder) => {
      state.sortOrder = newSortOrder;
    }
  },
  actions: {
    changeSortBy: ({commit}, newSortBy) => {
      commit('changeSortBy', newSortBy);
    },
    changeSortOrder: ({commit}, newSortOrder) => {
      commit('changeSortOrder', newSortOrder);
    },
    _fetchData: async ({commit, state}, url) => {
      try {
        if (state.isLoading) {
          return
        }
        commit('startFetching');
        const res = await axios.get(url);
        commit('endFetchingWithData', res.data.data);
      } catch (e) {
        const message = e.response && e.response.message ? e.response.message : 'Failed to fetch the post data at the moment, please try again later.';
        commit('endFetchingWithError', message);
      }
    },
    fetchData: ({dispatch}, tab) => {
      switch (tab) {
        case 'new':
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/new');
          dispatch('changeSortBy', 'created');
          dispatch('changeSortOrder', 'descending');
          break;
        case 'popular':
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/popular');
          dispatch('changeSortBy', 'replies');
          dispatch('changeSortOrder', 'descending');
          break;
        default:
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/new');
          dispatch('changeSortBy', 'created');
          dispatch('changeSortOrder', 'descending');
      }
    }
  }
};

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    postData,
  },
  plugins: [createLogger()]
});

export default store;
