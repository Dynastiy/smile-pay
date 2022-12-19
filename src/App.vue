<template>
  <div>
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";

export default {
  components: { AppLayout },
  // computed: {
  //   routeName() {
  //     return this.$route.meta.parent;
  //   },
  // },
};
</script>

<style></style>
