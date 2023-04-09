import puppeteer from 'puppeteer';

const session1 = {
  'bhMUVc+TbTiQqfh+VPt3/w==': false,
  '1+z0rTMVSABiYMSSa/Ms/g==': 0,
  WAPrimaryFeatures: [
    'clear_and_delete_chat_sync',
    'contact_except',
    'reactions_send',
    'ddm_settings',
    'vo_sp_receiver',
    'recent_sticker',
    'poll_creation',
    'poll_creation_one_on_one',
    'favorite_sticker',
    'link_preview',
  ],
};

const test1 = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './tmp/myChromeSession',
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');
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
};

export const chromeService = {
  test1,
};
