import { test, expect } from "@playwright/test";

test("Rahul Shetty Login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator('input[id="username"]');
  const password = page.locator('input[id="password"]');
  const signinBtn = page.locator('input[id="signInBtn"]');
  const warningMsg = page.locator("[style*=block]");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning");
  await signinBtn.click();

  console.log(await warningMsg.textContent());
});
