<template>
  <div>
    <div>
      <div class="app--drawer">
        <ul class="m-0">
          <!-- <li>
            <router-link to="/">
              <span> <i-icon icon="heroicons:home" /> </span>
              <span>Home</span>
            </router-link>
          </li> -->
          <li>
            <router-link
              to="/"
              :class="[{ 'router-link-exact-active': route === 'wallets' }]"
            >
              <span> <i-icon icon="bx:wallet-alt" /> </span>
              <span>Wallet</span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/virtual-accounts"
              :class="[{ 'router-link-exact-active': route === 'accounts' }]"
            >
              <span> <i-icon icon="mdi:account-cash-outline" /> </span>
              <span>Virtual Accounts</span>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/transact/send-funds">
                <span> <i-icon  icon="tabler:arrows-cross" /> </span>
                <span>Transact</span>
            </router-link>
          </li> -->
          <li>
            <router-link to="/exchange">
              <span> <i-icon icon="fxemoji:clockwiseleftrightarrows" /> </span>
              <span>Exchange</span>
            </router-link>
          </li>
          <li>
            <router-link to="/card-and-bank">
              <span> <i-icon icon="codicon:credit-card" /> </span>
              <span>Card & Bank</span>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/history">
                <span> <i-icon  icon="carbon:document" /> </span>
                <span>History</span>
            </router-link>
          </li> -->
          <li>
            <router-link to="/profile-and-settings">
              <span> <i-icon icon="bx:user" /> </span>
              <span>Profile & Settings</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dialogVisible: false,
    };
  },

  computed: {
    route() {
      return this.$route.meta.parent;
    },
    routeName() {
      return this.$route.path;
    },
  },
  methods: {},
};
</script>
