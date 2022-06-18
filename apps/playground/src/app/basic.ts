import { sleep } from '@loststar/utils/common';
import { logger } from '@loststar/helper/logger';
import { LogLevelColorHexs } from '@loststar/utils/makeup';

export const colorPlay = () => {
  for (const item in LogLevelColorHexs) {
    console.log({
      item,
    });
  }
};

export const startBasic = async () => {
  await sleep({
    ms: 1000,
  });
  colorPlay();
  logger.info('[basic started]', {
    debug: true,
  });
};
