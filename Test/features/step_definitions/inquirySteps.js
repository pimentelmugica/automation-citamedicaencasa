const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^a user goes to the home page$/, async () => {
  await client
    .url('https://dev--musing-shaw-70225c.netlify.com')
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

When(/^the user fills the psychological form$/, async () => {
  await client
    .setValue('input[name="age"]', '18')
    .setValue('input[name="email"]', 'j.pimentelmugica+automation@gmail.com')
    .setValue('input[name="confirmEmail"]', 'j.pimentelmugica+automation@gmail.com')
    .click('div[aria-haspopup="listbox"]')
    .click('ul[role="listbox"] li[tabindex="-1"]')
    .setValue('textarea[name="summary"]', 'This is an automated message')
    .click('input[name="privacy"]')
    .click('input[name="terms"]')
    .click('input[name="confirmAge"]')    
});

When(/^the user clicks on 'Send Inquiry' button$/, async () => {
  await client
    .waitForElementVisible('button[type="submit"]', 2000)
    .click('button[type="submit"]')
});

Then(/^the inquiry will be sent$/, async () => {
  await client
    .waitForElementVisible('nav[class="back-home"]', 2000)
});