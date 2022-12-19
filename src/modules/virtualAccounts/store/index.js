/* eslint-disable */
import createPersistedState from 'vuex-persistedstate';
import request from '@/config/axios';

// import router from '@/router'

// import "toastify-js/src/toastify.css"
// import Toastify from 'toastify-js'

// Vue.prototype.$http = http

const getDefaultState = () => ({
  loading: false,
  dataSet: null,
});

export default {
  namespaced: true,
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,

  },
  mutations: {
    SET_LOADING_STATUS: (state, data) => {
      state.loading = data;
    },
    SET_DATA: (state, data) => {
      state.dataSet = data.data.data.results;
      state.loading = false;
    },

  },
  actions: {
    create({ commit }, payload) {
      commit('SET_LOADING_STATUS', true);
      request().post('/account/virtual/create', payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          commit('SET_LOADING_STATUS', false);
        });
    },

    list({ commit }, accountId) {
      commit('SET_LOADING_STATUS', true);
      request().get(`/account/virtual/all/${accountId}`)
      // request().get(`/account/virtual/all/${accountId}/page/1`)
        .then((res) => {
          commit('SET_DATA', res);
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    
  },
};
