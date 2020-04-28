<template>
  <div>
    <Header />
    <div class="page-container row-fluid container-fluid">
      <!-- SIDEBAR - START -->
      <Sidebar />
      <!--  SIDEBAR - END -->

      <!-- START CONTENT -->
      <section id="main-content" class>
        <div class="wrapper main-wrapper row" style>
          <div class="col-xs-12">
            <div class="pull-left">
              <!-- PAGE HEADING TAG - START -->
              <h4 class="title boldy mb-5 mt-15">Crypto Balance</h4>
              <!-- PAGE HEADING TAG - END -->
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="col-lg-12 mt-15 mb-15">
            <section class="wra">
              <div class="swiper-container coins-slider text-center">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin1.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Bitcoin Balance</h5>
                        <p class="mb-0">
                          0.312373
                          <i class="complete fa fa-arrow-up ml-10"></i>
                        </p>
                      </div>

                      <span class="crypto3">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin2.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Eth Balance</h5>
                        <p class="mb-0">
                          1.007346
                          <i class="cancelled fa fa-arrow-down ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto4">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin3.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Dash Balance</h5>
                        <p class="mb-0">
                          0.008923
                          <i class="complete fa fa-arrow-up ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto2">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin4.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Ripple Balance</h5>
                        <p class="mb-0">
                          210.3123
                          <i class="complete fa fa-arrow-up ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto1">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin5.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Bitcoincash</h5>
                        <p class="mb-0">
                          2.092832
                          <i class="complete fa fa-arrow-up ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto3">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin6.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Doge Balance</h5>
                        <p class="mb-0">
                          877393,12
                          <i class="cancelled fa fa-arrow-down ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto4">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="coin-box flex align-items-center">
                      <div class="coin-icon mr-10">
                        <img src="../assets/data/crypto-dash/coin7.png" alt />
                      </div>
                      <div class="coin-balance text-left">
                        <h5 class="coin-name boldy">Monero Balance</h5>
                        <p class="mb-0">
                          1.932845
                          <i class="complete fa fa-arrow-up ml-10"></i>
                        </p>
                      </div>
                      <span class="crypto2">
                        <canvas width="50px" height="60"></canvas>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="apg-arrows">
                <!-- Add Navigation -->
                <!--  <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>-->
              </div>
            </section>
          </div>

          <div class="col-xs-12">
            <div class="pull-left">
              <!-- PAGE HEADING TAG - START -->
              <h4 class="title boldy mb-5 mt-15">Market</h4>
              <!-- PAGE HEADING TAG - END -->
            </div>
          </div>

          <div class="col-lg-12">
            <section class="box nobox marginBottom0">
              <div class="content-body">
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="statistics-box">
                      <div class="mb-15">
                        <i class="pull-left ico-icon icon-md icon-primary">
                          <img src="../assets/data/crypto-dash/s1.png" class="ico-icon-o" alt />
                        </i>
                        <div class="stats">
                          <h3 class="boldy mb-5">$4,456.98</h3>
                          <span>Account Balance</span>
                        </div>
                      </div>
                      <span class="crypto1">
                        <canvas width="239" height="60"></canvas>
                      </span>
                      <div class="btns">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Sell</button>
                              <p>170.1</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Buy</button>
                              <p>170.1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="statistics-box">
                      <div class="mb-15">
                        <i class="pull-left ico-icon icon-md icon-primary">
                          <img src="../assets/data/crypto-dash/s2.png" class="ico-icon-o" alt />
                        </i>
                        <div class="stats">
                          <h3 class="boldy mb-5">$1,627.23</h3>
                          <span>Total Income</span>
                        </div>
                      </div>
                      <span class="crypto2">
                        <canvas width="239" height="60"></canvas>
                      </span>
                      <div class="btns">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Sell</button>
                              <p>170.1</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Buy</button>
                              <p>170.1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="statistics-box">
                      <div class="mb-15">
                        <i class="pull-left ico-icon icon-md icon-primary">
                          <img src="../assets/data/crypto-dash/s3.png" class="ico-icon-o" alt />
                        </i>
                        <div class="stats">
                          <h3 class="boldy mb-5">232.76%</h3>
                          <span>Rate of Return</span>
                        </div>
                      </div>
                      <span class="crypto3">
                        <canvas width="239" height="60"></canvas>
                      </span>
                      <div class="btns">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Sell</button>
                              <p>170.1</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Buy</button>
                              <p>170.1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="statistics-box">
                      <div class="mb-15">
                        <i class="pull-left ico-icon icon-md icon-primary">
                          <img src="../assets/data/crypto-dash/s4.png" class="ico-icon-o" alt />
                        </i>
                        <div class="stats">
                          <h3 class="boldy mb-5">1,345</h3>
                          <span>Number of Trades</span>
                        </div>
                      </div>
                      <span class="crypto4">
                        <canvas width="239" height="60"></canvas>
                      </span>
                      <div class="btns">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Sell</button>
                              <p>170.1</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="sell_btn">
                              <button class="btn btn-success btn-border">Buy</button>
                              <p>170.1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End .row -->
              </div>
            </section>
          </div>

          <div class="clearfix"></div>
          <!-- MAIN CONTENT AREA STARTS -->

          <div class="col-xs-12">
            <div class="pull-left">
              <!-- PAGE HEADING TAG - START -->
              <h4 class="title boldy mb-5 mt-15">People</h4>
              <!-- PAGE HEADING TAG - END -->
            </div>
          </div>

          <div class="col-lg-12">
            <section class="box nobox marginBottom0">
              <div class="content-body">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div class="content_body_new">
                      <div class="row">
                        <div class="form-container">
                          <form action="#">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="col-xs-12 no-pl no-pr">
                                  <div class="col-sm-12 avatar-img no-pl no-pr">
                                    <div class="ico-img">
                                      <img
                                        src="../assets/data/profile/profile.jpg"
                                        alt="user-image"
                                        class="img-circle img-inline"
                                      />
                                    </div>
                                    <div class="form-group form-group_pad">
                                      <h4 class="bold no-mt no-mb">openwings</h4>
                                      <span class="desc" style="margin-left:0">Upcoming ICO</span>
                                    </div>
                                  </div>
                                </div>

                                <div class="pull">
                                  <div class="pull-left">
                                    <h4 class="green">53,78%</h4>
                                    <span class="desc" style="margin-left:0">RETURN (LAST 12M)</span>
                                  </div>

                                  <div class="pull-right">
                                    <h4 class="green borderes">3</h4>
                                    <span class="desc" style="margin-left:0">RISK</span>
                                  </div>
                                </div>

                                <div class="pull text-center">
                                  <div class>
                                    <button
                                      type="submit"
                                      style="margin-right:0"
                                      class="btn btn-primary copy"
                                    >Copy</button>
                                  </div>
                                  <div class="par">
                                    <h4>
                                      <small>94 Copiers</small>
                                      <i class="fa fa-caret-up green"></i>
                                      <span class="text_gr green">114.3%</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div class="content_body_new">
                      <div class="row">
                        <div class="form-container">
                          <form action="#">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="col-xs-12 no-pl no-pr">
                                  <div class="col-sm-12 avatar-img no-pl no-pr">
                                    <div class="ico-img">
                                      <img
                                        src="../assets/data/profile/profile.jpg"
                                        alt="user-image"
                                        class="img-circle img-inline"
                                      />
                                    </div>
                                    <div class="form-group form-group_pad">
                                      <h4 class="bold no-mt no-mb">openwings</h4>
                                      <span class="desc" style="margin-left:0">Upcoming ICO</span>
                                    </div>
                                  </div>
                                </div>

                                <div class="pull">
                                  <div class="pull-left">
                                    <h4 class="green">53,78%</h4>
                                    <span class="desc" style="margin-left:0">RETURN (LAST 12M)</span>
                                  </div>

                                  <div class="pull-right">
                                    <h4 class="green borderes">3</h4>
                                    <span class="desc" style="margin-left:0">RISK</span>
                                  </div>
                                </div>

                                <div class="pull text-center">
                                  <div class>
                                    <button
                                      type="submit"
                                      style="margin-right:0"
                                      class="btn btn-primary copy"
                                    >Copy</button>
                                  </div>
                                  <div class="par">
                                    <h4>
                                      <small>94 Copiers</small>
                                      <i class="fa fa-caret-up green"></i>
                                      <span class="text_gr green">114.3%</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div class="content_body_new">
                      <div class="row">
                        <div class="form-container">
                          <form action="#">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="col-xs-12 no-pl no-pr">
                                  <div class="col-sm-12 avatar-img no-pl no-pr">
                                    <div class="ico-img">
                                      <img
                                        src="../assets/data/profile/profile.jpg"
                                        alt="user-image"
                                        class="img-circle img-inline"
                                      />
                                    </div>
                                    <div class="form-group form-group_pad">
                                      <h4 class="bold no-mt no-mb">openwings</h4>
                                      <span class="desc" style="margin-left:0">Upcoming ICO</span>
                                    </div>
                                  </div>
                                </div>

                                <div class="pull">
                                  <div class="pull-left">
                                    <h4 class="green">53,78%</h4>
                                    <span class="desc" style="margin-left:0">RETURN (LAST 12M)</span>
                                  </div>

                                  <div class="pull-right">
                                    <h4 class="green borderes">3</h4>
                                    <span class="desc" style="margin-left:0">RISK</span>
                                  </div>
                                </div>

                                <div class="pull text-center">
                                  <div class>
                                    <button
                                      type="submit"
                                      style="margin-right:0"
                                      class="btn btn-primary copy"
                                    >Copy</button>
                                  </div>
                                  <div class="par">
                                    <h4>
                                      <small>94 Copiers</small>
                                      <i class="fa fa-caret-up green"></i>
                                      <span class="text_gr green">114.3%</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div class="content_body_new">
                      <div class="row">
                        <div class="form-container">
                          <form action="#">
                            <div class="row">
                              <div class="col-xs-12">
                                <div class="col-xs-12 no-pl no-pr">
                                  <div class="col-sm-12 avatar-img no-pl no-pr">
                                    <div class="ico-img">
                                      <img
                                        src="../assets/data/profile/profile.jpg"
                                        alt="user-image"
                                        class="img-circle img-inline"
                                      />
                                    </div>
                                    <div class="form-group form-group_pad">
                                      <h4 class="bold no-mt no-mb">openwings</h4>
                                      <span class="desc" style="margin-left:0">Upcoming ICO</span>
                                    </div>
                                  </div>
                                </div>

                                <div class="pull">
                                  <div class="pull-left">
                                    <h4 class="green">53,78%</h4>
                                    <span class="desc" style="margin-left:0">RETURN (LAST 12M)</span>
                                  </div>

                                  <div class="pull-right">
                                    <h4 class="green borderes">3</h4>
                                    <span class="desc" style="margin-left:0">RISK</span>
                                  </div>
                                </div>

                                <div class="pull text-center">
                                  <div class>
                                    <button
                                      type="submit"
                                      style="margin-right:0"
                                      class="btn btn-primary copy"
                                    >Copy</button>
                                  </div>
                                  <div class="par">
                                    <h4>
                                      <small>94 Copiers</small>
                                      <i class="fa fa-caret-up green"></i>
                                      <span class="text_gr green">114.3%</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="clearfix"></div>

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
  name: "Dashboard",
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