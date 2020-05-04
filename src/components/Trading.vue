<template>
  <div>
    <Header />
    <div class="main-container" id="container">
      <div class="overlay"></div>
      <div class="search-overlay"></div>

      <!--  BEGIN SIDEBAR  -->
      <Sidebar />
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <div id="content" class="main-content">
        <div class="layout-px-spacing">
          <div class="row layout-top-spacing">
            <div class="col-xl-2 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-table-one">
                <div class="widget-heading">
                  <h5 class>Most Traded</h5>
                </div>

                <div class="widget-content">
                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan1.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>USD</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan2.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>EUR</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan3.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>JPY</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan4.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>GBP</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan5.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>AUD</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan6.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>CAD</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan7.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>CHF</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/ca.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>CNH</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan8.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>HKD</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="transactions-list">
                    <div class="t-item">
                      <div class="t-company-name">
                        <div class="t-icon">
                          <div class="icon">
                            <img src="assets/img/lan9.png" alt />
                          </div>
                        </div>
                        <div class="t-name">
                          <h4>SEK</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-activity-four">
                <div class="widget-heading">
                  <h5 class>Recent Activities</h5>
                </div>

                <div class="widget-content">
                  <div class="mt-container mx-auto">
                    <div class="table-responsive">
                      <table class="table bg-transparent">
                        <thead>
                          <tr>
                            <th>
                              <div class="th-content">Markets</div>
                            </th>
                            <th>
                              <div class="th-content th-heading">Change</div>
                            </th>
                            <th>
                              <div class="th-content th-heading">Sell</div>
                            </th>
                            <th>
                              <div class="th-content">Buy</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">
                                  -
                                  0.10%
                                </span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">AUD/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">
                                  -
                                  0.40%
                                </span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">EUR/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">USD/CHF</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">USD/RUB</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="td-content">
                                <span class="pricing">GBP/USD</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">
                                <span class="discount-pricing">-0.10%</span>
                              </div>
                            </td>
                            <td>
                              <div class="td-content">170.71</div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Sell</button>
                            </td>
                            <td>
                              <div class="td-content">
                                <a href="#" class>131.13</a>
                              </div>
                              <button class="btn btn-primary mb-4 mr-2 sell-btn">Buy</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class="color-white">Trade</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <p class="acc-amount">
                        1.07250
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                      </p>
                      <p class="pt-3 mb-0">Size (EUR)</p>
                    </div>

                    <div id="fbtMultiple">
                      <input id="demo_vertical" type="text" value name="demo_vertical" />
                    </div>

                    <div class="inv-detail">
                      <div class="info-detail-1">
                        <p>Margin</p>
                        <p>$323.49</p>
                      </div>

                      <div class="info-detail-1">
                        <p>Sell when price is</p>
                        <label class="switch s-dark">
                          <input type="checkbox" checked />
                          <span class="slider round"></span>
                        </label>
                      </div>

                      <div class="info-detail-1">
                        <p>Close at loss</p>
                        <label class="switch s-dark">
                          <input type="checkbox" checked />
                          <span class="slider round"></span>
                        </label>
                      </div>

                      <div class="info-detail-1">
                        <p>Close at profit</p>
                        <label class="switch s-dark">
                          <input type="checkbox" checked />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>

                    <div class="inv-action">
                      <a href="#" class="btn btn-danger w-100">SELL</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-table-two">
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                  <!-- <VueTradingView :options="{
                    
                  }" />-->
                  <!-- <VueTradingView
                    v-bind:options="{
                      symbol: 'NASDAQ:AAPL',
                      theme: 'dark',
                      enable_publishing: false,
                      allow_symbol_change: true,
                      autosize: true,
                      interval: 'D',
                      timezone: 'Etc/UTC',
                      style: '1',
                      locale: 'in',
                      toolbar_bg: '#f1f3f6',
                    }"
                  />-->

                  <VueTradingView v-bind:options="options" />
                  <!-- <div id="tradingview_efc68"></div> -->
                  <div class="tradingview-widget-copyright">
                    <a
                      href="https://in.tradingview.com/symbols/NASDAQ-AAPL/"
                      rel="noopener"
                      target="_blank"
                    >
                      <span class="blue-text">AAPL Chart</span>
                    </a> by TradingView
                  </div>
                  <!-- <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                  <script type="text/javascript"></script>-->
                </div>
                <!-- TradingView Widget END -->
              </div>
            </div>

            <div class="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class="color-white">Market Overview</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <p class="pt-3 pb-4">Daily Change</p>
                    </div>

                    <div class="inv-detail">
                      <div class="barWrapper">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span
                              class="popOver"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="1.07542"
                            ></span>
                          </div>
                        </div>
                        <div class="clearfix">
                          <div class="float-left red-low">Low: 1.07542</div>
                          <div class="float-right green-low">High: 1.08135</div>
                          <div class="clearfix"></div>
                        </div>
                      </div>

                      <div class="barWrapper mb-4">
                        <p class="pt-1 pb-1">Market Sentiment</p>
                        <div class="progress br-30">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div class="progress-title"></div>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix">
                        <div class="float-left">
                          <p>
                            Trading Hours
                            <br />
                            <small>Your local time</small>
                          </p>
                        </div>
                        <div class="float-right">
                          <div class="btn-group mb-4">
                            <button
                              class="btn btn-dark btn-sm dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Today
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </button>
                            <div class="dropdown-menu" style="will-change: transform;">
                              <a href="javascript:void(0);" class="dropdown-item">
                                7 Days
                                Ago
                              </a>
                              <a href="javascript:void(0);" class="dropdown-item">
                                14 Days
                                Ago
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>

                      <div class="info-detail-1">
                        <p>Trading onfo</p>
                      </div>

                      <div class="info-detail-1">
                        <p>Currency</p>
                        <p>USD</p>
                      </div>

                      <div class="info-detail-1">
                        <p>Margin</p>
                        <p>1.00%</p>
                      </div>

                      <div class="info-detail-1">
                        <p>Leverage</p>
                        <p>100:1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  END CONTENT AREA  -->
      </div>
      <!-- END MAIN CONTAINER -->
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar";
import VueTradingView from "vue-trading-view";

var $ = global.jQuery;

window.$ = $;

export default {
  name: "Trading",
  components: {
    Header,
    Sidebar,
    VueTradingView
  },
  data() {
    return {
      options: {
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "in",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true
      }
    };
  },
  props: {
    msg: String
  },
  mounted() {
    const el = "input[name='demo_vertical']";
    $(el).TouchSpin({
      verticalbuttons: true
    });
  }
};
</script>

<style scoped>
</style>