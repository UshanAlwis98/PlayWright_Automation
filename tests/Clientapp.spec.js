import { test, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test("Rahul Shetty Login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator('input[id="username"]');
  const password = page.locator('input[id="password"]');
  const signinBtn = page.locator('input[id="signInBtn"]');
  const warningMsg = page.locator("[style*=block]");
  const cardbodies = page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning");
  await signinBtn.click();

  console.log(await warningMsg.textContent());
  await expect(warningMsg).toContainText("Incorrect");

  //Successful Login Scenario

  await password.fill("Learning@830$3mK2");
  await signinBtn.click();

  console.log(await cardbodies.nth(0).textContent());
  console.log(await cardbodies.allTextContents());
});

test("UI Test", async ({ page }) => {
  const userName = page.locator('input[id="username"]');
  const password = page.locator('input[id="password"]');
  const signinBtn = page.locator('input[id="signInBtn"]');
  const cardbodies = page.locator(".card-body a");
  const dropdown = page.locator("select.form-control");
  const radiobtn = page.locator(".radiotextsty");
  const popupbox = page.locator("#okayBtn");
  const checkbox = page.locator("#terms");
  const documentLink = page.locator("[href *= 'documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");

  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await page.pause();
  await dropdown.selectOption("teach");
  await radiobtn.last().click();
  await expect(radiobtn.last()).toBeChecked();
  // console.log(await radiobtn.last().isChecked);
  await popupbox.click();
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  expect(await checkbox.isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
  await signinBtn.click();
  console.log(await cardbodies.nth(0).textContent());
});

test.only("Child Window handle", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const documentLink = page.locator("[href *= 'documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");

  const [newPage] = Promise.all([
    context.waitForEvent("page"),
    documentLink.click(),
  ]);

  text = await newPage.locator(".red").textContent();
  console.log(text);
});
