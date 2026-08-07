import { test, expect } from "@playwright/test";

test("CODL Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://online.codl.lk/login/index.php");
});
