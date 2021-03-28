browser.ignoreSynchronization = true;

class ContactUs {
  constructor() {
    this.contactUsMessage = element(by.name('message'));
    this.heading = element(by.name('id_contact'));
    this.email = element(by.name('from'));
    this.reference = element(by.name('id_order'));
    this.submit = element(by.name('submitMessage'));
  }

}

export default new ContactUs();
