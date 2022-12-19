<template>
  <div>
    <div>
      <div class="modal--mask">
        <div class="modal--content">
          <div class="main--modal_content">
            <div class="text-right" @click="close" role="button">
              <i-icon
                style="color: #ff0000; font-size: 2rem"
                icon="ci:close-big"
              />
            </div>
            <div class="text-center">
              <h5 class="font-weight-bold">Verify Phone Number</h5>
              <small class="text-muted"
                >Enter the OTP sent to your phone no. :)</small
              >
            </div>
            <div class="mt-4">
              <PincodeInput v-model="pin" :length="4" placeholder="-" />
            </div>
            <div class="my-4">
              <button class="primary--btn" @click="verifyNumber">
                Verify Phone No
              </button>
            </div>
            <div class="text-center">
              <!-- <div class="mb-3">
                                <span>00.00</span>
                            </div> -->
              <div class="mt-5">
                <small
                  >Didn't get OTP?
                  <span
                    role="button"
                    style="color: var(--secondary-color)"
                    @click="resendOTP"
                    >Resend</span
                  ></small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
export default {
  components: {
    PincodeInput,
  },
  data() {
    return {
      pin: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    verifyNumber() {
      let payload = {
        phone_no: localStorage.getItem("phoneNumber"),
        verification_code: this.pin,
      };
      this.$store.dispatch("auth/confirmPhoneNumber", payload);
      this.$emit("almostDone");
    },
    resendOTP() {
      let payload = {
        phone_no: localStorage.getItem("phoneNumber"),
      };
      console.log(payload.phone_no);
      this.$store.dispatch("auth/verifyPhoneNumber", payload);
    },
  },
};
</script>
