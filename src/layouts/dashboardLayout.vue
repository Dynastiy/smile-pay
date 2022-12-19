<template>
  <div>
    <div class="main--container">
      <div>
        <div>
          <AppNav />
        </div>
        <div class="main--content">
          <div>
            <AppDrawer />
          </div>
          <div id="main--content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrawer from "@/components/static/appDrawer.vue";
import AppNav from "@/components/static/appNav.vue";
export default {
  components: { AppDrawer, AppNav },
};
</script>
