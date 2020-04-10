const {client} = require('nightwatch-cucumber');
const {Given, When, Then} = require('cucumber');

When(/^the user clicks on 'Login with my account' button$/, async () => {
  await client
    .waitForElementVisible('a[href="/dashboard/doctor/regular"]', 2000)
    .click('a[href="/dashboard/doctor/regular"]')
});

Then(/^the login form is shown$/, async () => {
    await client
        .assert.urlContains('/login', 'the doctor is on the login page')
  });

Given(/^a doctor is on login page$/, async () => {
  await client
    .url('https://dev--musing-shaw-70225c.netlify.com/login')
    .assert.urlContains('/login')
});

When(/^the doctor fills the login form$/, async () => {
  await client
    .setValue('input[name="email"]', 'j.pimentelmugica@gmail.com')
    .setValue('input[name="password"]', '123456')
});

When(/^the doctor clicks on the login button$/, async () => {
  await client
    .click('button[type="submit"]')
});

Then(/^the private dashboard will be loaded$/, async () => {
  await client
    .waitForElementVisible('main[class="main doctor-dashboard"]', 2000)
    .assert.urlContains('/dashboard/doctor', 'The doctor is on the private area')
});