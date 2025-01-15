const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I open the homepage', async () => {
    await browser.url('https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home');
});

When('I click on the metro link', async () => {
    const link = await $('a[href="https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home"]');
    await link.click();
});

Then('I should see the homepage page', async () => {
    const url = await browser.getUrl();
    expect(url).toBe('https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home');
});