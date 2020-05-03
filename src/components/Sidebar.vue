<template>
  <!--  BEGIN SIDEBAR  -->
  <div class="sidebar-wrapper sidebar-theme">
    <nav id="sidebar">
      <ul class="list-unstyled menu-categories" id="accordionExample">
        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
              <span>Watchlist</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle active">
            <div class="menu-it">
              <i class="fa fa-line-chart" aria-hidden="true"></i>
              <span>Trading</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>
              <span>Market</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-stop-circle-o" aria-hidden="true"></i>
              <span>Portfolio</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-bug" aria-hidden="true"></i>
              <span>Report</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              <span>Deposit</span>
            </div>
          </a>
        </li>

        <li class="menu setting">
          <a href="#" aria-expanded="false" class="dropdown-toggle">
            <div class="menu-it">
              <i class="fa fa-cog" aria-hidden="true"></i>
              <span>Setting</span>
            </div>
          </a>
        </li>
      </ul>
      <!-- <div class="shadow-bottom"></div> -->
    </nav>
  </div>
  <!--  END SIDEBAR  -->
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