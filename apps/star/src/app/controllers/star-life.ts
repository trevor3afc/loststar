import { getLogger } from '@loststar/helper/logger';
import { getBrowser, initBrowserInstance } from '@loststar/helper/puppeteer';
import { benchmarkEnd, benchmarkStart, sleep } from '@loststar/utils/common';
import { Browser } from 'puppeteer';
import { browserConfig } from '../constants/puppeteer';

const logger = getLogger();

export const starPrepare = async () => {
  logger.info('starPrepare');
  await sleep({ ms: 1000 });
};
let browser: Browser;
export const testLife = async () => {
  await initBrowserInstance({
    config: browserConfig,
  });
  browser = await getBrowser();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  await page.keyboard.press('k');
  await sleep({ ms: 20000 });
  await browser.close();
};

export const starMain = async () => {
  logger.info('star-life:main');
};

export const runStarLife = async () => {
  await starPrepare();
  await testLife();

  benchmarkStart({
    label: 'starLife',
  });
  logger.info('star-life:runLife');
  await sleep({ ms: 3000 });
  benchmarkEnd({
    label: 'starLife',
  });
  await runStarLife();
};
