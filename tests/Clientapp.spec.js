import { test, expect } from "@playwright/test";

test("Rahul Shetty Academy Login Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const Username = page.locator('input[name="username"]');
  const Password = page.locator('input[name="password"]');
  const SignInButton = page.locator('input[type="submit"]');

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Login Scenario Happy Path
  await Username.fill("rahulshettyacademy");
  await Password.fill("testpassword");
  await SignInButton.click();

  // Validate Error Message
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await Username.fill("");
  await Username.fill("rahulshettyacademy");
  await Password.fill("");
  await Password.fill("Learning@830$3mK2");
  await SignInButton.click();

  console.log(await page.locator("div.card-body a").nth(0).textContent());
});
