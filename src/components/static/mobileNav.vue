<template>
  <div class="bg-white sticky-top">
    <nav
      class="left--side d-flex align-items-center justify-content-between p-4"
      style="border-bottom: 1px dashed var(--accent)"
    >
      <h5 class="brand--name" style="font-weight: 700">sm:)epay</h5>
      <div>
        <span class="avatar" :class="getInitials(user.first_name)">{{
          getInitials(user.first_name)
        }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    getInitials(value) {
      return value.charAt(0);
    },
  },
  beforeMount() {},
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>
