import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'
// import Profile from '../components/Profile.vue'
// import Payment from '../components/Payment.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    /* { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/payment', component: Payment }, */
    { path: '/hello', component: HelloWorld },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router