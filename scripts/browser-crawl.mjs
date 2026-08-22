// Browser smoke test: loads the site in headless Chromium, clicks through the
// nav (including the mega-menu path that crashed in production), and reports
// tab crashes, page errors, console errors, and JS heap growth.
// Usage: node scripts/browser-crawl.mjs [baseUrl]
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://localhost:3000";
const problems = [];
let crashed = false;

const browser = await chromium.launch();
const page = await browser.newPage();

page.on("crash", () => {
  crashed = true;
  problems.push("TAB CRASHED");
});
page.on("pageerror", (err) => {
  const stack = String(err.stack ?? "").split("\n").slice(1, 3).join(" | ");
  problems.push(`pageerror @ ${page.url()}: ${String(err).slice(0, 160)} :: ${stack.slice(0, 200)}`);
});
page.on("console", (msg) => {
  if (msg.type() === "error") problems.push(`console: ${msg.text().slice(0, 200)}`);
});
page.on("requestfailed", (req) => {
  if (req.url().startsWith(BASE)) problems.push(`requestfailed: ${req.url()} ${req.failure()?.errorText}`);
});

const heap = async () =>
  page.evaluate(() => (performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : -1));

const settle = async (ms = 2500) => {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(ms);
};

console.log(`== base: ${BASE}`);

// 1. Home
await page.goto(BASE + "/", { waitUntil: "load", timeout: 45000 });
await settle(4000);
console.log(`home loaded, heap ${await heap()}MB`);

// 2. The production crash path: Products mega -> Software Development
await page.hover(".navbar2_menu-dropdown");
await page.waitForTimeout(600);
const item = page.locator('a[href="/services#software-development"]').first();
if (await item.count()) {
  await item.click();
  await settle(3500);
  console.log(`clicked mega item -> ${page.url()}, heap ${await heap()}MB`);
} else {
  problems.push("mega item /services#software-development not found");
}

// 3. Walk primary routes via client-side clicks
const routes = ["/solutions", "/enterprise", "/pricing", "/about", "/careers",
  "/partners", "/case-studies", "/blog", "/contact", "/mobile-simulator",
  "/privacy-policy", "/", "/services"];
for (const r of routes) {
  if (crashed) break;
  const link = page.locator(`a[href="${r}"]`).first();
  if (await link.count()) {
    await link.click({ timeout: 8000 }).catch(async () => {
      await page.goto(BASE + r, { waitUntil: "domcontentloaded", timeout: 45000 });
    });
  } else {
    await page.goto(BASE + r, { waitUntil: "domcontentloaded", timeout: 45000 });
  }
  await settle(1800);
  const nav = await page.locator(".navbar2_component").count();
  const foot = await page.locator("footer.v2-footer").count();
  console.log(`${r.padEnd(20)} url=${page.url().replace(BASE, "")} nav:${nav} footer:${foot} heap:${await heap()}MB`);
}

// 4. Direct load of the crash URL
if (!crashed) {
  await page.goto(BASE + "/services#software-development", { waitUntil: "load", timeout: 45000 });
  await settle(4000);
  console.log(`direct anchor load ok, heap ${await heap()}MB`);
}

await browser.close();

const uniq = [...new Set(problems)];
console.log(`\n== problems (${uniq.length}):`);
uniq.slice(0, 30).forEach((p) => console.log("  -", p));
process.exit(crashed ? 2 : 0);
