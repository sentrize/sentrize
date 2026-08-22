// Interaction check: do the mega-menu dropdowns open on hover, both on first
// load and after client-side navigations?
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://localhost:3100";
const browser = await chromium.launch();
const page = await browser.newPage();

const checkDropdown = async (label) => {
  const toggle = page.locator(".navbar2_menu-dropdown .w-dropdown-toggle").first();
  await toggle.hover();
  await page.waitForTimeout(900);
  const openCount = await page.locator(".navbar2_menu-dropdown .w--open").count();
  const megaVisible = await page
    .locator(".navbar2_dropdown-list")
    .first()
    .isVisible()
    .catch(() => false);
  console.log(`${label.padEnd(28)} w--open:${openCount} megaVisible:${megaVisible}`);
  await page.mouse.move(10, 400);
  await page.waitForTimeout(400);
};

await page.goto(BASE + "/", { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(3500);
await checkDropdown("initial load /");

for (const r of ["/about", "/solutions", "/pricing", "/contact", "/blog"]) {
  await page.locator(`footer a[href="${r}"]`).first().scrollIntoViewIfNeeded();
  await page.locator(`footer a[href="${r}"]`).first().click();
  await page.waitForTimeout(2200);
  await page.mouse.move(0, 0);
  await checkDropdown(`after client-nav ${r}`);
}

await browser.close();
