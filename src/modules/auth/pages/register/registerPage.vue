<template>
  <div>
    <div>
      <div class="main--auth">
        <div class="mb-3 text-center">
          <span class="brand--name">sm:)epay</span>
        </div>
        <div class="auth--form text-center">
          <h6 class="mb-2">Just a few more details</h6>
          <form action="" class="mt-4" @submit.prevent="register">
            <div class="mb-3">
              <div class="d-flex align-items-center" style="gap: 20px">
                <input
                  v-model="payload.first_name"
                  type="text"
                  class="input"
                  placeholder="First Name"
                />
                <input
                  v-model="payload.last_name"
                  type="text"
                  class="input"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center" style="gap: 20px">
                <input
                  v-model="payload.email"
                  type="text"
                  class="input"
                  placeholder="Email Address"
                />
                <input
                  v-model="payload.phone_no"
                  type="tel"
                  class="input"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center" style="gap: 20px">
                <input
                  v-model="payload.username"
                  type="text"
                  class="input"
                  placeholder="Username"
                />
                <input
                  v-model="payload.pin"
                  type="tel"
                  class="input"
                  placeholder="Pin"
                />
              </div>
            </div>
            <div class="mb-3">
              <div class="" style="gap: 20px">
                <!-- <div>
                  {{countries}}
                </div> -->
                <select id="" v-model="payload.country" name="">
                  <option value="" disabled selected>Select Country</option>
                  <option
                    v-for="item in countries"
                    :key="item.id"
                    :value="item.code"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center" style="gap: 20px">
                <select id="" v-model="payload.gender" name="">
                  <option value="" disabled selected>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  v-model="payload.date_of_birth"
                  type="date"
                  class="input"
                  placeholder="Date of Birth"
                />
              </div>
            </div>
            <div class="mb-3">
              <input
                v-model="payload.address"
                type="text"
                class="input"
                placeholder="Address"
              />
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center" style="gap: 20px">
                <input
                  v-model="payload.password"
                  type="text"
                  class="input"
                  placeholder="Password"
                />
                <input
                  v-model="payload.password_confirmation"
                  type="text"
                  class="input"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div class="mb-3">
              <span v-if="loading">
                <i class="el-icon-loading" style="font-size: 23px" />
              </span>
              <button v-else class="primary--btn">Signup</button>
            </div>
            <div class="">
              <small
                >Already have an account?
                <router-link style="color: var(--secondary-color)" to="/login"
                  >Login here</router-link
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
import countries from "@/plugins/call_codes";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      countries,
      type: "password",
      icon: "clarity:eye-line",
      payload: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        // phone_no: localStorage.getItem("phoneNumber"),
        phone_no: "",
        country: "",
        password_confirmation: "",
        pin: "",
        gender: "",
        date_of_birth: "",
        username: "",
        role: "user",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["userRegister"]),
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.icon = "bi:eye-slash";
      } else {
        this.type = "password";
        this.icon = "clarity:eye-line";
      }
    },
    register() {
      this.userRegister(this.payload);
    },
  },
  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
    }),
    phoneNumber() {
      return localStorage.getItem("phoneNumber");
    },
  },
};
</script>
