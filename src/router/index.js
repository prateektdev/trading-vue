import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    /* { path: '/profile', component: Profile },
    { path: '/exercise-log', component: ExerciseLog },
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