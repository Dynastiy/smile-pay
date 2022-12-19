const Wallet = () => import("../pages/indexPage.vue");
// const CreateVirtualAccount = () => import("../pages/createVirtualAccount.vue");

function guardMyroute(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("access_token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next({
      name: "login",
      query: { redirectFrom: to.fullPath },
    });
    // go to '/login';
  }
}
const routes = [
  {
    path: "/",
    name: "wallet",
    component: Wallet,
    beforeEnter: guardMyroute,
    meta: {
      layout: "AppDashboardLayout",
      parent: "wallets",
      name: "Wallet",
      description: "Where you keep them money for spending :)",
    },
  },
];

export default routes;
