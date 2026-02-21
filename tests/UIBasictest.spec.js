const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  // Chrome - plugins/cookies

  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  //css type,fill
  await userName.fill("Ushan Loshitha");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signInBtn.click();
  //wait until this locator is visible on the page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //type-fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signInBtn.click();
  console.log(await page.locator(".card-body a").first().textContent());
  console.log(await page.locator(".card-body a").nth(1).textContent());
});

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://google.com");
  //get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
