import { sleep } from '@loststar/utils/common';
import { logger } from '@loststar/helper/logger';
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
  await sleep({
    ms: 1000,
  });
  colorPlay();
};
