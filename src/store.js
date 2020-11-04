import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import Vue from "vue";
import createLogger from 'vuex/dist/logger'

const postData = {
  namespaced: true,
  state: {
    data: [],
    isLoading: false,
    errorMessage: '',
    sortBy: 'created',
    sortByOptions: ['created', 'replies'],
    sortOrder: 'descending',
    sortOrderOptions: ['ascending', 'descending']
  },
  getters: {
    isError: state => state.errorMessage !== '',
    hasData: state => {
      return state.data.length > 0;
    }
  },
  mutations: {
    startFetching: state => {
      state.data = [];
      state.isLoading = true;
      state.errorMessage = ''
    },
    endFetchingWithData: (state, data) => {
      state.data = cloneDeep(data);
      state.isLoading = false;
    },
    endFetchingWithError: (state, errorMessage) => {
      state.errorMessage = errorMessage;
      state.isLoading = false;
    },
    changeSort: (state, option) => {
      ['sortBy', 'sortOrder'].forEach(key => {
        if (option[key] !== undefined) {
          state[key] = option[key]
        }
      })
    },
    sortData: (state) => {
      const sortOrder = state.sortOrder === 'descending' ? -1 : 1;
      const sortBy = state.sortBy;
      const data = cloneDeep(state.data);
      data.sort((a, b) => (a[sortBy] - b[sortBy]) * sortOrder);
      state.data = data;
    },
    setIsLoading: (state, isLoading) => {
      state.isLoading = isLoading;
    }
  },
  actions: {
    changeSort: ({state, commit, dispatch}, option) => {
      if (state.isLoading) {
        return
      }
      commit('changeSort', option);
      dispatch('_sortData')
    },
    _sortData: ({commit}) => {
      commit('setIsLoading', true);
      setTimeout(() => commit('sortData'));
      setTimeout(() => commit('setIsLoading', false));
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
          dispatch('changeSort', {sortBy: 'created', sortOrder: 'descending'});
          break;
        case 'popular':
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/popular');
          dispatch('changeSort', {sortBy: 'replies', sortOrder: 'descending'});
          break;
        default:
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/new');
          dispatch('changeSort', {sortBy: 'created', sortOrder: 'descending'});
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
