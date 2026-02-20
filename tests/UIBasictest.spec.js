const {test,expect} = require('@playwright/test');


test('Browser Context Playwright Test', async({browser})=>
  
{
    // Chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    //css type,fill
    await page.locator('#username').fill('Ushan Loshitha');
    await page.locator("[type='password']").fill('12345678');
    await page.locator('#signInBtn').click();
    //wait until this locator is visible on the page
    await page.locator("[style*='block']")

});

test('Page Playwright Test', async({page})=>
  
{  
     await page.goto('https://google.com');
        //get title - assertion
        console.log(await page.title());
        await expect(page).toHaveTitle('Google');
});