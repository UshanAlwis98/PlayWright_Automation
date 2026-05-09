const { test, expect } = require("@playwright/test");

test("Browser Context Playwright Test 2", async ({ page }) => {
  const url = await page.goto(
    "https://rahulshettyacademy.com/loginpagePractise/",
  );

  console.log("Page title:", await page.title());
  const username = page.locator("#username");
  const password = page.locator("#password");
  const dropdown = page.locator("select.form-control");
  const radioButtons = page.locator(".radiotextsty");
  const dialogBox = page.locator("#okayBtn");
  const termsCheckbox = page.locator("#terms");
  const documentsLink = page.locator("a[href*='documents-request']");
  const loginButton = page.locator("#signInBtn");

  // await username.fill("ushanloshitha@gmail.com");
  // await password.fill("password");
  // await loginButton.click();

  // await page.waitForLoadState("networkidle");

  // const allTexts = await page.locator("h5 b").allTextContents();
  // console.log(allTexts);

  await dropdown.selectOption("consult");
  await radioButtons.last().check();
  await dialogBox.click();
  await expect(await radioButtons.last()).toBeChecked();
  console.log(await radioButtons.last().isChecked());

  await termsCheckbox.check();
  await expect(termsCheckbox).toBeChecked();

  await termsCheckbox.uncheck();
  expect(await termsCheckbox.isChecked()).toBeFalsy();

  await expect(documentsLink).toHaveAttribute("class", "blinkingText");
});

test("Browser Context Playwright Test 3", async ({ page }) => {
  const url = await page.goto(
    "https://rahulshettyacademy.com/loginpagePractise/",
  );

  const documentsLink = page.locator("a[href*='documents-request']");
  documentsLink.click();
});
