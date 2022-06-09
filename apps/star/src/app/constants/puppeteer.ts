import { browserConnectionConfigs } from '../types/puppeteer';

export const browserConfig: browserConnectionConfigs = {
  headless: false,
  slowMo: 100,
  args: ['--window-size=1920,1080'],
};
