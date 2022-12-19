import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import AuthRoutes from "@/modules/auth/router";
import WalletRoutes from "@/modules/wallets/router";
import VirtualAccountsRoutes from "@/modules/virtualAccounts/router";
import ExchangeRoutes from "@/modules/exchange/router/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    AuthRoutes,
    WalletRoutes,
    VirtualAccountsRoutes,
    ExchangeRoutes
  ),
});

export default router;
