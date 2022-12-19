<template>
  <div class="">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">First Name</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              v-model="user.first_name"
              type="text"
              readonly
              name="KYCInformation[firstName]"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Last Name</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              v-model="user.last_name"
              type="text"
              readonly
              name="KYCInformation[lastName]"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Birth Date</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              v-model="user.date_of_birth"
              type="date"
              readonly
              name="KYCInformation[birthDate]"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Email</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              v-model="user.email"
              type="text"
              readonly
              name="KYCInformation[email]"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Occupation</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
              name="KYCInformation[occupation]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>
