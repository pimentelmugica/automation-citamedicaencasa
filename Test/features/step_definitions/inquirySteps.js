const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^a user goes to the home page$/, async () => {
  await client
    .url('https://dev--musing-shaw-70225c.netlify.com/')
    .assert.elementPresent('div[id="root"]')
});

When(/^the user clicks on 'Make a Inquiry' button$/, async () => {
  await client
    .waitForElementVisible('a[href="/register/citizen"]', 2000)
    .click('a[href="/register/citizen"]')
});

Then(/^the inquiry form is shown$/, async () => {
  await client
    .waitForElementVisible('header[class="register-form__header"]', 10000)
    .assert.elementPresent('form[action="#"]')
});
