import { sleep } from '@loststar/utils/common';
import { logger } from '@loststar/helper/logger';
import { debug } from './text-img';
import { chromeService } from './service/chrome';
//import { BaseLogLevelColorHexs } from '@loststar/utils/makeup';

export const colorPlay = () => {
  //   const sampleLog = 'sample log 🎨🎨🎨!!!';
  //   for (const item in BaseLogLevelColorHexs) {
  //     logger[item](sampleLog, {
  //       debug: 123123,
  //     });
  //   }
};

export const startBasic = async () => {
  // await sleep({
  //   ms: 1000,
  // });
  //colorPlay();
  //await debug();
  await chromeService.test1();
  console.log('start basic');
};
