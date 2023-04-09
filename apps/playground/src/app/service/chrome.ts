import puppeteer from 'puppeteer';

const session1 = {};

const test1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './tmp/myChromeSession',
  });
  const page = await browser.newPage();
  const things = await page.evaluate(() => {
    // set something
    const sessionJSON = JSON.stringify({ pup: 'peteer' });
    localStorage.setItem('session', sessionJSON);

    // get it
    const session = localStorage.getItem('session');

    // return it
    return session;
  });
  console.log({
    things,
  });
  await page.goto('https://web.whatsapp.com/');
};

export const chromeService = {
  test1,
};
