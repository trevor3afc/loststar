import puppeteer from 'puppeteer';

const session1 = {};

const test1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');
};

export const chromeService = {
  test1,
};
