import puppeteer, { Browser } from 'puppeteer';
export function helperPuppeteer(): string {
  return 'helper-puppeteer';
}
import {
  LaunchOptions,
  BrowserLaunchArgumentOptions,
  BrowserConnectOptions,
} from 'puppeteer';
export interface browserConnectionConfigs
  extends LaunchOptions,
    BrowserLaunchArgumentOptions,
    BrowserConnectOptions {}

let browser: Browser;
export const initBrowserInstance = async ({
  config,
}: {
  config: browserConnectionConfigs;
}) => {
  browser = await puppeteer.launch(config);
  //return browser;
};

export const getBrowser = async () => {
  if (!browser) {
    await initBrowserInstance({
      config: {
        headless: false,
        slowMo: 100,
        args: ['--window-size=1920,1080'],
      },
    });
  }
  return browser;
};
