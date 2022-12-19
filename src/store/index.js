import Vue from "vue";
import Vuex from "vuex";

// Modules
import createPersistedState from "vuex-persistedstate";
import auth from "../modules/auth/store/index";
import wallets from "../modules/wallets/store/index";
import virtualAccounts from "../modules/virtualAccounts/store/index";
import exchange from "../modules/exchange/store/index";

Vue.use(Vuex);

const getDefaultState = () => ({});

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    wallets,
    virtualAccounts,
    exchange,
  },
});
