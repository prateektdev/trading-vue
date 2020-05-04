import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Profile from '../components/Profile.vue'
import Payment from '../components/Payment.vue'
import Trading from '../components/Trading.vue';
const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile },
    { path: '/payment', component: Payment },
    { path: '/trading', component: Trading },
    /* { path: '/exercise-log', component: ExerciseLog },
    { path: '/exercise', component: Exercise },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/suggestion', component: Suggestion },
    { path: '/signup', component: Register }, */
    { path: '/hello', component: HelloWorld },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router