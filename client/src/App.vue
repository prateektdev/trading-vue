<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },
  mounted() {
    this.toggleBodyClass("addClass", "bodyBackground");
  }
};
</script>

<style>
@import "./assets/plugins/pace/pace-theme-flash.css";
@import "./assets/plugins/bootstrap/css/bootstrap.min.css";
@import "./assets/plugins/bootstrap/css/bootstrap-theme.min.css";
@import "./assets/fonts/font-awesome/css/font-awesome.css";
@import "./assets/css/animate.min.css";
@import "./assets/plugins/perfect-scrollbar/perfect-scrollbar.css";

@import "./assets/plugins/jvectormap/jquery-jvectormap-2.0.1.css";
@import "./assets/plugins/morris-chart/css/morris.css";
@import "./assets/plugins/calendar/fullcalendar.css";
@import "./assets/plugins/icheck/skins/minimal/minimal.css";
@import "./assets/plugins/swiper/swiper.css";

@import "./assets/css/style.css";
@import "./assets/css/responsive.css";

.bodyBackground {
  color: #718396;
  height: 100%;
  font-size: 0.875rem;
  background: #192431;
  overflow-x: hidden;
  overflow-y: auto;
  letter-spacing: 0.0312rem;
  font-family: "Nunito", sans-serif;
}
</style>
