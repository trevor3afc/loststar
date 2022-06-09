import {
  LaunchOptions,
  BrowserLaunchArgumentOptions,
  BrowserConnectOptions,
} from 'puppeteer';
export interface browserConnectionConfigs
  extends LaunchOptions,
    BrowserLaunchArgumentOptions,
    BrowserConnectOptions {}
