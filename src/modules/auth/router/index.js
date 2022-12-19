const Login = () => import("../pages/login/loginPage.vue");
const Register = () => import("../pages/register/registerPage.vue");
export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/user-registration",
    name: "user-registration",
    component: Register,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  //   {
  //     path: "/reset-password",
  //     name: "reset-password",
  //     component: ResetPassword,
  //     meta: {
  //       layout: "AppAuthLayout",
  //     },
  //   },
];
