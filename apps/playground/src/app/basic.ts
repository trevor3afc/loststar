import { sleep } from '@loststar/utils/common';
import { logger } from '@loststar/helper/logger';
import { LogLevelColorHexs } from '@loststar/utils/makeup';

export const colorPlay = () => {
  const sampleLog = 'sample log  🎨🎨🎨!!!';
  for (const item in LogLevelColorHexs) {
    console.log({
      item,
    });
    //logger[item](sampleLog);
  }
};

export const startBasic = async () => {
  await sleep({
    ms: 1000,
  });
  colorPlay();
};
