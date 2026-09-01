import { test, expect } from "@playwright/test";

test("UOM LMS Login Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const Username = page.locator("#username");
  const Password = page.locator("#password");
  const LoginButton = page.locator("#loginbtn");

  await page.goto("https://online.codl.lk/login/index.php");

  await Username.fill("e214002");
  await Password.fill("$$213Ush@");
  await LoginButton.click();
});
