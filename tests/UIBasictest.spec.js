const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = await page.goto("https://online.codl.lk/login/index.php");
  const username = page.locator("#username");
  const password = page.locator("#password");
  await username.fill("your_username");
  await password.fill("your_password");
  await page.locator("#loginbtn").click();
  console.log(await page.locator(".alert-danger").textContent());
});

test("Browser Context Playwright Test 2", async ({ page }) => {
  const url = await page.goto("https://fonts.google.com/");
  console.log("Page title:", await page.title());
});
