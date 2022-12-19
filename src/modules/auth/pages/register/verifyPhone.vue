<template>
  <div>
    <div>
      <div class="main--auth">
        <div class="mb-4 text-center">
          <span class="brand--name">sm:)epay</span>
        </div>
        <div class="auth--form text-center">
          <h5 class="mb-2">Signup</h5>
          <small class="text-muted"
            >Please provide your phone no. below :)</small
          >
          <form action="" class="mt-5" @submit.prevent="verifyPhone">
            <!-- {{ call_codes }} -->
            <!-- <div>
              {{ call_codes }}
            </div> -->
            <select name="" id="" v-model="payload.call_code" class="mb-4">
              <option value="" selected disabled>Select Country</option>
              <option
                v-for="item in call_codes"
                :key="item.id"
                :value="item.dial_code"
              >
                {{ item.name }}
              </option>
            </select>

            <div class="mb-5">
              <div class="d-flex" style="border-radius: 10px; gap: 10px">
                <input
                  type="tel"
                  style="width: 15%"
                  readonly
                  class="input"
                  v-model="payload.call_code"
                  placeholder="code"
                />
                <input
                  type="tel"
                  class="input"
                  placeholder="Enter your Phone Number"
                  v-model="payload.phone_no"
                  @keyup="removeErrors"
                />
              </div>
              <div class="text-left">
                <small class="text-danger" v-for="error in err" :key="error.id">
                  *{{ error }}
                </small>
              </div>
            </div>
            <div class="mb-3">
              <span v-if="loading">
                <i class="el-icon-loading" style="font-size: 23px"></i>
              </span>
              <button v-else class="primary--btn">Signup</button>
            </div>
            <div class="">
              <small
                >Already have an account?
                <router-link style="color: var(--secondary-color)" to="/"
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

    <!-- Verify Phone Number Modal -->
    <VerifyPhoneNumber
      v-show="verifyPhoneNumber"
      @close="closeModal"
      @almostDone="goToAlmostDone"
    />

    <!-- Almost Done  -->
    <AlmostDone v-show="almostDone" />
  </div>
</template>
<script>
// import countries from 'countries-db'
import call_codes from "@/plugins/call_codes";
import VerifyPhoneNumber from "../../modals/verifyPhoneNumber.vue";
import AlmostDone from "../../modals/almostDone.vue";
export default {
  data() {
    return {
      type: "password",
      icon: "clarity:eye-line",
      payload: {
        phone_no: "",
        call_code: "",
      },
      almostDone: false,
      call_codes: call_codes,
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.icon = "bi:eye-slash";
      } else {
        this.type = "password";
        this.icon = "clarity:eye-line";
      }
    },
    addPhone() {
      alert("Hello World");
    },
    verifyPhone() {
      let payload = {
        phone_no: Number(this.payload.call_code + this.payload.phone_no),
        // phone_no: "+2348093915841"
      };
      console.log(payload);
      localStorage.setItem("phoneNumber", payload.phone_no);
      this.$store.dispatch("auth/verifyPhoneNumber", payload);
    },
    removeVerification() {
      this.$store.dispatch("auth/removeVerification");
    },
    closeModal() {
      this.removeVerification();
    },
    removeErrors() {
      this.$store.dispatch("auth/removeErrors");
    },
    goToAlmostDone() {
      this.almostDone = true;
      this.removeVerification();
    },
  },
  created() {
    this.$store.dispatch("auth/removeErrors");
  },
  components: { VerifyPhoneNumber, AlmostDone },
  computed: {
    verifyPhoneNumber() {
      return this.$store.getters["auth/isPhoneVerified"];
    },
    loading() {
      return this.$store.getters["auth/isLoading"];
    },
    err() {
      return this.$store.getters["auth/isError"];
    },
    loading2() {
      return this.$store.getters["auth/isLoading"];
    },
  },
};
</script>
