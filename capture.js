const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1080,
      height: 1350
    }
  });

  await page.goto("https://posts-renderer.web.app", {
    waitUntil: "networkidle"
  });

  await page.screenshot({
    path: "slide1.png",
    fullPage: true
  });

  await browser.close();
})();
