import request from "@/config/axios";
import createPersistedState from "vuex-persistedstate";

import router from "@/router";

import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

// Vue.prototype.$http = http

const getDefaultState = () => {
  return {
    token: "",
    user: {},
    loggedIn: false,
    loading: false,
    errors: null,
    phone_number_verified: false,
  };
};

export default {
  namespaced: true,
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isAuthenticated: (state) => {
      return state.token;
    },
    isLoggedIn: (state) => {
      return state.loggedIn;
    },
    getUser: (state) => {
      return state.user;
    },
    isLoading: (state) => {
      return state.loading;
    },
    isError: (state) => {
      return state.errors;
    },
    isPhoneVerified: (state) => {
      return state.phone_number_verified;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_LOGGED_IN: (state) => {
      state.loggedIn = true;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_LOADING: (state, data) => {
      state.loading = data;
    },
    SET_ERRORS: (state, data) => {
      state.errors = data;
    },
    REMOVE_ERRORS: (state) => {
      state.errors = null;
    },
    PHONE_NUMBER_VERIFIED: (state) => {
      state.phone_number_verified = true;
    },
    REMOVE_PHONE_NUMBER_VERIFIED: (state) => {
      state.phone_number_verified = false;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    logout({ commit }) {
      commit("SET_LOADING", true);
      request()
        .post("/auth/token/logout/")
        .then((res) => {
          localStorage.clear();
          commit("RESET", "");
          Toastify({
            text: `User Logged Out`,
            className: "info",
            style: {
              background: "#333",
              fontSize: "13px",
              borderRadius: "5px",
              padding: "10px 20px",
            },
            offset: {
              x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
          }).showToast();
          return res;
        })
        .catch((err) => {
          return err;
        })
        .finally(() => {
          window.location.href = "/";
        });
    },
    // User Login
    userLogin({ commit }, payload) {
      commit("SET_LOADING", true);
      request()
        .post("/auth/login", payload)
        .then((res) => {
          console.log(res);
          commit("SET_TOKEN", res.data.data.token);
          commit("SET_USER", res.data.data.user);
          let token = res.data.data.token;
          localStorage.setItem("access_token", token);
          let loggedIn = true;
          commit("SET_LOGGED_IN", loggedIn);
          console.log(res);
          Toastify({
            text: `Welcome back, ${res.data.data.user.first_name} ${res.data.data.user.last_name}`,
            className: "info",
            style: {
              background: "#333",
              fontSize: "15px",
              borderRadius: "5px",
              padding: "10px 20px",
            },
            offset: {
              x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
          }).showToast();
          router.push("/");
        })
        .catch((err) => {
          commit("SET_ERRORS", err.response.data);
          Toastify({
            text: `Email or Password Incorrect!`,
            className: "info",
            style: {
              background: "red",
              fontSize: "13px",
              borderRadius: "5px",
              padding: "10px 20px",
            },
          }).showToast();
        })
        .finally(() => {
          commit("SET_LOADING", false);
        });
    },
    userRegister({ commit }, payload) {
      commit("SET_LOADING", true);
      request()
        .post("auth/register/user", payload)
        .then((res) => {
          router.push("/");
          Toastify({
            text: `Registration Successful`,
            className: "info",
            style: {
              background: "green",
              padding: "0.4rem 0.9rem",
              fontSize: "13px",
              borderRadius: "5px",
            },
          }).showToast();
          return res;
        })
        .catch((err) => {
          console.log(err);
          commit("SET_ERRORS", err.response.data);
          Toastify({
            text: `Error!`,
            className: "info",
            style: {
              background: "red",
            },
          }).showToast();
        })
        .finally(() => {
          commit("SET_LOADING", false);
        });
    },

    verifyPhoneNumber({ commit }, payload) {
      commit("SET_LOADING", true);
      request()
        .post("auth/phone/verify", payload)
        .then((res) => {
          Toastify({
            text: `Token Sent!`,
            className: "info",
            style: {
              background: "green",
              padding: "0.4rem 0.9rem",
              fontSize: "13px",
              borderRadius: "5px",
            },
          }).showToast();
          commit("PHONE_NUMBER_VERIFIED");
          return res;
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          commit("SET_ERRORS", err.response.data.errors.phone_no);
          Toastify({
            text: `Error! Try Again`,
            className: "info",
            style: {
              background: "red",
              padding: "0.4rem 0.9rem",
              fontSize: "13px",
              borderRadius: "5px",
            },
          }).showToast();
        })
        .finally(() => {
          commit("SET_LOADING", false);
        });
    },

    // Confirm Phone Number
    confirmPhoneNumber({ commit }, pin) {
      commit("SET_LOADING", true);
      request()
        .post("auth/phone/verify/check", pin)
        .then((res) => {
          Toastify({
            text: `Phone Number Verified!`,
            className: "info",
            style: {
              background: "green",
              padding: "0.4rem 0.9rem",
              fontSize: "13px",
              borderRadius: "5px",
            },
          }).showToast();
          commit("PHONE_NUMBER_VERIFIED");
          return res;
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          commit("SET_ERRORS", err.response.data.errors);
          Toastify({
            text: `Error! Try Again`,
            className: "info",
            style: {
              background: "red",
              padding: "0.4rem 0.9rem",
              fontSize: "13px",
              borderRadius: "5px",
            },
          }).showToast();
        })
        .finally(() => {
          commit("SET_LOADING", false);
        });
    },
    removeVerification({ commit }) {
      commit("REMOVE_PHONE_NUMBER_VERIFIED");
    },
    removeErrors({ commit }) {
      commit("REMOVE_ERRORS");
    },
  },
};
