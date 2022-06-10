import { getLogger } from '@loststar/helper/logger';
import { getBrowser, initBrowserInstance } from '@loststar/helper/puppeteer';
import { benchmarkEnd, benchmarkStart, sleep } from '@loststar/utils/common';
import { Browser, CDPSession } from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';
import { PassThrough } from 'stream';
import { browserConfig } from '../constants/puppeteer';
import PATH, { resolve } from 'path';
import ffmpeg, { FfmpegCommandOptions } from 'fluent-ffmpeg';

const logger = getLogger();
const frames = [];
export const starPrepare = async () => {
  logger.info('starPrepare');
  await sleep({ ms: 1000 });
};
let browser: Browser;
export const testLife = async () => {
  const ffOptions: FfmpegCommandOptions = {};
  const ffcmd = ffmpeg(ffOptions);

  const pipeStream = new PassThrough();
  await initBrowserInstance({
    config: browserConfig,
  });
  browser = await getBrowser();
  const page = await browser.newPage();

  const recorder = new PuppeteerScreenRecorder(page, {
    followNewTab: true,
    fps: 60,
    ffmpeg_Path: './ffmpeg.exe',
  });
  await recorder.startStream(pipeStream);
  //await recorder.start('output.mp4');
  await sleep({ ms: 1000 });

  ffcmd
    .setFfmpegPath('./ffmpeg.exe')
    .input(pipeStream)
    .inputFPS(60)
    .size('640x480')
    .autopad()
    .on('start', (ffcmd) => {
      console.log({
        ffcmd,
      });
    })
    .on('error', (err) => {
      console.log({
        err,
      });
    })
    .format('flv')
    .output('rtmp://localhost:1935/live/output')
    .run();

  await page.goto('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  await page.keyboard.press('k');
  //   const session = await page.target().createCDPSession();
  //   await session.send('Page.startScreencast', {
  //     format: 'png',
  //     maxWidth: 1920,
  //     maxHeight: 1080,
  //   });

  //   session.on('Page.screencastFrame', (event) => {
  //     event.data; // Base64 encoded frame
  //     console.log(`push:event.data.length:${event.data.length}`);
  //     frames.push(event.data);
  //   });
  await sleep({ ms: 20000 });
  //await session.send('Page.stopScreencast');
  //await session.detach();
  await recorder.stop();
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
  //playFrames();
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
