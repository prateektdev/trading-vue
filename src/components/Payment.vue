<template>
  <div>
    <Header />
    <div class="page-container row-fluid container-fluid">
      <!-- SIDEBAR - START -->
      <Sidebar />
      <!--  SIDEBAR - END -->
      <section id="main-content" class>
        <div class="wrapper main-wrapper row" style>
          <div class="crypto-payment">
            <div class="col-lg-4">
              <div class="row">
                <div class="crypto-list col-lg-6 col-sm-6 col-xs-12 mt-15">
                  <div class="crpto-currency-box active">
                    <img src="../assets/data/crypto-dash/payment1.png" alt />
                    <h3 class="boldy">Visa Card</h3>
                    <span class="checky-box"></span>
                  </div>
                  <div class="crpto-currency-box">
                    <img src="../assets/data/crypto-dash/payment3.png" alt />
                    <h3 class="boldy">Paypal</h3>
                    <span class="checky-box"></span>
                  </div>
                </div>

                <div class="payment-list col-lg-6 col-sm-6 col-xs-12 mt-15">
                  <div class="crpto-currency-box">
                    <img src="../assets/data/crypto-dash/payment2.png" alt />
                    <h3 class="boldy">Mastercard</h3>
                    <span class="checky-box"></span>
                  </div>

                  <div class="crpto-currency-box">
                    <img src="../assets/data/crypto-dash/payment2.png" alt />
                    <h3 class="boldy">Prepaid</h3>
                    <span class="checky-box"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <section class="box has-border-left-3 no-shadow">
              <header class="panel_header gradient-blue">
                <h2 class="title pull-left">Payment Method</h2>
              </header>
              <div class="content-body pb0">
                <div class="row">
                  <div class="payment-info-wrap">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-label">Cardholder Name</label>
                        <div class="controls">
                          <input type="text" class="form-control" placeholder="Name" id="field-1" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-label">Card Number</label>
                        <div class="controls">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0000-0000-0000-0000"
                            id="field-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-label">Expire Month</label>
                        <select class="form-control m-bot15">
                          <option>January</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-label">Expire Year</label>
                        <select class="form-control m-bot15">
                          <option>2024</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="form-group">
                        <label class="form-label">CVV</label>
                        <div class="controls mt-0">
                          <input type="text" class="form-control" placeholder="000" id="field-1" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="form-group">
                        <label class="form-label">.</label>
                        <div class="controls mt-5">
                          <button class="btn btn-primary">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="clearfix"></div>

          <div class="col-lg-12">
            <h3 class="boldy mt-15">Recent activity Summary</h3>
          </div>

          <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="ref-num-box statistics-box mt-15 text-center">
              <h5 class="boldy mt-30 mb-0">Your are Buying</h5>
              <h2 class="bold p-text mt-15 mb-15">0.012032 BTC</h2>
              <p class="mb-0 text-muted boldy mb-30">$7,374 per BTC</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="statistics-box mt-15 text-center">
              <h5 class="boldy mt-30 mb-0">Payment Method</h5>
              <img
                src="../assets/data/crypto-dash/payment1.png"
                class="mt-15 mb-15"
                style="max-width:55px"
                alt
              />
              <p class="mb-0 text-muted boldy mb-30">Desposite to BTC Wallet</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-xs-12">
            <div class="statistics-box mt-15">
              <div class="t-summary flex align-items-center">
                <h4 class="boldy">Transaction Fee:</h4>
                <p class="mb-0 boldy">$1.93</p>
              </div>
              <div class="t-summary flex align-items-center">
                <h4 class="boldy">Transaction Subtotal:</h4>
                <p class="mb-0 boldy">$98.07</p>
              </div>
              <div class="t-summary flex align-items-center mb-0">
                <h4 class="boldy">Transaction Total:</h4>
                <p class="mb-0 bold text-primary">$100.00</p>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="col-lg-12">
            <section class="box">
              <header class="panel_header">
                <h2 class="title pull-left">Activities History</h2>
                <div class="actions panel_actions pull-right">
                  <a class="box_toggle fa fa-chevron-down"></a>
                  <a class="box_setting fa fa-cog" data-toggle="modal" href="#section-settings"></a>
                  <a class="box_close fa fa-times"></a>
                </div>
              </header>
              <div class="content-body">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="table-responsive" data-pattern="priority-columns">
                      <table
                        id="tech-companies-1"
                        class="table vm trans table-small-font no-mb table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>Crypto orders</th>
                            <th>Sender ID</th>
                            <th>Transaction ID</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p1.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Buy Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">10:23:45</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-success">completed</span>
                            </td>
                            <td class="green-text boldy">+0,041BTC</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p2.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Sell Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">12:53:25</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-warning">Pending</span>
                            </td>
                            <td class="red-text boldy">-1,176LTC</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p3.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Exchange Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">04:03:25</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-primary">exchanged</span>
                            </td>
                            <td class="blue-text boldy">0.023ETH</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p1.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Buy Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">09:33:02</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-danger">Canceled</span>
                            </td>
                            <td class="green-text boldy">+107,0XRP</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p1.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Buy Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">10:23:45</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-warning">pending</span>
                            </td>
                            <td class="green-text boldy">-0,098BTC</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p2.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Sell Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">09:33:02</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-success">Completed</span>
                            </td>
                            <td class="red-text boldy">-2,76DAH</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="round img2">
                                <img src="../assets/data/crypto-dash/p1.png" alt />
                              </div>
                              <div class="designer-info">
                                <h6>Buy Order</h6>
                              </div>
                            </td>
                            <td>
                              <small class="text-muted">gdh-34um3bbj</small>
                            </td>
                            <td>
                              <small class="text-muted">HJD9R034JNN3N43</small>
                            </td>
                            <td>
                              <small class="text-muted">09:33:02</small>
                            </td>
                            <td>
                              <span class="badge w-70 round-success">Completed</span>
                            </td>
                            <td class="green-text boldy">+1,429DAH</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- MAIN CONTENT AREA ENDS -->
        </div>
      </section>
      <!-- END CONTENT -->
      <div class="page-chatapi hideit">
        <div class="search-bar">
          <input type="text" placeholder="Search" class="form-control" />
        </div>

        <div class="chat-wrapper">
          <h4 class="group-head">Favourites</h4>
          <ul class="contact-list">
            <li class="user-row" id="chat_user_1" data-user-id="1">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-1.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Joge Lucky</a>
                </h4>
                <span class="status available" data-status="available">Available</span>
              </div>
              <div class="user-status available">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_2" data-user-id="2">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-2.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Folisise Chosiel</a>
                </h4>
                <span class="status away" data-status="away">Away</span>
              </div>
              <div class="user-status away">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_3" data-user-id="3">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-3.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Aron Gonzalez</a>
                </h4>
                <span class="status busy" data-status="busy">Busy</span>
              </div>
              <div class="user-status busy">
                <i class="fa fa-circle"></i>
              </div>
            </li>
          </ul>

          <h4 class="group-head">More Contacts</h4>
          <ul class="contact-list">
            <li class="user-row" id="chat_user_4" data-user-id="4">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-4.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Chris Fox</a>
                </h4>
                <span class="status offline" data-status="offline">Offline</span>
              </div>
              <div class="user-status offline">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_5" data-user-id="5">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-5.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Mogen Polish</a>
                </h4>
                <span class="status offline" data-status="offline">Offline</span>
              </div>
              <div class="user-status offline">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_6" data-user-id="6">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-1.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Smith Carter</a>
                </h4>
                <span class="status available" data-status="available">Available</span>
              </div>
              <div class="user-status available">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_7" data-user-id="7">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-2.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Amilia Gozenal</a>
                </h4>
                <span class="status busy" data-status="busy">Busy</span>
              </div>
              <div class="user-status busy">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_8" data-user-id="8">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-3.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Tahir Jemyship</a>
                </h4>
                <span class="status away" data-status="away">Away</span>
              </div>
              <div class="user-status away">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_9" data-user-id="9">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-4.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Johanson Wright</a>
                </h4>
                <span class="status busy" data-status="busy">Busy</span>
              </div>
              <div class="user-status busy">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_10" data-user-id="10">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-5.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Loni Tindall</a>
                </h4>
                <span class="status away" data-status="away">Away</span>
              </div>
              <div class="user-status away">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_11" data-user-id="11">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-1.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Natcho Herlaey</a>
                </h4>
                <span class="status idle" data-status="idle">Idle</span>
              </div>
              <div class="user-status idle">
                <i class="fa fa-circle"></i>
              </div>
            </li>
            <li class="user-row" id="chat_user_12" data-user-id="12">
              <div class="user-img">
                <a href="#">
                  <img src="../assets/data/profile/avatar-2.png" alt />
                </a>
              </div>
              <div class="user-info">
                <h4>
                  <a href="#">Shakira Swedan</a>
                </h4>
                <span class="status idle" data-status="idle">Idle</span>
              </div>
              <div class="user-status idle">
                <i class="fa fa-circle"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="chatapi-windows"></div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar";

export default {
  name: "Payment",
  components: {
    Header,
    Sidebar
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>