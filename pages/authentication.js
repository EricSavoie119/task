browser.ignoreSynchronization = true;

class AuthenticationPage {
  constructor() {
    this.email_textbox = element(by.name('email_create'));
    this.create_account = element.all(by.name('SubmitCreate')).first();
  }

}

export default new AuthenticationPage();
