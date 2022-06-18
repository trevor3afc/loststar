import { sleep } from '@loststar/utils/common';
import { getLogger, initLogger } from '@loststar/helper/logger';

export const startBasic = async () => {
  await initLogger();
  const logger = getLogger();
  await sleep({
    ms: 1000,
  });
  logger.info('[basic started]', {
    debug: true,
  });
};
