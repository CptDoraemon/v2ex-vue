import Vuex from 'vuex'
import {cloneDeep} from 'lodash';
import axios from 'axios';
import Vue from "vue";

const postData = {
  namespaced: true,
  state: {
    data: [],
    isLoading: false,
    errorMessage: ''
  },
  getters: {
    isError: state => state.errorMessage !== ''
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
    }
  },
  actions: {
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
          break;
        case 'popular':
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/popular');
          break;
        default:
          dispatch('_fetchData', 'https://www.xiaoxihome.com/api/v2ex/new');
      }
    }
  }
};

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    postData,
  }
});

export default store;
