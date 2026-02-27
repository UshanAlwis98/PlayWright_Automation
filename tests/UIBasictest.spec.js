const { test, expect } = require("@playwright/test");

test("Browser Context Playwright Test", async ({ browser }) => {
  // Chrome - plugins/cookies

  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  const cartTitle = page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  //css type,fill
  await userName.fill("Ushan Loshitha");
  await page.locator("[type='password']").fill("1998");
  await signInBtn.click();

  //wait until this locator is visible on the page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //type-fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signInBtn.click();

  // Wait until at least one product appears
  await cartTitle.first().waitFor();

  // console.log(await cartTitle.first().textContent());
  // console.log(await cartTitle.nth(1).textContent());

  const allTitles = await cartTitle.allTextContents();
  console.log(allTitles);
});

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  const documentLocator = page.locator("[href  *= 'documents-request' ]");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms").last()).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLocator).toHaveAttribute("class", "blinkingText");
  //await page.pause();
});

test.only("Child Windows Handle", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLocator = page.locator("[href  *= 'documents-request' ]");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"), //listen to the new page event
    documentLocator.click(),
  ]); // new page is opened

  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const email = arrayText[1].split(" ")[0];
  console.log(email);
  await page.locator("#username").type(email);
  await page.pause();
  console.log(await page.locator("#username").textContent());
});
