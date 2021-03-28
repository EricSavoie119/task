browser.ignoreSynchronization = true;

class ContactUs {
  constructor() {
    this.contactUsMessage = element(by.name('message'));
  }

}

export default new ContactUs();
