<template>
  <div
    v-loading="loading"
    element-loading-background="rgba(255, 255, 255, 0.7)"
  >
    <div class="container--fluid" style="height: 75vh; overflow-y: auto">
      <div class="d-flex send--options" style="gap: 20px">
        <div class="virtual--accounts" style="width: 100%">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div
              class="text-white text-center"
              style="gap: 5px"
              role="button"
              @click="$router.push('/create-virtual-account')"
            >
              <span
                ><i-icon
                  icon="material-symbols:add-circle-outline-rounded"
                  style="font-size: 40px"
              /></span>
              <div>
                <span style="font-size: 13px; font-weight: 300"
                  >Create Virtual Account</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="virtual--accounts"
          v-for="item in accounts"
          :key="item.id"
          style="width: 100%"
        >
          <div class="d-flex flex-column justify-content-between h-100">
            <div
              class="top--accounts_data d-flex align-items-center justify-content-between"
            >
              <span class="text-capitalize">
                {{ item.accountInformation.accountName }}</span
              >
              <div class="d-flex align-items-end" style="gap: 8px">
                <country-flag
                  :rounded="true"
                  :country="showCountry(item.currency)"
                  size="normal"
                />
                <span> {{ item.currency + " Account" }} </span>
              </div>
            </div>
            <div
              class="bottom--accounts_data d-flex align-items-center justify-content-between"
            >
              <div class="d-flex align-items-end" style="gap: 8px">
                <country-flag
                  :rounded="true"
                  :country="showCountry(item.currency)"
                  size="normal"
                />
                <span> {{ item.accountNumber }} </span>
              </div>
              <span
                style="text-decoration: underline !important"
                role="button"
                @click="viewOptions()"
                >View Account Details</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Account Details  -->
    <div class="send--options_view">
      <div class="close" role="button" @click="closeOptionsView">
        <i-icon icon="codicon:chrome-close" />
      </div>
      <div class="collapsible--content">
        <AccountDetails />
      </div>
    </div>
  </div>
</template>

<script>
import AccountDetails from "../components/_id.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { AccountDetails },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),

    ...mapState("virtualAccounts", {
      accounts: (state) => state.dataSet,
      loading: (state) => state.loading,
    }),
  },

  beforeMount() {
    this.list(this.user.account_id);
  },

  methods: {
    ...mapActions("virtualAccounts", ["list"]),
    viewOptions() {
      // this.active_el = el;
      let sideBar = document.querySelector(".send--options_view");
      let mainArea = document.querySelector(".send--options");
      sideBar.classList.add("collapsed");
      mainArea.classList.add("collapsed");
    },
    closeOptionsView() {
      let sideBar = document.querySelector(".send--options_view");
      let mainArea = document.querySelector(".send--options");
      sideBar.classList.remove("collapsed");
      mainArea.classList.remove("collapsed");
    },

    showCountry(value) {
      return value === "USD"
        ? "US"
        : value === "NGN"
        ? "NG"
        : value === "EUR"
        ? "EU"
        : "GB";
    },
  },
};
</script>
