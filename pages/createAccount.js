browser.ignoreSynchronization = true;

class CreateAccount {
  constructor() {
    this.male_gender_checkbox = element.all(by.name('id_gender')).first();
    this.first_name = element(by.name('customer_firstname'));
    this.last_name = element(by.name('customer_lastname'));
    this.password = element(by.id('passwd'));
    this.dofb_day = element(by.id('days'));
    this.dofb_month = element(by.id('months'));
    this.first_name2 = element(by.name('firstname'));
    this.last_name2 = element(by.name('lastname'));
    this.address = element(by.name('address1'));
    this.city = element(by.name('city'));
    this.state = element(by.name('id_state'));
    this.postal_code = element(by.name('postcode'))
    this.phone_number = element(by.name('phone_mobile'));
    this.register = element(by.name('submitAccount'));
  }
}

export default new CreateAccount();
