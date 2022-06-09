import { browserConnectionConfigs } from '@loststar/helper/puppeteer';

export const browserConfig: browserConnectionConfigs = {
  headless: true,
  slowMo: 100,
  defaultViewport: {
    width: 1920,
    height: 1080,
  },
  args: ['--window-size=1920,1080'],
};

export const StreamConfig = {
  followNewTab: true,
  fps: 25,
  ffmpeg_Path: null,
  videoFrame: {
    width: 1024,
    height: 768,
  },
  aspectRatio: '4:3',
};
