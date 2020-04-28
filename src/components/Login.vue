<template>
  <div class="container">
    <div class="row">
      <div class="mt-90 col-lg-4 col-lg-offset-4">
        <div class="row">
          <div class="login-wrapper crypto">
            <div class="col-lg-12 col-sm-12">
              <div id="login" class="login loginpage mt-0 no-pl no-pr pt30 pb30">
                <div class="login-form-header flex align-items-center">
                  <img
                    src="../assets/data/crypto-dash/padlock.png"
                    alt="login-icon"
                    style="max-width:64px"
                  />
                  <div class="login-header">
                    <h4 class="bold">Login Now!</h4>
                    <h4>
                      <small>Enter your credentials to login.</small>
                    </h4>
                  </div>
                </div>

                <div class="box login">
                  <div class="content-body" style="padding-top:30px">
                    <form id="msg_validate" action="#" novalidate="novalidate" class="no-mb no-mt">
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="form-group">
                            <label class="form-label">Email</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="form-control"
                                name="formfield2"
                                placeholder="email"
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="form-label">Password</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="form-control"
                                name="formfield1"
                                placeholder="password"
                              />
                            </div>
                          </div>

                          <div class="text-center">
                            <a href="index-dashboard.html" class="btn btn-primary btn-login">Log in</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <p id="nav" class="over-h">
                  <a class="pull-left blue-text" href="#" title="Password Lost and Found">
                    Forgot
                    password?
                  </a>
                  <a class="pull-right blue-text" href="register.html" title="Sign Up">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
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
    this.toggleBodyClass("addClass", "login_page");
    this.toggleBodyClass("addClass", "login-bg");
  },
  destroyed() {
    this.toggleBodyClass("removeClass", "login_page");
    this.toggleBodyClass("removeClass", "login-bg");
  }
};
</script>

<style>
</style>