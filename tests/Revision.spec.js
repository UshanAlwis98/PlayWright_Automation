import { test, expect } from "@playwright/test";

test("Login Revision Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const Useremail = page.locator("input[id='userEmail']");
  const Password = page.locator("input[id='userPassword']");
  const LoginButton = page.locator("input[id='login']");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await Useremail.fill("ushanloshitha@gmail.com");
  await Password.fill("1998");
  await LoginButton.click();

  const CardTitles = page.locator(".card-body b");

  console.log(await CardTitles.nth(0).textContent());
  console.log(await CardTitles.allTextContents());
});
