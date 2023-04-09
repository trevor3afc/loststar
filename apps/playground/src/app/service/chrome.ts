import { sleep } from '@loststar/utils/common';
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

  for (let i = 0; i <= 1000; i++) {
    console.log('check');
    await sleep({
      ms: 1000,
    });
    const returnedCookie = await page.cookies();
    console.log({
      returnedCookie,
    });
  }

  console.log({});
};

export const chromeService = {
  test1,
};
