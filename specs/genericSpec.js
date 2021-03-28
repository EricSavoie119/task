import loginPage from '../pages/homepage';
import authenticationPage from '../pages/authentication'
import createAccount from '../pages/createAccount'
import userData from '../data/userData.js'
import womensWear from '../pages/womensWear'
import contactUs from '../pages/contactUs'


describe ('Store Functions', () => {
    beforeEach(async () => {
        await loginPage.goto();
    });

    it('should allow me to open the Contact us page', async () => {
      await loginPage.contactUs.click();
      await browser.driver.wait(
                  ExpectedConditions.presenceOf(contactUs.contactUsMessage ),
                  10000, 'element is not present');
      expect(await contactUs.contactUsMessage.isDisplayed()).toBe(true);
    });

    it('should allow user creation', async () => {
      await loginPage.loginButton.click();
      await authenticationPage.email_textbox.sendKeys(userData.email);
      await authenticationPage.create_account.click();
      await browser.driver.wait(
                  ExpectedConditions.presenceOf(createAccount.male_gender_checkbox ),
                  5000, 'element is not present');
      await createAccount.male_gender_checkbox.click();
      await createAccount.first_name.sendKeys(userData.first_name);
      await createAccount.last_name.sendKeys(userData.last_name);
      await createAccount.password.sendKeys(userData.password);
      await createAccount.address.sendKeys(userData.address);
      await createAccount.city.sendKeys(userData.city);
      try {
        await browser.driver.wait(
              ExpectedConditions.visibilityOf(createAccount.state),
              300, 'element is not present');
            }
      catch (err) {
        process.stdout.write("");
      };
      await createAccount.state.click();
      await createAccount.state.sendKeys(userData.state);
      await createAccount.postal_code.sendKeys(userData.postal_code);
      await createAccount.phone_number.sendKeys(userData.phone_number);
      await createAccount.register.click();


      expect(await element(by.className('logout')).isDisplayed()).toBe(true);
    });

    it('should allow me to navigate to womens wear', async () => {
      await loginPage.womensWear.click();
      await browser.driver.wait(
                  ExpectedConditions.presenceOf(womensWear.title ),
                  5000, 'element is not present');
      expect(await womensWear.title.isDisplayed()).toBe(true);
    });



});
