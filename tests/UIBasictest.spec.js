const { test, expect } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = "https://online.codl.lk/login/index.php";
  const userName = await page.goto(url);
  console.log("Page title:", await page.title());
});

test("Browser Context Playwright Test 2", async ({ page }) => {
  const url = await page.goto("https://fonts.google.com/");
  console.log("Page title:", await page.title());
});
