const Accounts = () => import("../pages/indexPage.vue");
const CreateVirtualAccount = () => import("../pages/createVirtualAccount.vue");

function guardMyRoute(to, from, next) {
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
    path: "/virtual-accounts",
    name: "accounts",
    component: Accounts,
    beforeEnter: guardMyRoute,
    meta: {
      layout: "AppDashboardLayout",
      parent: "accounts",
      name: "Virtual Accounts",
      description: "List all your accounts :)",
    },
  },

  {
    path: "/create-virtual-account",
    name: "create-virtual-account",
    component: CreateVirtualAccount,
    beforeEnter: guardMyRoute,
    meta: {
      layout: "AppDashboardLayout",
      parent: "accounts",
      name: "Create Virtual Account",
      description: "Create a virtual account :)",
    },
  },
];

export default routes;
