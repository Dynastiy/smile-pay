<template>
  <div
    v-loading="loading"
    element-loading-background="rgba(255, 255, 255, 0.7)"
  >
    <div class="container--fluid">
      <div class="d-flex send--options flex-wrap" style="gap: 20px">
        <div
          v-for="item in wallets"
          :key="item.id"
          class="mb-2 wallet"
          style="width: 47%"
        >
          <div
            v-if="showWallet(item.currency)"
            class="wallet--card"
            role="button"
          >
            <span class="small text-white">{{ item.currency }} Wallet</span>
            <h6
              class="my-3"
              style="font-size: 13px; color: var(--text-inactive)"
            >
              {{ item.currency }} Balance
            </h6>
            <div class="d-flex align-items-center justify-content-between">
              <h3 class="text-white">
                {{ item.currency + " " + item.availableBalance }}
              </h3>
              <div class="d-flex" style="gap: 20px">
                <span
                  style="
                    font-size: 11px;
                    color: var(--accent-color-light);
                    font-weight: 300;
                    text-decoration: underline !important;
                  "
                  role="button"
                  @click="viewOptions()"
                  >View Details</span
                >
                <span
                  style="
                    font-size: 11px;
                    color: var(--accent-color-light);
                    font-weight: 300;
                    text-decoration: underline !important;
                  "
                  role="button"
                  @click="fund_wallet = !fund_wallet"
                  >Fund Wallet</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals  -->
    <FundWallet v-if="fund_wallet" @close="fund_wallet = !fund_wallet" />

    <!-- View Wallet Details  -->
    <div class="send--options_view">
      <div class="close" role="button" @click="closeOptionsView">
        <i-icon icon="codicon:chrome-close" />
      </div>
      <div class="collapsible--content">
        <WalletDetails />
      </div>
    </div>
  </div>
</template>

<script>
import WalletDetails from "../components/_id.vue";
import FundWallet from "../components/modals/fundWallet.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { FundWallet, WalletDetails },
  data() {
    return {
      fund_wallet: false,
    };
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),

    ...mapState("wallets", {
      wallets: (state) => state.wallets,
      loading: (state) => state.loading,
    }),
  },

  beforeMount() {
    this.list(this.user.account_id);
  },

  methods: {
    ...mapActions("wallets", ["list"]),
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
    showWallet(value) {
      return (
        value === "USD" || value === "EUR" || value === "GBP" || value === "NGN"
      );
    },
  },
};
</script>
