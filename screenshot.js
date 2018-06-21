const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ["--no-sandbox"]});
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:4000/", { waitUntil: "networkidle0" });
  await page.screenshot({path: "screenshot.png", fullPage: true});
  await browser.close();
})();
