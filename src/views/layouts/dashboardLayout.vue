<template>
  <div>
    <div class="main--content">
      <div class="content">
        <app-header />
        <div class="main--area">
          <app-drawer />
          <div>
            <Wallet/>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wallet from "@/components/static/walletView.vue";
import AppDrawer from "@/components/static/appDrawer.vue";
import AppHeader from "@/components/static/appHeader.vue";
export default {
  components: {
      Wallet,
    AppDrawer,
    AppHeader,
  },
};
</script>
