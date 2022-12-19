<template>
  <div>
    <div>
      <div class="app--nav">
        <div
          class="left--side text-center p-4"
          style="border-left: 1px dashed var(--accent)"
        >
          <h5 class="brand--name" style="font-weight: 700">sm:)epay</h5>
          <small class="text-muted">*China coming soon</small>
        </div>

        <div
          class="center--side p-4"
          style="border-left: 1px dashed var(--accent)"
        >
          <h5 style="font-weight: 700">
            {{ routeName.name }}
          </h5>
          <small class="text-muted">
            {{ routeName.description }}
          </small>
        </div>

        <div
          class="user--profile p-4"
          style="
            border-left: 1px dashed var(--accent);
            border-right: 1px dashed var(--accent);
          "
        >
          <div class="d-flex">
            <img src="" alt="" />
            <div>
              <h6 class="text-capitalize" style="font-weight: 600">
                {{ user.first_name + " " + user.last_name }}
              </h6>
              <small
                class="text-muted d-flex align-items-center"
                style="gap: 3px"
              >
                <country-flag
                  :rounded="true"
                  :country="user.country"
                  size="small"
                />
                {{ user.country }}</small
              >
            </div>
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
    routeName() {
      return this.$route.meta;
    },
  },
};
</script>
