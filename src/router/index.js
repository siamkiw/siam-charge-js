import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store.js';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect : '/sign-in'
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component : () => import('../views/SignIn.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/',
        name: 'Main',
        component: () => import('../Main.vue'),
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../views/Dashboard.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: '/chargingstation',
                name: 'ChargingStation',
                component: () => import('../views/ChargingStation.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
        ]
    }
]


const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach(async(to, _, next) => {
    const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);

    const { isLoggedIn } = store.state;

    if(requiresAuth){
        if (!isLoggedIn) {
            next("/sign-in");
        } else {
            next();
        }
    }else{
        next();
    }
});

export default router