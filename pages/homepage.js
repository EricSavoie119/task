// page is non-angular
browser.ignoreSynchronization = true;

class LoginPage {
    constructor() {
        this.loginButton = $('.login');
        this.url = 'http://automationpractice.com/index.php';
        this.pageLoaded = this.inDom($('#page'));
        this.womensWear = element(by.css('a[title=Women]'));
        this.contactUs = element(by.css('a[title="Contact us"]'));
    }

    inDom(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    async goto() {
        await browser.get(this.url, 9000);
        return await this.loaded();
    }

    async loaded() {
        return browser.wait(async () => {
            return await this.pageLoaded();
        }, 9000, 'timeout: waiting for page to load. The url is: ' + this.url);
    }
}
export default new LoginPage();
