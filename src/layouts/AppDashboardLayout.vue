<template>
  <div>
    <div class="main--container">
      <div>
        <div>
          <app-nav v-if="!screenSize" />
          <div v-else>
            <MobileNav />
          </div>
        </div>
        <div class="main--content">
          <div>
            <app-drawer v-if="!screenSize" />
          </div>
          <div id="main--content">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Navigation -->
    <RingBottomNavigation
      v-if="screenSize"
      border-color="transparent"
      title-color="var(--secondary-color)"
      badge-color="var(--primary-color)"
      icon-color="var(--secondary-color)"
      :options="options"
      v-model="selected"
    ></RingBottomNavigation>
  </div>
</template>

<script>
import appNav from "@/components/static/appNav.vue";
import AppDrawer from "@/components/static/appDrawer.vue";
import MobileNav from "@/components/static/mobileNav.vue";

// import { SwipeBottomNavigation } from "bottom-navigation-vue";
export default {
  // components: { SwipeBottomNavigation },
  name: "DashboardLayout",
  components: { appNav, AppDrawer, MobileNav },
  data() {
    return {
      selected: 1,
      options: [
        { id: 1, icon: "fa fa-home", title: "Home", path: { name: "wallet" } },
        {
          id: 2,
          icon: "fa fa-money",
          title: "Wallets",
          path: { name: "wallet" },
        },
        {
          id: 3,
          icon: "fa fa-bank",
          title: "Accounts",
          path: { name: "accounts" },
        },
        {
          id: 4,
          icon: "fa fa-exchange",
          title: "Exchange",
          path: { name: "exchange" },
        },
        // { id: 5, icon: 'fa fa-gear', title: 'Setting' },
      ],
    };
  },
  computed: {
    screenSize() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
