import { test, expect } from "@playwright/test";

test("Login Revision Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const Useremail = page.locator("input[id='userEmail']");
  const Password = page.locator("input[id='userPassword']");
  const LoginButton = page.locator("input[id='login']");
  const CardTitles = page.locator(".card-body b");
  const Products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  page.pause();
  await Useremail.fill("ushanloshitha@gmail.com");
  await Password.fill("1998");
  await LoginButton.click();

  // console.log(await CardTitles.nth(0).textContent());
  await page.waitForLoadState("networkidle");
  console.log(await CardTitles.allTextContents());
  console.log(Products.count());
});
