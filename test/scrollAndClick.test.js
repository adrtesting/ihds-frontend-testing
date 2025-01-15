const {Given, When, Then} = require('@wdio/cucumber-framework');

Given('I open the homepage', async () => {
    await browser.url('https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home');
});

When('I click on the metro link', async () => {
    const link = await $('a[href="https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home"]');
    await link.click();

     // Wait for the popup to appear
     const usernameField = await $('input[name=""]'); // Adjust selector to match the actual username field
     const passwordField = await $('input[name=""]'); // Adjust selector to match the actual password field
     const submitButton = await $('button[type="submit"]'); // Adjust selector for the login button
 
     // Fill in credentials
     await usernameField.setValue('');
     await passwordField.setValue('"');
 
     // Submit the form
     await submitButton.click();
});

Then('I should see the homepage page', async () => {
    const title = await browser.getTitle();
    expect(title).toBe('https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home');
});

describe('User Journey: Navigate, Scroll, and Click', () => {
    it('should navigate to the page, scroll down, and click all elements in the list', async () => {
    
        const url = 'https://www.metro-bi-wb-ids-s01.cf.metro.cloud/#/home';
        await browser.url(url);
        console.log(`Navigated to: ${url}`);
        
    
        await browser.pause(5000); 

        const cards = await $$('//p[contains(@class,"news-item")]/parent::div/div[contains(@class,"d-flex list-item")]');
        const textToFind = 'Store Performance';

        for (const element of cards) {
            const text = await element.getText();

            
            if (text.includes(textToFind)) {
                console.log('Element found:', text);

                
                await browser.pause(2000);

                await browser.execute((el) => {
                    el.scrollIntoView({ block: 'center', inline: 'nearest' });
                }, element);

                
                const parentElement = await element.$('..');
                const listOfAnchors = await parentElement.$$('a');

                
                for (const anchor of listOfAnchors) {
                    const anchorText = await anchor.getText();
                    console.log('Clicking on:', anchorText);

                    
                    await anchor.click();

                    await browser.pause(1000);
                }

                break;
            }
        }
    });
});
