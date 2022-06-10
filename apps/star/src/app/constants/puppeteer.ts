import { browserConnectionConfigs } from '@loststar/helper/puppeteer';

export const browserConfig: browserConnectionConfigs = {
  headless: true,
  slowMo: 100,
  defaultViewport: {
    width: 640,
    height: 480,
  },
  args: ['--window-size=640,480'],
};

export const StreamConfig = {
  followNewTab: true,
  fps: 25,
  ffmpeg_Path: null,
  videoFrame: {
    width: 640,
    height: 480,
  },
};
