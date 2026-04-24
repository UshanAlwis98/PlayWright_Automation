const { test, expect } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = await page.goto("https://online.codl.lk/login/index.php");
  const username = page.locator("#username");
  const password = page.locator("#password");
  await username.fill("your_username");
  await password.fill("your_password");
  await page.locator("#loginbtn").click();
  // console.log(await page.locator(".alert-danger").textContent());
  await expect(page.locator(".alert-danger")).toContainText("Invalid");

  await username.fill("");
  await password.fill("");
  await username.fill("e2140020");
  await password.fill("$$213Ush@");
  await page.locator("#loginbtn").click();

  const courseTitles = page.locator(
    "//div[contains(@class,'course-info-container')]//span[contains(@class,'text-truncate')]",
  );

  await expect(courseTitles.first()).toBeVisible();

  console.log(await courseTitles.allTextContents());
});
