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

  const slides = await page.$$(".slide");

for (let i = 0; i < slides.length; i++) {
  await slides[i].screenshot({
    path: `slide${i + 1}.png`
  });
}

  await browser.close();
})();
