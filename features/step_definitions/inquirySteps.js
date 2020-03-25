const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    Given(/^a user goes to the home page$/, () => {
        return client
            .url('https://dev--musing-shaw-70225c.netlify.com/')
            .assert.elementPresent('div[id="root"]')
    });

    When(/^the user clicks on 'Make a Inquiry' button$/, () => {
        return client
            .waitForElementVisible('a[href="/register/patient"]', 2000)
            .click('a[href="/register/patient"]')
    });

    Then(/^the inquiry form is displayed$/, () => {
        return client
            .waitForElementVisible('header[class="register-form__header"]', 10000)
            .assert.elementPresent('form[action="#"]')
    });
});
