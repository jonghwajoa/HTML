class Auth {
  constructor() {
    this.loginSubmitBtn = document.getElementById('login-submit-btn');
    this.signupSubmitBtn = document.getElementById('signup-submit-btn');
    this.form = document.getElementsByTagName('form');
    this.eventInit();
  }

  eventInit() {
    if (this.loginSubmitBtn) {
      this.loginSubmitBtn.addEventListener('click', e => {
        e.preventDefault();
      });
    } else {
      this.signupSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log($('form').serialize());
      });
    }
  }
}

new Auth();
