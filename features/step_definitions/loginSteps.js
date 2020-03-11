const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given}) => {

    Given(/^a user goes to the eBay single-page$/, () => {
        return client
            .url('https://delivery.ebay.co.uk/new_label?itemId=283493786780&transId=2101760139018')
            .assert.urlContains('ebay')
    });
//
//     When(/^the user login with valid credentials$/, () => {
//         return client
//             .waitForElementVisible('input[id="userid"]', 5000)
//             .setValue('input[id="userid"]', 'packlinkstore2')
//             .waitForElementVisible('#spanLblPs', 2000)
//             .setValue('#spanLblPs', 'packlink123')
//             .click('#sgnBt')
//     });

//     Then(/^the single-page is displayed$/, () => {
//         return client.assert.visible('h2[class="card__title"]', 2000);
//     });

});
