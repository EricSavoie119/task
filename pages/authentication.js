browser.ignoreSynchronization = true;

class AuthenticationPage {
  constructor() {
    this.email_textbox = element(by.name('email_create'));
    this.create_account = element(by.name('SubmitCreate'));
  }

}

export default new AuthenticationPage();
