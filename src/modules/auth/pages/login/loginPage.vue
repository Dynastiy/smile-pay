<template>
  <div>
    <div>
      <div class="main--auth">
        <div class="mb-4 text-center">
          <span class="brand--name">sm:)epay</span>
        </div>
        <div class="auth--form text-center">
          <h5 class="mb-2">Login</h5>
          <small class="text-muted"
            >Please enter you login details to have access to your account
            :)</small
          >
          <form action="" class="mt-5" @submit.prevent="login">
            <div class="mb-3">
              <input
                v-model="credentials.email"
                type="text"
                class="input py-3"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <div class="password--input_field">
                <input
                  v-model="credentials.password"
                  :type="type"
                  placeholder="Password"
                />
                <div role="button" @click="showPassword">
                  <i-icon
                    class="text-secondary"
                    style="font-size: 20px"
                    :icon="icon"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 text-left">
              <small style="color: var(--secondary-color)"
                >Forgot Password?</small
              >
            </div>

            <div class="mb-3">
              <span v-if="loading">
                <i class="el-icon-loading" style="font-size: 23px" />
              </span>
              <button v-else class="primary--btn">Login</button>
            </div>
            <div class="">
              <small
                >Don't have an account?
                <router-link
                  style="color: var(--secondary-color)"
                  to="/user-registration"
                  >Signup here</router-link
                ></small
              >
            </div>
          </form>
        </div>
        <div class="text-center mt-2">
          <small>Terms of Use</small>
          <small>
            <i-icon icon="ci:dot-01-xs" />
          </small>
          <small> Privacy Policy </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      type: "password",
      icon: "clarity:eye-line",
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["userLogin"]),
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.icon = "bi:eye-slash";
      } else {
        this.type = "password";
        this.icon = "clarity:eye-line";
      }
    },
    login() {
      this.userLogin(this.credentials);
    },
  },
  computed: {
    ...mapState("auth", ["loading"]),
  },
};
</script>
