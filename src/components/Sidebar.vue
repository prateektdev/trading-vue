<template>
  <div class="page-sidebar fixedscroll">
    <!-- MAIN MENU - START -->
    <div class="page-sidebar-wrapper crypto" id="main-menu-wrapper">
      <ul class="wraplist">
        <li class="menusection">Main</li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-file-text" aria-hidden="true"></i>
            <span class="title">Watchlist</span>
          </a>
        </li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
            <span class="title">Trading</span>
          </a>
        </li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <span class="title">Market</span>
          </a>
        </li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-pie-chart" aria-hidden="true"></i>
            <span class="title">Portfolio</span>
          </a>
        </li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
            <span class="title">Report</span>
          </a>
        </li>
        <li class>
          <a href="payment.html">
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            <span class="title">Deposit</span>
          </a>
        </li>
        <li class>
          <a href="index-dashboard.html">
            <i class="fa fa-wrench"></i>
            <span class="title">Settings</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- MAIN MENU - END -->
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>