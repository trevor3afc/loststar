import { getLogger } from '@loststar/helper/logger';
import { getBrowser, initBrowserInstance } from '@loststar/helper/puppeteer';
import { benchmarkEnd, benchmarkStart, sleep } from '@loststar/utils/common';
import { Browser, CDPSession } from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { PassThrough } from 'stream';
import { browserConfig } from '../constants/puppeteer';

const logger = getLogger();
const frames = [];
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
  const session = await page.target().createCDPSession();
  await session.send('Page.startScreencast');
  session.on('Page.screencastFrame', (event) => {
    event.data; // Base64 encoded frame
    console.log(`push:event.data.length:${event.data.length}`);
    frames.push(event.data);
  });
  await sleep({ ms: 20000 });
  await session.send('Page.stopScreencast');
  await session.detach();
  await browser.close();
};

export const starMain = async () => {
  logger.info('star-life:main');
};

const playFrames = async () => {
  let play = true;
  let counter = 0;
  while (play) {
    //const nextFrame = frames.shift();
    counter++;
    console.log({
      counter,
      length: frames.length,
    });

    if (counter > 20000) {
      play = false;
    }
    await sleep({
      ms: 500,
    });
  }
};

export const runStarLife = async () => {
  playFrames();
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
