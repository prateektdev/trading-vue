import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(LoadScript)

/* Vue.loadScript("https://code.jquery.com/jquery-1.12.4.min.js").then(() => console.log("easing loaded")); */
Vue.loadScript("./assets/js/jquery.easing.min.js").then(() => console.log("easing loaded"));
Vue.loadScript("./assets/plugins/bootstrap/js/bootstrap.min.js").then(() => console.log("bootstrap loaded"));
Vue.loadScript("./assets/plugins/pace/pace.min.js").then(() => console.log("pace loaded"));
Vue.loadScript("./assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js").then(() => console.log("scro"));
Vue.loadScript("./assets/plugins/viewport/viewportchecker.js").then(() => console.log("viewport loaded"));

Vue.loadScript("./assets/plugins/sparkline-chart/jquery.sparkline.min.js").then(() => console.log("spark"));
Vue.loadScript("./assets/plugins/flot-chart/jquery.flot.js").then(() => console.log("flot"));
Vue.loadScript("./assets/plugins/flot-chart/jquery.flot.time.js").then(() => console.log("flot time"));
Vue.loadScript("./assets/js/chart-flot.js").then(() => console.log("chart-flot"));

Vue.loadScript("./assets/plugins/chartjs-chart/Chart.min.js").then(() => console.log("chart-min"));
Vue.loadScript("./assets/plugins/swiper/swiper.js").then(() => console.log("swipper"));
Vue.loadScript("./assets/js/dashboard-crypto.js").then(() => console.log("crypto"));
Vue.loadScript("./assets/js/chart-sparkline.js").then(() => console.log("spark-line"));
Vue.loadScript("./assets/js/chart-chartjs.js").then(() => console.log("chartjs"));
Vue.loadScript("./assets/js/scripts.js").then(() => console.log("chart-min"));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
