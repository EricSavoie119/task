browser.ignoreSynchronization = true;

class WomensWear {
  constructor() {
    this.title = element(by.cssContainingText('.navigation_page', 'Women'));
  }
}

export default new WomensWear();
