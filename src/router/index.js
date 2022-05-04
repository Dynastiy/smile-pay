import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../views/layouts/dashboardLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: DashboardLayout,
        children: [{
            path: '/',
            name: 'Dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/dashboardView.vue')
        },
        {
            path: '/transfer',
            name: 'Transfer',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/transferPage.vue')
        }, ]
    },
    {
        path: '/mobile',
        name: 'Mobile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/layouts/mobileView.vue')
    },
    {
        path: '/sign-in',
        name: 'Sign In',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/signIn.vue')
    },
   
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router