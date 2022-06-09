import * as puppeteer from 'puppeteer';
export function helperPuppeteer(): string {
  return 'helper-puppeteer';
}

export const browserInstance = async ({
  config,
}: {
  config: puppeteer.BrowserConnectOptions;
}) => {
  const browser = await puppeteer.launch(config);
  return browser;
};
