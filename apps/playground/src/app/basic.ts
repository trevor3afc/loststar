import { sleep } from '@loststar/utils/common';
import { logger } from '@loststar/helper/logger';

export const startBasic = async () => {
  await sleep({
    ms: 1000,
  });
  logger.info('[basic started]', {
    debug: true,
  });
};
