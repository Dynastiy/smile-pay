import request from "@/config/axios";
import createPersistedState from "vuex-persistedstate";

// import router from '@/router'

// import "toastify-js/src/toastify.css"
// import Toastify from 'toastify-js'

// Vue.prototype.$http = http

const getDefaultState = () => {
  return {
    loading: false,
    wallets: null,
  };
};

export default {
  namespaced: true,
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoading: (state) => {
      return state.loading;
    },
  },
  mutations: {
    SET_LOADING_STATUS: (state, data) => {
      state.loading = data;
    },
    SET_DATA: (state, data) => {
      state.wallets = data.data.data;
      state.loading = false;
    },
  },
  actions: {
    list({ commit }, account_id) {
      commit("SET_LOADING_STATUS", true);
      request()
        .get(`/wallets/view/${account_id}`)
        .then((res) => {
          commit("SET_DATA", res);
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
