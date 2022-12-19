<template>
  <div class="container--fluid dashboard--content">
    <div class="mb-3">
      <span @click="$router.go(-1)" role="button">
        <i class="el-icon-back"></i>
      </span>
    </div>
    <form action="" class="smile--form" @submit.prevent="submit">
      <el-collapse accordion class="mb-3">
        <el-collapse-item title="Personal Info" name="1">
          <PersonalInfo />
        </el-collapse-item>
        <el-collapse-item title="Address" name="2">
          <AddressInfo />
        </el-collapse-item>
        <el-collapse-item title="Account Info" name="3">
          <AccountInfo />
        </el-collapse-item>
        <el-collapse-item title="Documents" name="4">
          <UserDocuments />
        </el-collapse-item>
      </el-collapse>
      <span v-if="loading" class="d-block text-center">
        <i class="el-icon-loading" style="font-size: 23px" />
      </span>
      <button v-else class="primary--btn">Create Virtual Account</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AccountInfo from "../components/accountInfo.vue";
import AddressInfo from "../components/addressInfo.vue";
import PersonalInfo from "../components/personalInfo.vue";
import UserDocuments from "../components/userDocuments.vue";

export default {
  components: {
    PersonalInfo,
    AccountInfo,
    UserDocuments,
    AddressInfo,
  },
  computed: {
    ...mapState("virtualAccounts", {
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("virtualAccounts", ["create"]),
    submit(e) {
      const form = e.target;
      const formData = new FormData(form); // get all named inputs in form
      //   for (const [key, value] of formData) {
      //     console.log({ key, value });
      //   },
      this.create(formData);
    },
  },
};
</script>
