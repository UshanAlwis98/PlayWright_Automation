import { test, expect } from "@playwright/test";

test("Rahul Shetty Academy Login Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Login Scenario Happy Path
  await page.fill('input[name="username"]', "testuser");
  await page.fill('input[name="password"]', "testpassword");
  await page.click('input[type="submit"]');
  // console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});
