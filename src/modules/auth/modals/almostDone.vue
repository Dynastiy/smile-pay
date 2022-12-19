<template>
  <div>
    <div>
      <div class="modal--mask">
        <div class="modal--content">
          <div class="main--modal_content">
            <h1 class="font-weight-bold text-center mb-5">
              We're almost done with your signup, just stay with us a little
              longer :)
            </h1>
            <div class="mt-5" v-show="verifyPhoneNumber">
              <button @click="goToRegister" class="primary--btn">
                Let's Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push("/user-registration");
      this.$store.dispatch("auth/removeVerification");
    },
  },
  computed: {
    loading() {
      return this.$store.getters["auth/isLoading"];
    },
    verifyPhoneNumber() {
      return this.$store.getters["auth/isPhoneVerified"];
    },
  },
};
</script>
