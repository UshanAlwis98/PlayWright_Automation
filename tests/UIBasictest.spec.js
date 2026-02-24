const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  // Chrome - plugins/cookies

  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  const cartTitle = page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  //css type,fill
  await userName.fill("Ushan Loshitha");
  await page.locator("[type='password']").fill("1998");
  await signInBtn.click();

  //wait until this locator is visible on the page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //type-fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signInBtn.click();

  // Wait until at least one product appears
  await cartTitle.first().waitFor();

  // console.log(await cartTitle.first().textContent());
  // console.log(await cartTitle.nth(1).textContent());

  const allTitles = await cartTitle.allTextContents();
  console.log(allTitles);
});

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://google.com");
  //get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
