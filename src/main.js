import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import LoadScript from 'vue-plugin-load-script';

/* import './assets/js/loader.js';
import './assets/js/libs/jquery-3.1.1.min.js';
import './assets/bootstrap/js/popper.min.js';
import './assets/bootstrap/js/bootstrap.min.js';
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js';
import './assets/js/app.js';
import './assets/js/custom.js';
import './assets/plugins/apex/apexcharts.min.js';
import './assets/js/dashboard/dash_1.js';
import './assets/js/scrollspyNav.js';
import './assets/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js';
import './assets/plugins/bootstrap-touchspin/custom-bootstrap-touchspin.js'; */

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(LoadScript)

Vue.loadScript("assets/js/loader.js").then(() => console.log("1"));
Vue.loadScript("assets/js/libs/jquery-3.1.1.min.js").then(() => console.log("2"));
Vue.loadScript("assets/bootstrap/js/popper.min.js").then(() => console.log("3"));
Vue.loadScript("assets/bootstrap/js/bootstrap.min.js").then(() => console.log("4"));
Vue.loadScript("assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js").then(() => console.log("5"));
Vue.loadScript("assets/js/app.js").then(() => console.log("6"));
Vue.loadScript("assets/js/custom.js").then(() => console.log("7"));
Vue.loadScript("assets/plugins/apex/apexcharts.min.js").then(() => console.log("8"));
Vue.loadScript("assets/js/dashboard/dash_1.js").then(() => console.log("9"));
Vue.loadScript("assets/js/scrollspyNav.js").then(() => console.log("10"));
Vue.loadScript("assets/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js").then(() => console.log("11"));
Vue.loadScript("assets/plugins/bootstrap-touchspin/custom-bootstrap-touchspin.js").then(() => console.log("12"));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
