import { browserConnectionConfigs } from '@loststar/helper/puppeteer';

export const browserConfig: browserConnectionConfigs = {
  headless: false,
  slowMo: 100,
  defaultViewport: {
    width: 1920,
    height: 1080,
  },
  args: ['--window-size=1920,1080'],
};
